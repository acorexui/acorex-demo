$ErrorActionPreference = 'Continue'
$root = if ($PSScriptRoot) { Split-Path $PSScriptRoot -Parent } else { 'c:\Users\sh.kahrizi\Desktop\code\acorex-demo' }
if (-not (Test-Path (Join-Path $root 'package.json'))) {
  $root = 'c:\Users\sh.kahrizi\Desktop\code\acorex-demo'
}
Set-Location $root
$pipelineLog = Join-Path $root 'ssg-pipeline-log.txt'
Remove-Item $pipelineLog -ErrorAction SilentlyContinue

function L([string]$m) {
  Add-Content -Path $pipelineLog -Value $m
  Write-Host $m
}

function Write-Summary([int]$code, [string]$logPath, [string]$label) {
  $text = ''
  if (Test-Path $logPath) {
    $text = Get-Content $logPath -Raw -ErrorAction SilentlyContinue
  }
  if (-not $text) { $text = '' }

  $failed = $text -match 'Application bundle generation failed'
  $success = $text -match 'successfully'
  $errCount = ([regex]::Matches($text, 'ERROR')).Count
  $ng0201 = ([regex]::Matches($text, 'NG0201')).Count
  $maska = ([regex]::Matches($text, 'maska', 'IgnoreCase')).Count
  $docUndef = ([regex]::Matches($text, 'document is not defined')).Count

  $errMsgs = New-Object System.Collections.Generic.List[string]
  $lines = $text -split "`n"
  foreach ($line in $lines) {
    if ($line -match '(Error:|ERROR|NG\d+|ReferenceError|TypeError|Cannot find|failed)') {
      $m = $line.Trim()
      if ($m.Length -gt 200) { $m = $m.Substring(0, 200) }
      if ($m -and -not $errMsgs.Contains($m)) { $errMsgs.Add($m) }
      if ($errMsgs.Count -ge 5) { break }
    }
  }
  $last40 = ($lines | Select-Object -Last 40) -join "`n"

  $sb = New-Object System.Text.StringBuilder
  [void]$sb.AppendLine("SSG Build Summary ($label)")
  [void]$sb.AppendLine("exit code: $code")
  if ($failed) {
    [void]$sb.AppendLine('result phrase: Application bundle generation failed')
  } elseif ($success) {
    [void]$sb.AppendLine('result phrase: successfully')
  } else {
    [void]$sb.AppendLine('result phrase: neither failed nor successfully clearly matched')
  }
  [void]$sb.AppendLine("ERROR count: $errCount")
  [void]$sb.AppendLine("NG0201 count: $ng0201")
  [void]$sb.AppendLine("maska count: $maska")
  [void]$sb.AppendLine("document is not defined count: $docUndef")
  [void]$sb.AppendLine('first 5 unique error messages:')
  if ($errMsgs.Count -eq 0) {
    [void]$sb.AppendLine('  (none found)')
  } else {
    $i = 1
    foreach ($e in $errMsgs) {
      [void]$sb.AppendLine("  $i. $e")
      $i++
    }
  }
  [void]$sb.AppendLine('--- last 40 lines ---')
  [void]$sb.AppendLine($last40)

  return @{
    Text     = $sb.ToString()
    Failed   = [bool]$failed
    Ng0201   = $ng0201
    Maska    = $maska
    DocUndef = $docUndef
    LogText  = $text
  }
}

function Invoke-NpmBuildSsg([string]$outFile) {
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
    L 'BUILD TIMED OUT after 15 minutes'
    $code = -1
  } else {
    $code = $p.ExitCode
  }
  $combined = $outBuilder.ToString() + $errBuilder.ToString()
  Set-Content -Path $outFile -Value $combined -Encoding UTF8
  return $code
}

# --- Step 1: validate angular.json ---
L '=== STEP 1: Validate angular.json ==='
try {
  $null = Get-Content (Join-Path $root 'angular.json') -Raw | ConvertFrom-Json
  $j = Get-Content (Join-Path $root 'angular.json') -Raw | ConvertFrom-Json
  $projName = ($j.projects.PSObject.Properties.Name)[0]
  $build = $j.projects.$projName.architect.build
  L 'angular.json: VALID JSON'
  L "project: $projName"
  L ("build.options keys: " + (($build.options.PSObject.Properties.Name) -join ', '))
  L ("configurations: " + (($build.configurations.PSObject.Properties.Name) -join ', '))
  if ($build.configurations.ssg) {
    L 'configurations.ssg: PRESENT'
    L (($build.configurations.ssg | ConvertTo-Json -Depth 8))
  } else {
    L 'configurations.ssg: MISSING'
  }
} catch {
  L ("angular.json INVALID: " + $_.Exception.Message)
  Set-Content (Join-Path $root '_SSG_SUMMARY.txt') "exit code: 1`nangular.json invalid`n$($_.Exception.Message)"
  Write-Host 'SUMMARY_READY'
  exit 1
}

# --- Step 2: generate routes ---
L '=== STEP 2: generate:ssg-routes ==='
cmd /c "npm run generate:ssg-routes" > (Join-Path $root '_gen_routes_out.txt') 2>&1
$genExit = $LASTEXITCODE
L "generate exit: $genExit"

# --- Step 3: routes.txt ---
L '=== STEP 3: Confirm routes.txt ==='
$routesPath = Join-Path $root 'routes.txt'
if (Test-Path $routesPath) {
  $rc = @(Get-Content $routesPath).Count
  $bytes = (Get-Item $routesPath).Length
  L "routes.txt FOUND lines=$rc bytes=$bytes"
  if ($rc -eq 0 -or $bytes -eq 0) {
    L 'WARNING: routes.txt is empty'
  }
} else {
  L 'routes.txt NOT FOUND'
}

# --- Step 4: build ---
L '=== STEP 4: build:ssg ==='
$buildLog = Join-Path $root 'ssg-build-output.txt'
$exitCode = Invoke-NpmBuildSsg $buildLog
L "build exit: $exitCode"
if (Test-Path $buildLog) {
  L ("build log bytes: " + (Get-Item $buildLog).Length)
}

$sum1 = Write-Summary $exitCode $buildLog 'attempt 1'
Set-Content -Path (Join-Path $root '_SSG_SUMMARY.txt') -Value $sum1.Text -Encoding UTF8
L 'Wrote _SSG_SUMMARY.txt (attempt 1)'

$needFix = ($exitCode -ne 0) -or $sum1.Failed
if ($needFix) {
  L '=== STEP 5: One fix iteration ==='

  $extra = New-Object System.Collections.Generic.HashSet[string]
  foreach ($line in ($sum1.LogText -split "`n")) {
    $rm = [regex]::Matches($line, '(?:Prerendering|Rendering|Unable to render|Error generating|route[:\s]+)[^\n]*?(/[a-zA-Z0-9_\-/]+)', 'IgnoreCase')
    foreach ($m in $rm) {
      $p = $m.Groups[1].Value.TrimEnd('/')
      $parts = $p.TrimStart('/').Split('/')
      if ($parts[0]) {
        [void]$extra.Add($parts[0] + '/')
      }
    }
    # Also catch paths like "at /datepicker/..."
    $rm2 = [regex]::Matches($line, '\s(/[a-zA-Z][a-zA-Z0-9_\-]*)/')
    foreach ($m in $rm2) {
      $seg = $m.Groups[1].Value.TrimStart('/')
      if ($seg -and $seg -notmatch '^(node_modules|dist|src|assets)$') {
        [void]$extra.Add($seg + '/')
      }
    }
  }
  L ("extra deny prefixes from log: " + (($extra | Sort-Object) -join ', '))

  $genScript = Join-Path $root 'scripts\generate-ssg-routes.js'
  if ((Test-Path $genScript) -and $extra.Count -gt 0) {
    $gs = Get-Content $genScript -Raw
    $toAdd = @()
    foreach ($e in ($extra | Sort-Object)) {
      if ($gs -notmatch [regex]::Escape('"' + $e + '"') -and $gs -notmatch [regex]::Escape("'$e'")) {
        $toAdd += ('    "' + $e + '",')
      }
    }
    if ($toAdd.Count -gt 0) {
      $insert = ($toAdd -join "`n") + "`n"
      if ($gs -match 'const denylistPrefixes = \[') {
        $gs2 = $gs -replace '(const denylistPrefixes = \[)', ("`$1`n" + $insert)
        Set-Content -Path $genScript -Value $gs2 -Encoding UTF8
        L ("Updated denylist with: " + ($toAdd -join ' '))
      } else {
        L 'denylistPrefixes array not found'
      }
    } else {
      L 'No new denylist entries (already present)'
    }
  }

  $stubs = Join-Path $root 'src\prerender-browser-stubs.ts'
  if (Test-Path $stubs) {
    $st = Get-Content $stubs -Raw
    $changed = $false
    if (($sum1.DocUndef -gt 0 -or $sum1.Maska -gt 0) -and ($st -notmatch 'matchMedia')) {
      # already comprehensive in this repo; skip
      L 'Stubs present; document/maska issues may need denylist not stubs'
    }
    if (($sum1.DocUndef -gt 0 -or $sum1.Maska -gt 0) -and ($st -notmatch 'ensureDataset')) {
      $st += @"

// fallback dataset for maska
try {
  const g2 = globalThis as any;
  if (g2.HTMLElement && g2.HTMLElement.prototype && !Object.getOwnPropertyDescriptor(g2.HTMLElement.prototype, 'dataset')) {
    Object.defineProperty(g2.HTMLElement.prototype, 'dataset', {
      configurable: true,
      get() {
        if (!(this as any).__dataset) (this as any).__dataset = {};
        return (this as any).__dataset;
      },
    });
  }
} catch {}
"@
      $changed = $true
    }
    # Force document even when Domino partially exists
    if ($sum1.DocUndef -gt 0 -and $st -notmatch 'FORCE_DOCUMENT_STUB') {
      $st += @"

// FORCE_DOCUMENT_STUB
try {
  const g3 = globalThis as any;
  if (!g3.document || typeof g3.document.createElement !== 'function') {
    const el = () => ({ style: {}, dataset: {}, classList: { add() {}, remove() {}, contains() { return false; } }, setAttribute() {}, getAttribute() { return null; }, appendChild(c: unknown) { return c; }, addEventListener() {}, removeEventListener() {} });
    g3.document = { createElement: el, createElementNS: (_: string, t: string) => el(), body: el(), head: el(), documentElement: el(), cookie: '', querySelector() { return null; }, getElementById() { return null; }, addEventListener() {}, removeEventListener() {} };
  }
  if (!g3.window) g3.window = g3;
} catch {}
"@
      $changed = $true
    }
    if ($changed) {
      Set-Content -Path $stubs -Value $st -Encoding UTF8
      L 'Strengthened prerender-browser-stubs.ts'
    } else {
      L 'Stubs already comprehensive enough; no stub edit'
    }
  }

  L 'Regenerating routes...'
  cmd /c "npm run generate:ssg-routes" > (Join-Path $root '_gen_routes_out2.txt') 2>&1

  L 'Rebuilding SSG (attempt 2)...'
  $exit2 = Invoke-NpmBuildSsg $buildLog
  L "rebuild exit: $exit2"
  $sum2 = Write-Summary $exit2 $buildLog 'attempt 2 (after fixes)'
  Set-Content -Path (Join-Path $root '_SSG_SUMMARY.txt') -Value $sum2.Text -Encoding UTF8
  L 'Wrote final _SSG_SUMMARY.txt'
} else {
  L 'Build succeeded on first attempt; no fix iteration needed'
}

Write-Host 'SUMMARY_READY'
Get-Content (Join-Path $root '_SSG_SUMMARY.txt')
Write-Host 'SUMMARY_END'
exit 0
