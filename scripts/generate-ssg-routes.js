const fs = require("fs");
const path = require("path");

// Function to recursively find all route files
function findRouteFiles(dir, routeFiles = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules and other non-source directories
      if (!["node_modules", ".git", "dist", "coverage"].includes(item)) {
        findRouteFiles(fullPath, routeFiles);
      }
    } else if (item.endsWith(".routes.ts") && !item.includes("app.routes.ts")) {
      routeFiles.push(fullPath);
    }
  }

  return routeFiles;
}

// Function to extract routes from a route file
function extractRoutesFromFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const routes = [];

  // Simple regex to extract path patterns
  const pathMatches = content.match(/path:\s*['"`]([^'"`]+)['"`]/g);
  if (pathMatches) {
    pathMatches.forEach((match) => {
      const path = match.replace(/path:\s*['"`]/, "").replace(/['"`]$/, "");
      if (path && path !== "**" && path !== "") {
        routes.push(path);
      }
    });
  }

  return routes;
}

// Function to generate route paths
function generateRoutePaths(basePath, routes) {
  const paths = [];

  for (const route of routes) {
    if (route === "") continue;

    const fullPath = basePath ? `${basePath}/${route}` : route;
    paths.push(fullPath);
  }

  return paths;
}

// Function to parse app routes and extract main route names
function parseAppRoutes() {
  const appRoutesPath = path.join(
    __dirname,
    "..",
    "src",
    "app",
    "app.routes.ts"
  );
  const content = fs.readFileSync(appRoutesPath, "utf8");

  const routeNames = [];
  const pathMatches = content.match(/path:\s*['"`]([^'"`]+)['"`]/g);

  if (pathMatches) {
    pathMatches.forEach((match) => {
      const path = match.replace(/path:\s*['"`]/, "").replace(/['"`]$/, "");
      if (path && path !== "**" && path !== "") {
        routeNames.push(path);
      }
    });
  }

  return routeNames;
}

// Main function
function generateSSGRoutes() {
  const srcDir = path.join(__dirname, "..", "src", "app");
  const routeFiles = findRouteFiles(srcDir);
  const mainRouteNames = parseAppRoutes();

  const allRoutes = [];

  // Add root route
  allRoutes.push("/");

  // Process each main route
  for (const mainRoute of mainRouteNames) {
    if (mainRoute === "") continue;

    // Find the corresponding route file
    const routeFile = routeFiles.find((file) => {
      const relativePath = path.relative(srcDir, file);
      const routeDir = path.dirname(relativePath).replace(/\\/g, "/");
      return routeDir === `cases/${mainRoute}`;
    });

    if (routeFile) {
      const routes = extractRoutesFromFile(routeFile);
      const routePaths = generateRoutePaths(mainRoute, routes);
      allRoutes.push(...routePaths);
    } else {
      // If no specific route file found, just add the main route
      allRoutes.push(mainRoute);
    }
  }

  // Remove duplicates and sort
  const uniqueRoutes = [...new Set(allRoutes)].sort();

  // Generate the SSG routes configuration
  const ssgRoutesConfig = `// Auto-generated SSG routes configuration
// Generated on: ${new Date().toISOString()}

export const ssgRoutes = [
${uniqueRoutes.map((route) => `  '${route}'`).join(",\n")}
];

export default ssgRoutes;
`;

  // Write the configuration file
  const outputPath = path.join(
    __dirname,
    "..",
    "src",
    "app",
    "ssg-routes.config.ts"
  );
  fs.writeFileSync(outputPath, ssgRoutesConfig);

  console.log(
    `Generated SSG routes configuration with ${uniqueRoutes.length} routes:`
  );
  console.log(`Output file: ${outputPath}`);
  console.log("\nRoutes:");
  uniqueRoutes.forEach((route) => console.log(`  ${route}`));

  return uniqueRoutes;
}

// Run the script
if (require.main === module) {
  generateSSGRoutes();
}

module.exports = { generateSSGRoutes };
