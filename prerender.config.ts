import { ssgRoutes } from './src/app/ssg-routes.config';

export default {
  routes: ssgRoutes,
  // Optional: Configure additional SSG options
  // skip: ['/dynamic-route'], // Routes to skip during prerendering
  // discoverRoutes: false, // Disable automatic route discovery
  // postProcess: (html: string, route: string) => {
  //   // Custom post-processing for each route
  //   return html;
  // }
};
