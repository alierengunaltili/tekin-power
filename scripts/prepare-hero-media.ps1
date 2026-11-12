param([string]$Ffmpeg = 'ffmpeg')
$ErrorActionPreference = 'Stop'
$taskPublic = Join-Path $PSScriptRoot '../public'
$taskInput = Join-Path $taskPublic 'landing-page-videos-optimized'
$taskOutput = Join-Path $taskPublic 'landing-page-videos-lite'
$taskPosters = Join-Path $taskPublic 'landing-page-posters'
New-Item -ItemType Directory -Force $taskOutput,$taskPosters | Out-Null
Get-ChildItem -LiteralPath $taskInput -Filter '*.mp4' | ForEach-Object {
  $taskVideo = Join-Path $taskOutput $_.Name
  $taskPoster = Join-Path $taskPosters ($_.BaseName + '.jpg')
  & $Ffmpeg -hide_banner -loglevel error -y -i $_.FullName -an -vf 'scale=640:-2,fps=20' -c:v libx264 -preset fast -crf 32 -maxrate 450k -bufsize 900k -pix_fmt yuv420p -movflags +faststart $taskVideo
  if ($LASTEXITCODE -ne 0) { throw ('Video encoding failed: ' + $_.Name) }
  & $Ffmpeg -hide_banner -loglevel error -y -i $_.FullName -frames:v 1 -vf 'scale=960:-2' -q:v 6 $taskPoster
  if ($LASTEXITCODE -ne 0) { throw ('Poster generation failed: ' + $_.Name) }
  Write-Output ('{0}: {1} -> {2} bytes' -f $_.Name,$_.Length,(Get-Item -LiteralPath $taskVideo).Length)
}
