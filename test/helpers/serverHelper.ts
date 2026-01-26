import { spawn } from 'child_process';
import { setTimeout } from 'timers/promises';
import type { ChildProcess } from 'node:child_process';

export async function startAstroServer(
  port: number = 4321,
  waitMs: number = 4000
): Promise<ChildProcess> {
  const serverProcess = spawn('yarn', ['astro', 'dev', '--port', port.toString()], {
    stdio: 'inherit',
  });

  await setTimeout(waitMs);

  return serverProcess;
}

export function stopAstroServer(serverProcess?: ChildProcess) {
  if (serverProcess && !serverProcess.killed) {
    serverProcess.kill();
  }
}