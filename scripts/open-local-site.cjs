const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { spawn } = require('node:child_process');

const appRoot = path.resolve(__dirname, '..');
const tracker = process.argv.includes('--tracker');
const port = tracker ? '3001' : '3000';
const siteUrl = tracker ? 'http://127.0.0.1:3001/proje-takip' : 'http://127.0.0.1:3000/';
const logDirectory = path.join(appRoot, '.local-launcher');
fs.mkdirSync(logDirectory, { recursive: true });

function status() {
  return new Promise((resolve) => {
    const request = http.get(siteUrl, { timeout: 3000 }, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => resolve(response.statusCode === 200 && body.includes(tracker ? 'Kabul' : 'Tekin Power') ? 'ready' : 'busy'));
      response.on('error', () => resolve('busy'));
    });
    request.on('timeout', () => request.destroy());
    request.on('error', (error) => resolve(error.code === 'ECONNREFUSED' ? 'offline' : 'busy'));
  });
}

async function main() {
  if (tracker) {
    const ollama = path.join(process.env.LOCALAPPDATA || '', 'Programs', 'Ollama', 'ollama.exe');
    if (fs.existsSync(ollama)) {
      const service = spawn(ollama, ['serve'], { detached: true, windowsHide: true, stdio: 'ignore' });
      service.on('error', () => {});
      service.unref();
    }
  }
  let current = await status();
  if (current === 'offline') {
    const output = fs.openSync(path.join(logDirectory, tracker ? 'tracker-server.log' : 'server.log'), 'a');
    const child = spawn(process.execPath, [path.join(appRoot, 'node_modules/next/dist/bin/next'), 'dev', '--hostname', '127.0.0.1', '--port', port], {
      cwd: appRoot,
      detached: true,
      windowsHide: true,
      stdio: ['ignore', output, output],
      env: { ...process.env, PATH: `${path.dirname(process.execPath)};${process.env.PATH || ''}`, NODE_OPTIONS: `${process.env.NODE_OPTIONS || ''} --use-system-ca`.trim() },
    });
    await new Promise((resolve, reject) => { child.once('spawn', resolve); child.once('error', reject); });
    child.unref();
    fs.closeSync(output);
  }

  const deadline = Date.now() + 90000;
  while (current !== 'ready' && Date.now() < deadline) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    current = await status();
  }
  if (current !== 'ready') throw new Error(`Yerel site acilamadi. ${port} portunu ve .local-launcher gunluklerini kontrol edin.`);
  if (!process.argv.includes('--no-open')) {
    const edge = [process.env['ProgramFiles(x86)'], process.env.ProgramFiles, process.env.LOCALAPPDATA]
      .filter(Boolean).map(base => path.join(base, 'Microsoft', 'Edge', 'Application', 'msedge.exe')).find(file => fs.existsSync(file));
    const browser = tracker && edge
      ? spawn(edge, [`--app=${siteUrl}`], { detached: true, windowsHide: true, stdio: 'ignore' })
      : spawn('explorer.exe', [siteUrl], { detached: true, windowsHide: true, stdio: 'ignore' });
    await new Promise((resolve, reject) => { browser.once('spawn', resolve); browser.once('error', reject); });
    browser.unref();
  }
  console.log(`Hazir: ${siteUrl}`);
}

main().catch((error) => {
  fs.appendFileSync(path.join(logDirectory, 'launcher.log'), `${new Date().toISOString()} ${error.message}\n`);
  console.error(error.message);
  process.exitCode = 1;
});
