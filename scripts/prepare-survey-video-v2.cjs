// User-requested 2560px delivery. The source picture is 1024x576 after removing
// embedded side bars; upscaling does not create native QHD detail.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const input = process.argv[2] || 'C:/Users/merto/Desktop/WhatsApp Video 2026-11-13 at 02.16.41.mp4';
const ffmpeg = 'C:/Program Files/Shotcut/ffmpeg.exe';
const ffprobe = 'C:/Program Files/Shotcut/ffprobe.exe';
const dir = path.join(root, 'public/media/survey-v2');
fs.mkdirSync(dir, { recursive: true });
const run = args => execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });
const asset = { poster: '/media/survey-v2/poster.jpg', duration: 10 };
for (const [tier, width] of [['full', 2560], ['balanced', 1920]]) {
  // Auto-rotation precedes crop. Eight seconds at 80% speed becomes ten seconds.
  const filter = `trim=start=2:end=10,setpts=1.25*(PTS-STARTPTS),crop=1024:576:112:0,fps=24,scale=${width}:-2:flags=lanczos,setsar=1`;
  for (const ext of ['mp4', 'webm']) {
    console.log(`Encoding ${tier} ${ext}`);
    const codec = ext === 'mp4'
      ? ['-c:v', 'libx264', '-preset', 'medium', '-crf', '21', '-maxrate', tier === 'full' ? '4000k' : '2500k', '-bufsize', '8000k', '-movflags', '+faststart']
      : ['-c:v', 'libvpx-vp9', '-crf', '28', '-b:v', '0', '-deadline', 'good', '-cpu-used', '4', '-row-mt', '1'];
    run(['-i', input, '-map', '0:v:0', '-vf', filter, '-t', '10', '-an', '-pix_fmt', 'yuv420p', '-g', '48', '-threads', '6', '-metadata:s:v:0', 'rotate=0', ...codec, path.join(dir, `${tier}.${ext}`)]);
  }
  asset[tier] = { width, height: width * 9 / 16, fps: 24,
    webm: `/media/survey-v2/${tier}.webm`, mp4: `/media/survey-v2/${tier}.mp4`,
    webmBytes: fs.statSync(path.join(dir, `${tier}.webm`)).size,
    mp4Bytes: fs.statSync(path.join(dir, `${tier}.mp4`)).size };
  const meta = JSON.parse(execFileSync(ffprobe, ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height:format=duration', '-of', 'json', path.join(dir, `${tier}.mp4`)], { encoding: 'utf8' }));
  if (meta.streams[0].width !== width || Math.abs(Number(meta.format.duration) - 10) > 0.1) throw new Error('Unexpected output dimensions/duration');
}
run(['-i', path.join(dir, 'full.mp4'), '-frames:v', '1', '-q:v', '2', '-update', '1', path.join(dir, 'poster.jpg')]);
const manifestPath = path.join(root, 'src/data/videoAssets.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest['landing-page/deniz-gol-tarama-v2'] = asset;
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify(asset, null, 2));
