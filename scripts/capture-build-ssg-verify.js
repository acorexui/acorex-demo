const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const outPath = path.join(root, "build-ssg-verify.txt");
const log = fs.createWriteStream(outPath, { flags: "w" });

const child = spawn("npm", ["run", "build:ssg"], {
  cwd: root,
  env: process.env,
  shell: true,
  stdio: ["ignore", "pipe", "pipe"],
});

child.stdout.pipe(log, { end: false });
child.stderr.pipe(log, { end: false });

child.on("close", (code) => {
  log.end(() => {
    process.exitCode = code ?? 1;
  });
});

child.on("error", (err) => {
  log.write(`\n[capture script] spawn error: ${err.message}\n`);
  log.end(() => {
    process.exit(1);
  });
});
