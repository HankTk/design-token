import { Injectable } from '@angular/core';
import { COLOR_TOKENS, SPACING_TOKENS, TYPOGRAPHY_TOKENS, RADIUS_TOKENS } from '../constants';
import { WIDTH_TOKENS, HEIGHT_TOKENS } from '../constants/dimensions';

export type VariantType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'information';
export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';

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
  [K in VariantType]: StyleObject;
};

@Injectable({
  providedIn: 'root'
})
export class StylesService
{

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

  getVariantStyles(variant: VariantType): StyleObject
  {
    return this.variantStyles[variant];
  }

  getLargerSize(width: SizeType, height: SizeType): SizeType {
    const order = ['xs','sm','md','lg','xl','xxl','xxxl','full'];
    const widthIdx = order.indexOf(width);
    const heightIdx = order.indexOf(height);
    return widthIdx > heightIdx ? width : height;
  }

  getSizeStyles(width: SizeType, height: SizeType): StyleObject {
    const sizeKey = this.getLargerSize(width, height);
    const { fontSize, padding } = this.sizeMap[sizeKey];
    return {
      width: WIDTH_TOKENS[width.toUpperCase() as keyof typeof WIDTH_TOKENS],
      height: HEIGHT_TOKENS[height.toUpperCase() as keyof typeof HEIGHT_TOKENS],
      'font-size': fontSize,
      'padding': padding
    };
  }

}
