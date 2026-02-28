import { spawn } from 'child_process';
import { setTimeout } from 'timers/promises';
import type { ChildProcess } from 'node:child_process';

export async function startAstroServer(
  port: number = 4321,
  waitMs: number = 4000
): Promise<ChildProcess> {
  await new Promise<void>((resolve, reject) => {
    const build = spawn('yarn', ['build'], { stdio: 'inherit', shell: true });
    build.on('exit', (code) => {
      if(code === 0) 
        resolve();
      else reject(new Error(`yarn build failed with code ${code}`));
    });
  });

  const preview = spawn('yarn', ['preview', '--port', port.toString()], {
    stdio: 'inherit', shell: true
  });

  await setTimeout(waitMs);

  return preview;
}

export function stopAstroServer(serverProcess?: ChildProcess) {
  if (serverProcess && !serverProcess.killed) {
    serverProcess.kill();
  }
}