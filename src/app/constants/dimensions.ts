export type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';
export type Height = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';

export const WIDTH_TOKENS = {
  XS:    'var(--width-1)',    // 32px
  SM:    'var(--width-2)',    // 64px
  MD:    'var(--width-3)',    // 96px
  LG:    'var(--width-4)',    // 160px
  XL:    'var(--width-5)',    // 256px
  XXL:   'var(--width-6)',    // 416px
  XXXL:  'var(--width-7)',    // 672px
  FULL:  '100%',
} as const;

export const HEIGHT_TOKENS = {
  XS:    'var(--height-1)',   // 16px
  SM:    'var(--height-2)',   // 32px
  MD:    'var(--height-3)',   // 48px
  LG:    'var(--height-4)',   // 64px
  XL:    'var(--height-5)',   // 80px
  XXL:   'var(--height-6)',   // 96px
  XXXL:  'var(--height-7)',   // 112px
  FULL:  '100%',
} as const; 