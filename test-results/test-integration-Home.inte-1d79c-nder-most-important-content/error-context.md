# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test/integration/Home.integration.test.tsx >> Home page >> must render most important content
- Location: test/integration/Home.integration.test.tsx:21:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: Port not ready
```

# Test source

```ts
  1   | import { type ChildProcess, execSync, spawn } from 'node:child_process';
  2   | import fs from 'node:fs';
  3   | import net from 'node:net';
  4   | 
  5   | let serverProcess: ChildProcess | null = null;
  6   | 
  7   | let cleanupRegistered = false;
  8   | 
  9   | function registerGlobalCleanup() {
  10  |   if (cleanupRegistered) return;
  11  |   cleanupRegistered = true;
  12  | 
  13  |   const shutdown = async () => {
  14  |     console.log('🧹 Global cleanup...');
  15  | 
  16  |     try {
  17  |       await stopAstroServer();
  18  |     } catch (e) {
  19  |       console.error('Cleanup error:', e);
  20  |     } finally {
  21  |       process.exit();
  22  |     }
  23  |   };
  24  | 
  25  |   process.on('SIGINT', shutdown); // Ctrl+C
  26  |   process.on('SIGTERM', shutdown); // CI / Docker
  27  |   process.on('uncaughtException', shutdown);
  28  |   process.on('unhandledRejection', shutdown);
  29  | }
  30  | 
  31  | /* =========================
  32  |    1. Build project
  33  | ========================= */
  34  | export function buildProject() {
  35  |   if (fs.existsSync('dist')) {
  36  |     console.log('🧱 Build skipped (dist exists)');
  37  |     return;
  38  |   }
  39  |   console.log('🧱 Building project...');
  40  | 
  41  |   execSync('yarn build', {
  42  |     stdio: 'inherit',
  43  |   });
  44  | 
  45  |   console.log('✅ Build completed');
  46  | }
  47  | 
  48  | /* =========================
  49  |    2. Start Astro server
  50  | ========================= */
  51  | export async function startAstroServer(port = 4321) {
  52  |   registerGlobalCleanup();
  53  | 
  54  |   console.log(`🚀 Starting Astro on port ${port}...`);
  55  | 
  56  |   serverProcess = spawn('yarn', ['preview', '--port', String(port), '--strictPort'], {
  57  |     stdio: 'pipe',
  58  |     shell: false,
  59  |     windowsHide: true,
  60  |   });
  61  | 
  62  |   await waitForPort(port);
  63  | 
  64  |   console.log('✅ Astro ready');
  65  | 
  66  |   return serverProcess;
  67  | }
  68  | 
  69  | /* =========================
  70  |    3. Wait for port to be ready
  71  | ========================= */
  72  | function waitForPort(port: number, timeout = 30000) {
  73  |   return new Promise<void>((resolve, reject) => {
  74  |     const start = Date.now();
  75  | 
  76  |     const check = () => {
  77  |       const socket = new net.Socket();
  78  | 
  79  |       socket
  80  |         .once('connect', () => {
  81  |           socket.destroy();
  82  |           resolve();
  83  |         })
  84  |         .once('error', () => {
  85  |           socket.destroy();
  86  | 
  87  |           if (Date.now() - start > timeout) {
> 88  |             reject(new Error('Port not ready'));
      |                    ^ Error: Port not ready
  89  |           } else {
  90  |             setTimeout(check, 50);
  91  |           }
  92  |         })
  93  |         .connect(port, '127.0.0.1');
  94  |     };
  95  | 
  96  |     check();
  97  |   });
  98  | }
  99  | 
  100 | /* =========================
  101 |    4. Stop Astro server
  102 | ========================= */
  103 | export async function stopAstroServer() {
  104 |   if (!serverProcess) return;
  105 | 
  106 |   const proc = serverProcess;
  107 |   serverProcess = null;
  108 | 
  109 |   return new Promise<void>((resolve) => {
  110 |     proc.once('exit', resolve);
  111 | 
  112 |     proc.kill('SIGTERM');
  113 | 
  114 |     setTimeout(() => {
  115 |       try {
  116 |         proc.kill('SIGKILL');
  117 |       } catch {}
  118 |       resolve();
  119 |     }, 3000);
  120 |   });
  121 | }
  122 | 
  123 | /* =========================
  124 |    5. Orchestrator (Main API)
  125 | ========================= */
  126 | export async function withAstroTestServer<T>(testFn: () => Promise<T>, port = 4321): Promise<T> {
  127 |   buildProject();
  128 | 
  129 |   await startAstroServer(port);
  130 | 
  131 |   try {
  132 |     return await testFn();
  133 |   } finally {
  134 |     await stopAstroServer();
  135 |   }
  136 | }
  137 | 
```