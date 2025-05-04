# FC Shining Stars Football Club Website

A modern football club website with AI-assisted development capabilities. This project includes a style guide, component library, and tools for AI-assisted website development.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/fc-shining-stars/fc-shining-stars.git
   cd fc-shining-stars
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Website

To start the website locally:

```
.\run-website.bat
```

Or using npm:

```
npm start
```

Then open your browser and navigate to http://localhost:3000

## Style Guide and Components

The website includes a comprehensive style guide and component library for a football club website. You can use these components as building blocks for your site.

### Features

- Color palette designed for football club branding
- Typography system
- UI components (buttons, cards, forms, etc.)
- Layout components
- 3D logo integration

## AI-Assisted Development

This project includes tools for AI-assisted development to help you build your football club website faster.

### Component Generation

Generate new components using the AI assistant:

```
.\generate-component.bat [name] [type] [description] [outputDir]
```

Example:
```
.\generate-component.bat PlayerCard vanilla "A card displaying player information" ./components
```

Supported component types:
- vanilla (JavaScript)
- react
- vue
- angular

### Code Refactoring

Refactor existing code:

```
npm run refactor-code -- [filePath] [outputPath]
```

### Documentation Generation

Generate documentation for your code:

```
npm run generate-docs -- [filePath] [outputPath] [format]
```

### AI Execution

Execute custom AI tasks:

```
npm run ai-execute -- "Your task description here"
```

Example:
```
npm run ai-execute -- "Generate a match schedule component with filtering options"
```

## Project Structure

- `/css` - Stylesheets
- `/js` - JavaScript files
- `/img` - Images and assets
- `/components` - Generated components
- `/automation` - AI automation tools

## Error Tracking

This project uses Sentry for error tracking and monitoring.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
