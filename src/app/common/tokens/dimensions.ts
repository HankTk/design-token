export type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';
export type Height = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';

export const WIDTH = {
  XS:    'var(--md-size-xs)',    // 32px
  SM:    'var(--md-size-sm)',    // 64px
  MD:    'var(--md-size-md)',    // 96px
  LG:    'var(--md-size-lg)',    // 160px
  XL:    'var(--md-size-xl)',    // 256px
  FULL:  '100%'
} as const;

export const HEIGHT = {
  XS:    'var(--md-component-height-xs)',   // 16px
  SM:    'var(--md-component-height-sm)',   // 32px
  MD:    'var(--md-component-height-md)',   // 48px
  LG:    'var(--md-component-height-lg)',   // 64px
  XL:    'var(--md-component-height-xl)',   // 80px
  FULL:  '100%'
} as const; 