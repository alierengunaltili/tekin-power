const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const input = process.argv[2];
if (!input) throw new Error('Supply the approved 1.mp4 source path.');
const ffmpeg = 'C:/Program Files/Shotcut/ffmpeg.exe';
const ffprobe = 'C:/Program Files/Shotcut/ffprobe.exe';
const dir = path.join(root, 'public/media/survey-detail-v3');
fs.mkdirSync(dir, { recursive: true });
const run = args => execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', ...args], { stdio: 'inherit' });
const asset = { poster: '/media/survey-detail-v3/poster.jpg', duration: 0 };
for (const [tier, width] of [['full',1024],['balanced',768]]) {
  for (const ext of ['mp4','webm']) {
    const codec = ext === 'mp4'
      ? ['-c:v','libx264','-preset','medium','-crf',tier === 'full' ? '20' : '23','-movflags','+faststart']
      : ['-c:v','libvpx-vp9','-crf',tier === 'full' ? '26' : '30','-b:v','0','-deadline','good','-cpu-used','4','-row-mt','1'];
    // FFmpeg applies source rotation first. Remove only embedded black side bars.
    run(['-i',input,'-map','0:v:0','-vf',`crop=1024:576:112:0,scale=${width}:-2:flags=lanczos,setsar=1`,'-an','-pix_fmt','yuv420p','-g','60','-threads','6',...codec,path.join(dir,`${tier}.${ext}`)]);
  }
  const meta = JSON.parse(execFileSync(ffprobe,['-v','error','-show_entries','stream=width,height:format=duration','-of','json',path.join(dir,`${tier}.mp4`)],{encoding:'utf8'}));
  if (meta.streams[0].width !== width || Math.abs(Number(meta.format.duration)-8.933333)>0.1) throw new Error('Unexpected video size or duration');
  asset.duration=Number(meta.format.duration);
  asset[tier]={width,height:width*9/16,fps:30,webm:`/media/survey-detail-v3/${tier}.webm`,mp4:`/media/survey-detail-v3/${tier}.mp4`,webmBytes:fs.statSync(path.join(dir,`${tier}.webm`)).size,mp4Bytes:fs.statSync(path.join(dir,`${tier}.mp4`)).size};
}
run(['-ss','2','-i',path.join(dir,'full.mp4'),'-frames:v','1','-q:v','2','-update','1',path.join(dir,'poster.jpg')]);
const manifestPath=path.join(root,'src/data/videoAssets.json');
const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
manifest['service/deniz-gol-detail-v3']=asset;
fs.writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify(asset));
