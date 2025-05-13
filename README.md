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

- **Integration Capabilities**
  - Export tokens to various formats (CSS, SCSS, JSON)
  - Generate design system documentation
  - Integration with popular design tools
  - API for programmatic access

- **Modern Architecture**
  - Built with Angular 19.x
  - Responsive and accessible design
  - Real-time updates and collaboration
  - Performance optimized

## Tech Stack

- **Frontend Framework**: Angular 19.x
- **UI Components**: Angular Material
- **State Management**: NgRx
- **Styling**: SCSS with CSS Custom Properties
- **Testing**: Jest and Cypress
- **Build Tools**: Angular CLI, Webpack
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

3. Configure environment:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200/`.

## Project Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
API_URL=your_api_url
AUTH_ENABLED=true
FEATURE_FLAGS={"newUI":true}
```

### Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run test` - Runs unit tests
- `npm run watch` - Builds the project and watches for changes
- `npm run lint` - Runs linting
- `npm run e2e` - Runs end-to-end tests
- `npm run storybook` - Starts Storybook for component development

## Project Structure

```
src/
├── app/
│   ├── core/           # Core module (services, guards, interceptors)
│   ├── shared/         # Shared module (components, directives, pipes)
│   ├── features/       # Feature modules
│   │   ├── tokens/     # Token management feature
│   │   ├── preview/    # Token preview feature
│   │   └── settings/   # Application settings
│   └── store/          # State management
├── assets/             # Static assets
│   ├── icons/          # SVG icons
│   └── styles/         # Global styles
├── environments/       # Environment configurations
└── stories/           # Storybook stories
```

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
- [Angular Material](https://material.angular.io)
- [NgRx Documentation](https://ngrx.io/docs)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
