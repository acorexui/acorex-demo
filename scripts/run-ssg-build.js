/**
 * Local SSG build runner — writes ssg-build-output.txt and _SSG_SUMMARY.txt
 * Usage: node scripts/run-ssg-build.js
 */
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
process.chdir(root);

function run(cmd, args) {
  console.log(`\n> ${cmd} ${args.join(' ')}\n`);
  const result = spawnSync(cmd, args, {
    cwd: root,
    encoding: 'utf8',
    shell: true,
    maxBuffer: 64 * 1024 * 1024,
    env: process.env,
  });
  const out = `${result.stdout || ''}${result.stderr || ''}`;
  return { code: result.status ?? 1, out };
}

const gen = run('npm', ['run', 'generate:ssg-routes']);
const build = run('npx', ['ng', 'build', '--configuration=production,ssg']);
const combined = `=== generate:ssg-routes (exit ${gen.code}) ===\n${gen.out}\n\n=== ng build production,ssg (exit ${build.code}) ===\n${build.out}\n`;
fs.writeFileSync(path.join(root, 'ssg-build-output.txt'), combined, 'utf8');

const failed = /Application bundle generation failed/i.test(build.out);
const ok = build.code === 0 && !failed;
const summary = [
  'SSG Build Summary',
  `exit code: ${build.code}`,
  `ok: ${ok}`,
  `failed phrase: ${failed}`,
  `NG0201 count: ${(build.out.match(/NG0201/g) || []).length}`,
  `maska count: ${(build.out.match(/maska/gi) || []).length}`,
  `document is not defined count: ${(build.out.match(/document is not defined/g) || []).length}`,
  '--- last 40 lines ---',
  ...combined.split(/\r?\n/).slice(-40),
].join('\n');

fs.writeFileSync(path.join(root, '_SSG_SUMMARY.txt'), summary, 'utf8');
console.log(summary);
process.exit(build.code ?? 1);
