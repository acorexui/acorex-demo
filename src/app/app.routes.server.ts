import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Demos that rely on canvas/maps/editors and are not safe to prerender in Node.
 * Only include paths that exist in app.routes.ts.
 * Keep in sync with denylistPrefixes in scripts/generate-ssg-routes.js.
 */
const csrPrefixes = [
  'map',
  'paint',
  'editor',
  'wysiwyg',
  'file-explorer',
  'image-editor',
  'bar-chart',
  'donut-chart',
  'gauge-chart',
  'flow-chart',
  'hierarchy-chart',
  'line-chart',
  'chart-legend',
  'grid-layout-builder',
  'media-viewer',
] as const;

export const serverRoutes: ServerRoute[] = [
  ...csrPrefixes.map(
    (prefix): ServerRoute => ({
      path: `${prefix}/**`,
      renderMode: RenderMode.Client,
    }),
  ),
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
