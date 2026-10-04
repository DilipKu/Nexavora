import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { spawnSync } from 'node:child_process';

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

// Preview ma własny prefix, aby build nie mieszał ścieżek z głównym WebScale.
const result = spawnSync(npmCommand, ['run', 'build'], {
  stdio: 'inherit',
  shell: process.platform === 'win32',
  env: process.env,
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
