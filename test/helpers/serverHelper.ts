import { 
  spawn, 
  ChildProcess, 
  execSync
} from 'node:child_process';
import net from 'node:net';

let serverProcess: ChildProcess | null = null;

/* =========================
   1. BUILD PROJECT
========================= */
export function buildProject() {
  console.log('🧱 Building project...');

  execSync('yarn build', {
    stdio: 'inherit',
  });

  console.log('✅ Build completed');
}

/* =========================
   2. START ASTRO SERVER
========================= */
export async function startAstroServer(port = 4321) {
  console.log(`🚀 Starting Astro on port ${port}...`);

  serverProcess = spawn(
    'yarn',
    ['preview', '--port', String(port), '--strictPort'],
    {
      stdio: 'pipe',
      shell: false,
      windowsHide: true
    }
  );

  await waitForPort(port);

  console.log('✅ Astro ready');

  serverProcess.unref();

  return serverProcess;
}

/* =========================
   3. WAIT FOR SERVER READY
========================= */
function waitForPort(port: number, timeout = 15000) {
  return new Promise<void>((resolve, reject) => {
    const start = Date.now();

    const check = () => {
      const socket = new net.Socket();

      socket
        .once('connect', () => {
          socket.destroy();
          resolve();
        })
        .once('error', () => {
          socket.destroy();

          if (Date.now() - start > timeout) {
            reject(new Error('Port not ready'));
          } else {
            setTimeout(check, 50);
          }
        })
        .connect(port, '127.0.0.1');
    };

    check();
  });
}

/* =========================
   4. STOP ASTRO SERVER
========================= */
export async function stopAstroServer() {
  if (!serverProcess) return;

  const proc = serverProcess;
  serverProcess = null;

  return new Promise<void>((resolve) => {
    proc.once('exit', resolve);

    proc.kill('SIGTERM');

    setTimeout(() => {
      try {
        proc.kill('SIGKILL');
      } catch {}
      resolve();
    }, 3000);
  });
}

/* =========================
   5. ORCHESTRATOR (MAIN API)
========================= */
export async function withAstroTestServer<T>(
  testFn: () => Promise<T>,
  port = 4321
): Promise<T> {

  buildProject();

  await startAstroServer(port);

  try {
    return await testFn();
  } finally {
    await stopAstroServer();
  }
}