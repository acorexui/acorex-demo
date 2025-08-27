# Static Site Generation (SSG) Setup

This project has been configured for Static Site Generation (SSG) using Angular's built-in prerendering capabilities.

## Overview

The SSG setup automatically generates static HTML files for all routes in the application, providing:

- Faster page loads
- Better SEO
- Improved performance
- Reduced server load

## Generated Routes

The SSG configuration includes **358 routes** covering all components and their variations:

- Root route (`/`)
- All component routes (e.g., `/accordion/usage`, `/button/color`, etc.)
- All component variations (e.g., `/accordion/accordion-mode`, `/button/badge-in-button`, etc.)

## Available Scripts

### Generate SSG Routes

```bash
npm run generate:ssg-routes
```

This script analyzes all route files and generates the SSG routes configuration.

### Build with SSG

```bash
npm run build:ssg
```

This command:

1. Generates the SSG routes configuration
2. Builds the application with prerendering enabled
3. Creates static HTML files for all routes

### Build with SSR

```bash
npm run build:ssr
```

Builds the application with Server-Side Rendering (SSR) for dynamic content.

### Serve SSG Build

```bash
npm run serve:ssg
```

Serves the static build using a simple HTTP server on port 4000.

## Configuration Files

### `scripts/generate-ssg-routes.js`

Node.js script that:

- Scans all route files in the project
- Extracts route paths from Angular route configurations
- Generates a comprehensive list of routes for SSG

### `src/app/ssg-routes.config.ts`

Auto-generated configuration file containing all routes for SSG.

### `prerender.config.ts`

Configuration file for Angular's prerender process.

### `server.ts`

Express server configuration for SSR/SSG.

## How It Works

1. **Route Discovery**: The script scans all `.routes.ts` files in the `src/app/cases/` directory
2. **Route Extraction**: Extracts all path patterns from route configurations
3. **Route Generation**: Creates a comprehensive list of all possible routes
4. **Static Generation**: Angular's prerender process generates static HTML for each route
5. **Deployment**: Static files can be deployed to any static hosting service

## Route Structure

Routes follow the pattern:

- `/` - Root route
- `/{component}/usage` - Basic usage examples
- `/{component}/{variation}` - Component variations and features

Examples:

- `/accordion/usage` - Basic accordion usage
- `/accordion/accordion-mode` - Accordion with specific mode
- `/button/color` - Button with color variations
- `/form/validate` - Form with validation

## Benefits

### Performance

- **Faster Initial Load**: Static HTML loads immediately
- **Reduced JavaScript**: Less client-side processing required
- **Better Caching**: Static files can be cached more effectively

### SEO

- **Search Engine Friendly**: Static HTML is easily crawled
- **Meta Tags**: Server-side rendering ensures meta tags are present
- **Social Sharing**: Open Graph tags work correctly

### User Experience

- **Instant Navigation**: Pre-rendered pages load instantly
- **Progressive Enhancement**: JavaScript enhances the experience
- **Accessibility**: Content is available without JavaScript

## Deployment

The SSG build can be deployed to any static hosting service:

### Netlify

```bash
npm run build:ssg
# Deploy the `dist/acorex-demo/browser` directory
```

### Vercel

```bash
npm run build:ssg
# Deploy the `dist/acorex-demo/browser` directory
```

### GitHub Pages

```bash
npm run build:ssg
# Deploy the `dist/acorex-demo/browser` directory
```

## Customization

### Adding New Routes

1. Create your route configuration in the appropriate component directory
2. Run `npm run generate:ssg-routes` to update the SSG configuration
3. Rebuild with `npm run build:ssg`

### Excluding Routes

Edit `prerender.config.ts` to exclude specific routes:

```typescript
export default {
  routes: ssgRoutes,
  skip: ["/dynamic-route", "/admin-only"],
};
```

### Custom Post-Processing

Add custom processing for generated HTML:

```typescript
export default {
  routes: ssgRoutes,
  postProcess: (html: string, route: string) => {
    // Custom modifications to the HTML
    return html;
  },
};
```

## Troubleshooting

### Route Not Generated

- Ensure the route is properly configured in a `.routes.ts` file
- Check that the route file is in the correct directory structure
- Run `npm run generate:ssg-routes` to regenerate the configuration

### Build Errors

- Verify all route components are properly exported
- Check for circular dependencies in route configurations
- Ensure all required dependencies are available during build

### Performance Issues

- Consider excluding rarely-accessed routes from SSG
- Use lazy loading for heavy components
- Optimize images and assets

## Maintenance

### Regular Updates

- Run `npm run generate:ssg-routes` when adding new routes
- Update the build process when changing route structure
- Monitor build times and optimize as needed

### Monitoring

- Track build performance
- Monitor static file sizes
- Check for broken routes after updates
