const { spawnSync } = require("child_process");
const path = require("path");

const root = path.join(__dirname, "..");
const env = {
  ...process.env,
  NODE_OPTIONS: "--max-old-space-size=8192",
};

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: root,
    env,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run("node", [path.join(__dirname, "generate-ssg-routes.js")]);

const ngCli = path.join(root, "node_modules", "@angular", "cli", "bin", "ng.js");
run("node", [ngCli, "build", "--configuration", "ssg"]);
