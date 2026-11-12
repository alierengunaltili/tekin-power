param(
  [string]$Source = 'C:/Users/merto/Desktop/gemini_motor_ON_yazisi_kaldirildi.mp4',
  [string]$Ffmpeg = 'C:/Program Files/Shotcut/ffmpeg.exe'
)
$ErrorActionPreference = 'Stop'
$appRoot = Split-Path $PSScriptRoot -Parent
$artifactDir = Join-Path (Split-Path $appRoot -Parent) 'artifacts'
$backdrop = Join-Path $appRoot 'public/dewjet-motor/motor-deniz-doga-v1.png'
$master = Join-Path $artifactDir 'dewjet-motor-deniz-master-v1.mp4'
$name = 'dewjet-motor-deniz-v1'
# Feather only the surrounding studio frame; retain the rotating product pixels.
$composite = "[0:v]scale=1280:720,setsar=1[bg];[1:v]format=rgba,geq=r='r(X,Y)':g='g(X,Y)':b='b(X,Y)':a='255*clip((X-180)/220,0,1)*clip((1150-X)/220,0,1)*clip(Y/40,0,1)*clip((H-Y)/40,0,1)'[motor];[bg][motor]overlay=340:0:shortest=1,format=yuv420p[out]"
& $Ffmpeg -hide_banner -loglevel warning -y -loop 1 -framerate 24 -i $backdrop -i $Source -filter_complex $composite -map '[out]' -an -t 10 -r 24 -c:v libx264 -preset medium -crf 16 -movflags +faststart $master
if ($LASTEXITCODE -ne 0) { throw 'Motor composition failed.' }
foreach ($rendition in @(
  @{Quality='hd'; Width=1280; Crf=18; Rate='2800k'; Buffer='5600k'},
  @{Quality='medium'; Width=960; Crf=21; Rate='1500k'; Buffer='3000k'},
  @{Quality='lite'; Width=640; Crf=24; Rate='700k'; Buffer='1400k'}
)) {
  $destination = Join-Path $appRoot "public/landing-page-videos-$($rendition.Quality)/$name.mp4"
  & $Ffmpeg -hide_banner -loglevel warning -y -i $master -vf "scale=$($rendition.Width):-2:flags=lanczos" -an -c:v libx264 -preset slow -crf $rendition.Crf -maxrate $rendition.Rate -bufsize $rendition.Buffer -g 48 -keyint_min 24 -pix_fmt yuv420p -movflags +faststart $destination
  if ($LASTEXITCODE -ne 0) { throw "Encoding failed: $($rendition.Quality)" }
}
$poster = Join-Path $appRoot 'public/landing-page-posters/dewjet-motor-start-v2.jpg'
# Match the exact opening frame; a later frame makes the motor jump at playback start.
$hdVideo = Join-Path $appRoot "public/landing-page-videos-hd/$name.mp4"
& $Ffmpeg -hide_banner -loglevel warning -y -i $hdVideo -frames:v 1 -q:v 2 -update 1 $poster
if ($LASTEXITCODE -ne 0) { throw 'Poster generation failed.' }
