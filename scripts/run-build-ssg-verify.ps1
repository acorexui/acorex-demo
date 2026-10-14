$ErrorActionPreference = 'Continue'
$root = Split-Path $PSScriptRoot -Parent
Set-Location $root
$outFile = Join-Path $root 'build-ssg-verify.txt'

$psi = New-Object System.Diagnostics.ProcessStartInfo
$psi.FileName = 'cmd.exe'
$psi.Arguments = '/c npm run build:ssg'
$psi.WorkingDirectory = $root
$psi.UseShellExecute = $false
$psi.RedirectStandardOutput = $true
$psi.RedirectStandardError = $true
$psi.CreateNoWindow = $true
$p = New-Object System.Diagnostics.Process
$p.StartInfo = $psi
$outBuilder = New-Object System.Text.StringBuilder
$errBuilder = New-Object System.Text.StringBuilder
$outHandler = [System.Diagnostics.DataReceivedEventHandler] {
  param($s, $e)
  if ($e.Data) { [void]$outBuilder.AppendLine($e.Data) }
}
$errHandler = [System.Diagnostics.DataReceivedEventHandler] {
  param($s, $e)
  if ($e.Data) { [void]$errBuilder.AppendLine($e.Data) }
}
$p.add_OutputDataReceived($outHandler)
$p.add_ErrorDataReceived($errHandler)
[void]$p.Start()
$p.BeginOutputReadLine()
$p.BeginErrorReadLine()
$finished = $p.WaitForExit(900000)
if (-not $finished) {
  try { $p.Kill() } catch {}
  exit -1
}
$combined = $outBuilder.ToString() + $errBuilder.ToString()
Set-Content -Path $outFile -Value $combined -Encoding UTF8
exit $p.ExitCode
