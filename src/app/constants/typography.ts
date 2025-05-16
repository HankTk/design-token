export const TYPOGRAPHY_TOKENS = {
  size: {
    XS:    'var(--font-size-xs)',    // 12px
    SM:    'var(--font-size-sm)',    // 14px
    BASE:  'var(--font-size-base)',  // 16px
    LG:    'var(--font-size-lg)',    // 18px
    XL:    'var(--font-size-xl)',    // 20px
    XXL:   'var(--font-size-2xl)',   // 24px
    XXXL:  'var(--font-size-3xl)',   // 30px
    XXXXL: 'var(--font-size-4xl)',   // 36px
  },
  weight: {
    NORMAL:    'var(--font-weight-normal)',
    MEDIUM:    'var(--font-weight-medium)',
    SEMIBOLD:  'var(--font-weight-semibold)',
    BOLD:      'var(--font-weight-bold)',
  },
  lineHeight: {
    TIGHT:    'var(--line-height-tight)',
    NORMAL:   'var(--line-height-normal)',
    RELAXED:  'var(--line-height-relaxed)',
  }
} as const; 