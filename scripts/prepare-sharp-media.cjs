// Versioned delivery assets; original uploads and older site assets are never overwritten.
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const workspace = path.dirname(root);
const ffmpeg = 'C:/Program Files/Shotcut/ffmpeg.exe';
const ffprobe = 'C:/Program Files/Shotcut/ffprobe.exe';
const destination = path.join(root, 'public/media/sharp-v2');
const artifacts = path.join(workspace, 'artifacts/sharp-media');
fs.mkdirSync(destination, { recursive: true });
fs.mkdirSync(artifacts, { recursive: true });
const source = (p) => path.join(workspace, p);
const pumpOriginal = 'C:/Users/merto/Desktop/GÖRSELLER/DEWJET POMPA/dewjet_arka_arkaya_uyumlu.mp4';
const pumpMaster = path.join(artifacts, 'pump-hero-master.mp4');
const run = (args) => execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });
const probe = (file) => JSON.parse(execFileSync(ffprobe, ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=codec_name,pix_fmt,width,height,r_frame_rate:format=duration,size', '-of', 'json', file], { encoding: 'utf8' }));
const jobs = [
  { id: 'home-marin', file: source('landing-page-videos/marin.mp4'), keys: ['landing-page/marin'] },
  { id: 'home-energy', file: source('landing-page-videos/enerjidepolamasistemleri.mp4'), keys: ['landing-page/enerjidepolamasistemleri'] },
  { id: 'military', file: source('landing-page-videos/askerisistemuygulamalari.mp4'), keys: ['landing-page/askerisistemuygulamalari', 'service/askeri-sistem'] },
  { id: 'home-motor', file: source('artifacts/dewjet-motor-deniz-master-v1.mp4'), keys: ['landing-page/dewjet-motor-deniz-v1'] },
  { id: 'home-pump', file: pumpMaster, keys: ['landing-page/dewjet-pompa-v3'] },
  ...['marin', 'drone', 'ebus', 'forklift', 'golfaraclari', 'konut-cozumleri', 'mobil-solar', 'enerjidepolama'].map(name => ({ id: `service-${name}`, file: source(`tmp/service-video-sources/${name}.mp4`), keys: [`service/${name}`], preserve4096: name === 'golfaraclari' })),
  { id: 'pump-detail', file: 'C:/Users/merto/Desktop/GÖRSELLER/DEWJET POMPA/WhatsApp Video 2026-11-10 at 16.15.20.mp4', keys: ['service/dewjet-pompa-showcase-v1'] },
  { id: 'twin-motor', file: source('artifacts/twin-motor-concept/twin-motor-motion-v2.webm'), fps: 24, keys: ['service/dewjet-twin-marine-v2'] },
];
const only = process.argv.find(x => x.startsWith('--only='))?.slice(7);
if ((!only || only === 'home-pump') && !fs.existsSync(pumpMaster)) {
  if (!fs.existsSync(pumpOriginal)) throw new Error('Original pump upload is required.');
  console.log('Preparing original pump montage, preserving the approved crop and ending.');
  run(['-i', pumpOriginal, '-filter_complex', '[0:v]split=2[a][b];[a]trim=end=10,setpts=PTS-STARTPTS,crop=1280:720:320:180,scale=1920:1080[s1];[b]trim=start=10:end=15.958,setpts=PTS-STARTPTS,scale=1920:1080[s2];[s1][s2]concat=n=2:v=1:a=0,setsar=1[v]', '-map', '[v]', '-an', '-r', '24', '-c:v', 'libx264', '-preset', 'medium', '-crf', '14', '-threads', '4', pumpMaster]);
}
const manifest = {};
const report = [];
for (const job of jobs.filter(j => !only || j.id === only)) {
  if (!fs.existsSync(job.file)) throw new Error(`Missing original: ${job.id}`);
  const original = probe(job.file), stream = original.streams[0];
  const [num, den] = stream.r_frame_rate.split('/').map(Number);
  const fps = job.fps ?? Math.min(60, num / den);
  const record = { poster: `/media/sharp-v2/${job.id}-poster.jpg`, duration: Number(original.format.duration) };
  const nativeWidth = Math.min(job.preserve4096 ? 4096 : 3840, stream.width);
  const widths = nativeWidth > 2048 ? [nativeWidth, 1920] : [nativeWidth];
  for (const [index, width] of widths.entries()) {
    const tier = index === 0 ? 'full' : 'balanced';
    const stem = `${job.id}-${tier}${width === 4096 ? '-native' : ''}`;
    const filter = `scale=${width}:-2:flags=lanczos,fps=${fps},setsar=1`;
    for (const codec of ['webm', 'mp4']) {
      const output = path.join(destination, `${stem}.${codec}`);
      if (!fs.existsSync(output)) {
        console.log(`Encoding ${job.id} ${tier} ${width}px ${codec}`);
        if (codec === 'mp4' && job.preserve4096 && width === stream.width) {
          run(['-i', job.file, '-map', '0:v:0', '-c:v', 'copy', '-an', '-movflags', '+faststart', output]);
          continue;
        }
        const rate = width > 2048 ? 5000 : width > 1344 ? 2400 : 1500;
        const motionRate = Math.round(rate * (fps > 40 ? 1.35 : 1));
        const base = ['-i', job.file, '-an', '-vf', filter, '-pix_fmt', 'yuv420p', '-g', String(Math.round(fps * 2)), '-threads', '6'];
        const settings = codec === 'webm'
          ? ['-c:v', 'libvpx-vp9', '-b:v', `${motionRate}k`, '-crf', String(width > 2048 ? 37 : 32), '-maxrate', `${Math.round(motionRate * 1.3)}k`, '-bufsize', `${motionRate * 2}k`, '-deadline', 'good', '-cpu-used', '5', '-row-mt', '1', '-tile-columns', '2']
          : ['-c:v', 'libx264', '-preset', 'medium', '-crf', '21', '-maxrate', `${Math.round(motionRate * 1.5)}k`, '-bufsize', `${motionRate * 3}k`, '-movflags', '+faststart'];
        const temporary = path.join(destination, `${stem}.working.${codec}`);
        run([...base, ...settings, temporary]);
        fs.renameSync(temporary, output);
      }
    }
    const meta = probe(path.join(destination, `${stem}.mp4`)).streams[0];
    // A small, browser-compatible original needs no lossy re-encoding.
    const mp4Output = path.join(destination, `${stem}.mp4`);
    if (stream.codec_name === 'h264' && stream.pix_fmt === 'yuv420p' &&
        stream.width === meta.width && stream.height === meta.height &&
        Math.abs(num / den - fps) < 0.01 && Number(original.format.size) < fs.statSync(mp4Output).size) {
      const remux = path.join(destination, `${stem}.original.mp4`);
      run(['-i', job.file, '-map', '0:v:0', '-c:v', 'copy', '-an', '-movflags', '+faststart', remux]);
      if (fs.statSync(remux).size < fs.statSync(mp4Output).size) {
        fs.copyFileSync(remux, mp4Output);
        console.log(`Retained smaller original H264 detail: ${stem}`);
      }
      fs.unlinkSync(remux);
    }
    record[tier] = { width: meta.width, height: meta.height, fps,
      webm: `/media/sharp-v2/${stem}.webm`, mp4: `/media/sharp-v2/${stem}.mp4`,
      webmBytes: fs.statSync(path.join(destination, `${stem}.webm`)).size,
      mp4Bytes: fs.statSync(path.join(destination, `${stem}.mp4`)).size };
    console.log(`Ready ${stem}: VP9 ${record[tier].webmBytes} / H264 ${record[tier].mp4Bytes} bytes`);
  }
  record.balanced ??= record.full;
  const poster = path.join(destination, `${job.id}-poster.jpg`);
  if (!fs.existsSync(poster)) run(['-i', path.join(root, 'public', record.full.mp4), '-frames:v', '1', '-q:v', '2', '-update', '1', poster]);
  for (const key of job.keys) manifest[key] = record;
  report.push({ id: job.id, original: { width: stream.width, height: stream.height, bytes: Number(original.format.size) }, ...record });
  fs.writeFileSync(path.join(artifacts, 'progress.json'), JSON.stringify(report, null, 2));
}
fs.writeFileSync(path.join(artifacts, only ? `report-${only}.json` : 'report.json'), JSON.stringify(report, null, 2));
if (!only) {
  fs.writeFileSync(path.join(root, 'src/data/videoAssets.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Completed ${jobs.length} distinct videos / ${Object.keys(manifest).length} site references.`);
}
