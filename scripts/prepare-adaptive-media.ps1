param([string]$Ffmpeg = 'C:/Program Files/Shotcut/ffmpeg.exe', [switch]$IncludeServices)
$ErrorActionPreference = 'Stop'
$appRoot = Split-Path $PSScriptRoot
$public = Join-Path $appRoot 'public'
$originals = Join-Path $appRoot '../landing-page-videos'
$names = @('marin','enerjidepolamasistemleri','askerisistemuygulamalari','carport','mobilsolarpanel','konutcozumleri','golfcar','drone','forklift','ebus')
function Convert-Variants([string]$inputPath, [string]$name, [string]$prefix) {
  $variants = @(
    @{Name='hd';Width=1280;Fps=30;Crf=23;Rate='1800k';Buffer='3600k'},
    @{Name='medium';Width=960;Fps=30;Crf=26;Rate='900k';Buffer='1800k'},
    @{Name='lite';Width=640;Fps=24;Crf=29;Rate='400k';Buffer='800k'}
  )
  foreach ($variant in $variants) {
    $folder = Join-Path $public "$prefix-videos-$($variant.Name)"
    New-Item -ItemType Directory -Force $folder | Out-Null
    $output = Join-Path $folder "$name.mp4"
    & $Ffmpeg -hide_banner -loglevel error -y -i $inputPath -an -vf "scale='min($($variant.Width),iw)':-2,fps=$($variant.Fps)" -c:v libx264 -preset fast -crf $variant.Crf -maxrate $variant.Rate -bufsize $variant.Buffer -g 60 -pix_fmt yuv420p -movflags +faststart $output
    if ($LASTEXITCODE -ne 0) { throw "Encoding failed: $name/$($variant.Name)" }
    Write-Output "$prefix/$name/$($variant.Name): $((Get-Item $output).Length) bytes"
  }
  $posters = Join-Path $public "$prefix-posters"
  New-Item -ItemType Directory -Force $posters | Out-Null
  & $Ffmpeg -hide_banner -loglevel error -y -i $inputPath -frames:v 1 -vf "scale='min(1280,iw)':-2" -q:v 3 (Join-Path $posters "$name.jpg")
  if ($LASTEXITCODE -ne 0) { throw "Poster failed: $name" }
}
foreach ($name in $names) { Convert-Variants (Join-Path $originals "$name.mp4") $name 'landing-page' }
if ($IncludeServices) {
  $cache = Join-Path $appRoot '../tmp/service-video-sources'
  New-Item -ItemType Directory -Force $cache | Out-Null
  Get-ChildItem (Join-Path $appRoot 'src/app/utils/photo-mappings/hizmetlerimiz') -Filter '*.ts' | Where-Object { $_.BaseName -ne 'telekominukasyon' } | ForEach-Object {
    $match = [regex]::Match((Get-Content -Raw -LiteralPath $_.FullName), '"video1":\s*"([^"]+)"')
    if ($match.Success) {
      $source = Join-Path $cache ($_.BaseName + '.mp4')
      if (!(Test-Path -LiteralPath $source)) {
        Invoke-WebRequest -UseBasicParsing -Uri $match.Groups[1].Value -OutFile $source -TimeoutSec 90
      }
      Convert-Variants $source $_.BaseName 'service'
    }
  }
}
