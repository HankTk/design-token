# DesignTokenApp

A modern Angular application for managing and visualizing design tokens. This project helps teams maintain consistent design systems by providing a centralized platform for managing design tokens. Design tokens are the building blocks of a design system, representing design decisions like colors, spacing, typography, and more.

## What are Design Tokens?

Design tokens are the smallest, indivisible parts of a design system. They represent design decisions like:
- Colors
- Typography (font sizes, weights, line heights)
- Spacing
- Border radiuses
- Shadows
- Animation durations
- And more

By using design tokens, teams can maintain consistency across their products and make global design changes efficiently.

## Features

- **Design Token Management**
  - Create, edit, and delete design tokens
  - Organize tokens by categories and types
  - Import/export token definitions
  - Version control for token changes

- **Visualization Tools**
  - Real-time token preview
  - Color palette visualization
  - Typography scale display
  - Spacing system visualization
  - Interactive token documentation

## Tech Stack

- **Frontend Framework**: Angular 19.2.0
- **Styling**: SCSS
- **Testing**: Jasmine and Karma
- **Build Tools**: Angular CLI 19.2.11
- **Package Manager**: npm

## Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Angular CLI 19.2.11 or later

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd design-token-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200/`.

## Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run test` - Runs unit tests
- `npm run watch` - Builds the project and watches for changes

## Project Structure

```
src/
├── app/              # Application components and modules
├── styles/           # Global styles and SCSS files
├── styles.scss       # Main stylesheet
├── main.ts          # Application entry point
└── index.html       # Main HTML file
```

## Design Token System

The application uses a comprehensive design token system defined in `src/styles/_tokens.scss`. This system provides a single source of truth for all design values used throughout the application.

### Token Categories

1. **Colors**
   - Base colors (blue, gray, green, yellow, red, etc.)
   - Semantic colors (primary, secondary, success, warning, danger)
   - Background colors
   - Text colors

2. **Typography**
   - Font families
   - Font sizes
   - Font weights
   - Line heights

3. **Spacing**
   - Consistent spacing scale
   - Component-specific spacing values

4. **Dimensions**
   - Width tokens
   - Height tokens

### Usage

Design tokens are implemented as CSS custom properties (variables) and can be used in two ways:

1. **In SCSS/CSS:**
```scss
.my-component {
  color: var(--color-primary);
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
}
```

2. **In TypeScript:**
```typescript
import { getComputedStyle } from 'window';

const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-primary');
```

### Theming

The design token system supports theming through the `[data-theme]` attribute. To switch themes:

```typescript
// Switch to dark theme
document.documentElement.setAttribute('data-theme', 'dark');

// Switch to light theme
document.documentElement.setAttribute('data-theme', 'light');
```

### Token Categories and Values

The token system includes:

- **Color System**: 10 shades for each color (100-900)
- **Spacing Scale**: From 1px to 89px
- **Typography Scale**: From 4px to 36px
- **Component Dimensions**: Predefined width and height values

For a complete list of available tokens, refer to `src/styles/_tokens.scss`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Install dependencies (`npm install`)
4. Make your changes
5. Run tests (`npm test`)
6. Commit your changes (`git commit -m 'Add some amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Development Guidelines

- Follow the Angular style guide
- Write unit tests for new features
- Update documentation for API changes
- Use conventional commits
- Keep PRs focused and small

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [Design Tokens Documentation](https://design-tokens.github.io/community-group/format/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Screenshots

![screenshot1](./documents/2025-05-13_10-38-49.png)
![screenshot2](./documents/2025-05-16_13-03-23.png)
