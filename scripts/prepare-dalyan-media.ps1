$ErrorActionPreference = 'Stop'
$destination = Join-Path $PSScriptRoot '../public/dalyan'
New-Item -ItemType Directory -Force -Path $destination | Out-Null
$images = @{
  'tomris-hatun.jpg' = 'https://cdn.muglagazetesi.com.tr/news/110280.jpg'
  'donusum-toplantisi.jpg' = 'https://cdn.muglagazetesi.com.tr/news/103270.jpg'
  'candela-p12.jpg' = 'https://mnd-assets.mynewsdesk.com/image/upload/ar_16%3A9%2Cc_fill%2Cdpr_auto%2Cf_auto%2Cg_xy_center%2Cq_auto%3Agood%2Cw_746%2Cx_768%2Cy_512/toceeusn4sfy76urzfxasc'
}
foreach ($entry in $images.GetEnumerator()) {
  Invoke-WebRequest -UseBasicParsing -Uri $entry.Value -OutFile (Join-Path $destination $entry.Key) -TimeoutSec 30
}
Get-ChildItem $destination | Select-Object Name,Length
