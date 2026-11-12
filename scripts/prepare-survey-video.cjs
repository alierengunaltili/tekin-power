// Versioned homepage media; keep the supplied resolution and frame rate.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const source = process.argv[2] || 'C:/Users/merto/Downloads/gemini_generated_video_df704804.mp4';
const ffmpeg = 'C:/Program Files/Shotcut/ffmpeg.exe';
const ffprobe = 'C:/Program Files/Shotcut/ffprobe.exe';
const dir = path.join(root, 'public/media/survey-v1');
fs.mkdirSync(dir, { recursive: true });
const run = args => execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });
const probe = file => JSON.parse(execFileSync(ffprobe, ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height,r_frame_rate:format=duration', '-of', 'json', file], { encoding: 'utf8' }));
// Remux H.264 without re-encoding; remove unused audio and move metadata first.
run(['-i', source, '-map', '0:v:0', '-c:v', 'copy', '-an', '-movflags', '+faststart', path.join(dir, 'survey.mp4')]);
run(['-i', source, '-map', '0:v:0', '-an', '-c:v', 'libvpx-vp9', '-crf', '20', '-b:v', '0', '-pix_fmt', 'yuv420p', '-g', '48', '-deadline', 'good', '-cpu-used', '3', '-row-mt', '1', '-threads', '6', path.join(dir, 'survey.webm')]);
run(['-i', source, '-frames:v', '1', '-q:v', '2', '-update', '1', path.join(dir, 'poster.jpg')]);
const meta = probe(path.join(dir, 'survey.mp4'));
const stream = meta.streams[0];
const [num, den] = stream.r_frame_rate.split('/').map(Number);
const rendition = { width: stream.width, height: stream.height, fps: num / den,
  webm: '/media/survey-v1/survey.webm', mp4: '/media/survey-v1/survey.mp4',
  webmBytes: fs.statSync(path.join(dir, 'survey.webm')).size,
  mp4Bytes: fs.statSync(path.join(dir, 'survey.mp4')).size };
const manifestPath = path.join(root, 'src/data/videoAssets.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest['landing-page/deniz-gol-tarama-v1'] = {
  poster: '/media/survey-v1/poster.jpg', duration: Number(meta.format.duration), full: rendition, balanced: rendition,
};
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(JSON.stringify(manifest['landing-page/deniz-gol-tarama-v1'], null, 2));

