import { Injectable } from '@angular/core';
import { COLOR_TOKENS, SPACING_TOKENS, TYPOGRAPHY_TOKENS, RADIUS_TOKENS } from '../common/tokens';
import { WIDTH, HEIGHT } from '../common/tokens/dimensions';
import { ElementRef } from '@angular/core';

/**
 * Component variants supported by the styling system
 */
export type ComponentVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'information';

/**
 * Size variants supported by the styling system
 */
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';

/**
 * Component padding variants supported by the styling system
 */
export type ComponentPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Component margin variants supported by the styling system
 */
export type ComponentMargin = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Component border radius variants supported by the styling system
 */
export type ComponentRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Component shadow variants supported by the styling system
 */
export type ComponentShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';

type CSSProperty =
  | 'background-color'
  | 'color'
  | 'padding'
  | 'font-size'
  | 'font-weight'
  | 'border-radius'
  | 'line-height'
  | 'width'
  | 'height';

type StyleObject = Partial<{
  [K in CSSProperty]: string;
}>;

type VariantStyles = {
  [K in ComponentVariant]: StyleObject;
};

type ModifierState = Record<string, boolean>;

type ClassOptions = {
  variantPrefix?: string;
  sizePrefix?: string;
  modifierPrefix?: string;
};

@Injectable({
  providedIn: 'root'
})
export class StylesService
{
  private readonly BASE_CLASS = 'ax-button';
  private readonly DEFAULT_VARIANT_PREFIX = 'v-';
  private readonly DEFAULT_SIZE_PREFIX = 'w-';
  private readonly DEFAULT_MODIFIER_PREFIX = 'comp-';
  private readonly VALID_VARIANTS: ComponentVariant[] = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'information'
  ];
  private readonly VALID_SIZES: ComponentSize[] = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'full'];

  /** Available padding options for components */
  private readonly VALID_PADDING: ComponentPadding[] = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];

  /** Available margin options for components */
  private readonly VALID_MARGIN: ComponentMargin[] = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];

  /** Available border radius options for components */
  private readonly VALID_RADIUS: ComponentRadius[] = ['none', 'sm', 'md', 'lg', 'xl', 'full'];

  /** Available shadow options for components */
  private readonly VALID_SHADOW: ComponentShadow[] = ['none', 'sm', 'md', 'lg', 'xl'];

  private variantStyles: VariantStyles = {
    primary: {
      'background-color': COLOR_TOKENS.background.PRIMARY,
      'color': COLOR_TOKENS.text.PRIMARY,
      'padding': SPACING_TOKENS.LG,
      'font-size': TYPOGRAPHY_TOKENS.size.LG,
      'font-weight': TYPOGRAPHY_TOKENS.weight.SEMIBOLD,
      'border-radius': RADIUS_TOKENS.LG,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    },
    secondary: {
      'background-color': COLOR_TOKENS.background.SECONDARY,
      'color': COLOR_TOKENS.text.SECONDARY,
      'padding': SPACING_TOKENS.MD,
      'font-size': TYPOGRAPHY_TOKENS.size.BASE,
      'font-weight': TYPOGRAPHY_TOKENS.weight.NORMAL,
      'border-radius': RADIUS_TOKENS.MD,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    },
    success: {
      'background-color': COLOR_TOKENS.background.SUCCESS,
      'color': COLOR_TOKENS.text.SUCCESS,
      'padding': SPACING_TOKENS.MD,
      'font-size': TYPOGRAPHY_TOKENS.size.BASE,
      'font-weight': TYPOGRAPHY_TOKENS.weight.MEDIUM,
      'border-radius': RADIUS_TOKENS.MD,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    },
    warning: {
      'background-color': COLOR_TOKENS.background.WARNING,
      'color': COLOR_TOKENS.text.WARNING,
      'padding': SPACING_TOKENS.MD,
      'font-size': TYPOGRAPHY_TOKENS.size.BASE,
      'font-weight': TYPOGRAPHY_TOKENS.weight.MEDIUM,
      'border-radius': RADIUS_TOKENS.MD,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    },
    danger: {
      'background-color': COLOR_TOKENS.background.DANGER,
      'color': COLOR_TOKENS.text.DANGER,
      'padding': SPACING_TOKENS.MD,
      'font-size': TYPOGRAPHY_TOKENS.size.BASE,
      'font-weight': TYPOGRAPHY_TOKENS.weight.MEDIUM,
      'border-radius': RADIUS_TOKENS.MD,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    },
    information: {
      'background-color': COLOR_TOKENS.background.INFORMATION,
      'color': COLOR_TOKENS.text.INFORMATION,
      'padding': SPACING_TOKENS.MD,
      'font-size': TYPOGRAPHY_TOKENS.size.BASE,
      'font-weight': TYPOGRAPHY_TOKENS.weight.MEDIUM,
      'border-radius': RADIUS_TOKENS.MD,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    }
  };

  private sizeMap = {
    xs:  { fontSize: TYPOGRAPHY_TOKENS.size.XS,    padding: SPACING_TOKENS.XS },
    sm:  { fontSize: TYPOGRAPHY_TOKENS.size.SM,    padding: SPACING_TOKENS.SM },
    md:  { fontSize: TYPOGRAPHY_TOKENS.size.BASE,  padding: SPACING_TOKENS.MD },
    lg:  { fontSize: TYPOGRAPHY_TOKENS.size.LG,    padding: SPACING_TOKENS.LG },
    xl:  { fontSize: TYPOGRAPHY_TOKENS.size.XL,    padding: SPACING_TOKENS.XL },
    xxl: { fontSize: TYPOGRAPHY_TOKENS.size.XXL,   padding: SPACING_TOKENS.XXL },
    xxxl:{ fontSize: TYPOGRAPHY_TOKENS.size.XXXL,  padding: SPACING_TOKENS.XXXL },
    full:{ fontSize: TYPOGRAPHY_TOKENS.size.XXXXL, padding: SPACING_TOKENS.XXXL },
  };

  /**
   * Gets the CSS classes for a component based on its current state and attributes
   * @param elementRef The element reference to get classes from
   * @param baseClass The base class name for the component
   * @param modifiers Object containing modifier states
   * @param options Configuration options for class generation
   * @returns Space-separated string of CSS classes
   */
  getComponentClass(
    elementRef: ElementRef,
    baseClass: string,
    modifiers: ModifierState,
    options: ClassOptions = {}
  ): string {
    return this.getClassList(
      baseClass,
      Array.from(elementRef.nativeElement.classList),
      modifiers,
      options
    );
  }

  /**
   * Gets the CSS classes for a component based on its current state and attributes
   * @param baseClass The base class name for the component
   * @param classList The list of classes from the element
   * @param modifiers Object containing modifier states
   * @param options Configuration options for class generation
   * @returns Space-separated string of CSS classes
   */
  private getClassList(
    baseClass: string,
    classList: string[],
    modifiers: ModifierState,
    options: ClassOptions = {}
  ): string {
    const {
      variantPrefix = this.DEFAULT_VARIANT_PREFIX,
      sizePrefix = this.DEFAULT_SIZE_PREFIX,
      modifierPrefix = this.DEFAULT_MODIFIER_PREFIX
    } = options;

    const classes = [baseClass];

    this.addVariantClass(classes, classList, baseClass, variantPrefix);
    this.addSizeClasses(classes, classList, baseClass, sizePrefix, sizePrefix);
    this.addModifierClasses(classes, baseClass, modifiers);

    return classes.join(' ');
  }

  /**
   * Adds variant class if a valid variant is specified
   */
  public addVariantClass(
    classes: string[],
    classList: string[],
    baseClass: string,
    variantPrefix: string = 'v-'
  ): void {
    const variantClass = classList.find(cls => 
      cls.startsWith(variantPrefix) && this.getValidVariants().includes(cls.slice(variantPrefix.length) as ComponentVariant)
    );
    if (variantClass) {
      classes.push(`${baseClass}-${variantClass.slice(variantPrefix.length)}`);
    }
  }

  /**
   * Adds size-related classes if valid sizes are specified
   */
  public addSizeClasses(
    classes: string[],
    classList: string[],
    baseClass: string,
    widthPrefix: string = 'w-',
    heightPrefix: string = 'h-'
  ): void {
    // Add width class
    const widthClass = classList.find(cls => 
      cls.startsWith(widthPrefix) && this.getValidSizes().includes(cls.slice(widthPrefix.length) as ComponentSize)
    );
    if (widthClass) {
      classes.push(`${baseClass}-w-${widthClass.slice(widthPrefix.length)}`);
    }

    // Add height class
    const heightClass = classList.find(cls => 
      cls.startsWith(heightPrefix) && this.getValidSizes().includes(cls.slice(heightPrefix.length) as ComponentSize)
    );
    if (heightClass) {
      classes.push(`${baseClass}-h-${heightClass.slice(heightPrefix.length)}`);
    }
  }

  /**
   * Adds spacing-related classes (padding, margin, radius, shadow)
   */
  public addSpacingClasses(
    classes: string[],
    classList: string[],
    baseClass: string,
    paddingPrefix: string = 'p-',
    marginPrefix: string = 'm-',
    radiusPrefix: string = 'r-',
    shadowPrefix: string = 's-'
  ): void {
    // Add padding class
    const paddingClass = classList.find(cls => 
      cls.startsWith(paddingPrefix) && this.getValidPadding().includes(cls.slice(paddingPrefix.length) as ComponentPadding)
    );
    if (paddingClass) {
      classes.push(`${baseClass}-p-${paddingClass.slice(paddingPrefix.length)}`);
    }

    // Add margin class
    const marginClass = classList.find(cls => 
      cls.startsWith(marginPrefix) && this.getValidMargin().includes(cls.slice(marginPrefix.length) as ComponentMargin)
    );
    if (marginClass) {
      classes.push(`${baseClass}-m-${marginClass.slice(marginPrefix.length)}`);
    }

    // Add radius class
    const radiusClass = classList.find(cls => 
      cls.startsWith(radiusPrefix) && this.getValidRadius().includes(cls.slice(radiusPrefix.length) as ComponentRadius)
    );
    if (radiusClass) {
      classes.push(`${baseClass}-r-${radiusClass.slice(radiusPrefix.length)}`);
    }

    // Add shadow class
    const shadowClass = classList.find(cls => 
      cls.startsWith(shadowPrefix) && this.getValidShadow().includes(cls.slice(shadowPrefix.length) as ComponentShadow)
    );
    if (shadowClass) {
      classes.push(`${baseClass}-s-${shadowClass.slice(shadowPrefix.length)}`);
    }
  }

  /**
   * Adds modifier classes based on the component's state
   */
  public addModifierClasses(
    classes: string[],
    baseClass: string,
    modifiers: Record<string, boolean>
  ): void {
    Object.entries(modifiers).forEach(([key, value]) => {
      if (value) {
        classes.push(`${baseClass}-${key}`);
      }
    });
  }

  getVariantStyles(variant: ComponentVariant): StyleObject
  {
    return this.variantStyles[variant];
  }

  getLargerSize(width: ComponentSize, height: ComponentSize): ComponentSize {
    const order = ['xs','sm','md','lg','xl','xxl','xxxl','full'];
    const widthIdx = order.indexOf(width);
    const heightIdx = order.indexOf(height);
    return widthIdx > heightIdx ? width : height;
  }

  getSizeStyles(width: ComponentSize, height: ComponentSize): StyleObject {
    const sizeKey = this.getLargerSize(width, height);
    const { fontSize, padding } = this.sizeMap[sizeKey];
    return {
      width: WIDTH[width.toUpperCase() as keyof typeof WIDTH],
      height: HEIGHT[height.toUpperCase() as keyof typeof HEIGHT],
      'font-size': fontSize,
      'padding': padding
    };
  }

  /**
   * Gets the valid padding options for components
   */
  getValidPadding(): ComponentPadding[] {
    return this.VALID_PADDING;
  }

  /**
   * Gets the valid margin options for components
   */
  getValidMargin(): ComponentMargin[] {
    return this.VALID_MARGIN;
  }

  /**
   * Gets the valid radius options for components
   */
  getValidRadius(): ComponentRadius[] {
    return this.VALID_RADIUS;
  }

  /**
   * Gets the valid shadow options for components
   */
  getValidShadow(): ComponentShadow[] {
    return this.VALID_SHADOW;
  }

  /**
   * Gets the valid variant options
   */
  getValidVariants(): ComponentVariant[] {
    return this.VALID_VARIANTS;
  }

  /**
   * Gets the valid size options
   */
  getValidSizes(): ComponentSize[] {
    return this.VALID_SIZES;
  }
}
