export const COLOR_TOKENS = {
  background: {
    PRIMARY:     'var(--color-background-primary)',    // Blue
    SECONDARY:   'var(--color-background-secondary)',  // Gray
    SUCCESS:     'var(--color-background-success)',    // Green
    WARNING:     'var(--color-background-warning)',    // Yellow
    DANGER:      'var(--color-background-danger)',     // Red
    INFORMATION: 'var(--color-background-information)', // Light Blue
    WHITE:       'var(--color-background-white)',
    BLACK:       'var(--color-background-black)',
  },
  text: {
    PRIMARY:     'var(--color-text-primary)',
    SECONDARY:   'var(--color-text-secondary)',
    SUCCESS:     'var(--color-text-success)',
    WARNING:     'var(--color-text-warning)',
    DANGER:      'var(--color-text-danger)',
    INFORMATION: 'var(--color-text-information)',
    WHITE:       'var(--color-text-white)',
    BLACK:       'var(--color-text-black)',
  }
} as const; 