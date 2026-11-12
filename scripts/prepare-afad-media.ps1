$ErrorActionPreference = 'Stop'
$destination = Join-Path $PSScriptRoot '../public/afad'
New-Item -ItemType Directory -Force -Path $destination | Out-Null
# Official news photographs; article attribution lives in src/data/afad.ts.
$images = @{
  'unicef.jpg' = 'https://www.afad.gov.tr/kurumlar/afad.gov.tr/Haberler/2026/Ekim/unicef-ziyareti/kapan-unicef-ziyareti.jpg?mode=resize&width=1000'
  'trabzon.jpg' = 'https://afad.gov.tr/kurumlar/afad.gov.tr/Haberler/2026/EYLUL-AYI-HABERLERI/Trabzon-Valisi-Ziyaret/kapak-Vali-Pehlivan-Trabzon-Valisi-ziyaret.jpg?mode=resize&width=1000'
}
foreach ($entry in $images.GetEnumerator()) {
  Invoke-WebRequest -UseBasicParsing -Uri $entry.Value -OutFile (Join-Path $destination $entry.Key) -TimeoutSec 30
}
Get-ChildItem $destination | Select-Object Name, Length
