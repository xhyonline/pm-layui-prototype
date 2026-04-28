param(
    [string]$VersionRoot = ".\\docs\\layui-vue\\2.23.3",
    [string]$OutputRoot = ".\\docs\\layui-vue\\2.23.3\\plain"
)

function Convert-ContainerBlock {
    param(
        [string]$Type,
        [string]$Info,
        [string[]]$BodyLines
    )

    $body = ($BodyLines -join "`n").Trim()

    switch ($Type) {
        "anchor" {
            return ""
        }
        "title" {
            if ([string]::IsNullOrWhiteSpace($Info)) {
                return ""
            }
            return "## $Info`n`n"
        }
        "describe" {
            $parts = @()
            if (-not [string]::IsNullOrWhiteSpace($Info)) {
                $parts += $Info.Trim()
            }
            if (-not [string]::IsNullOrWhiteSpace($body)) {
                $parts += $body
            }
            if ($parts.Count -eq 0) {
                return ""
            }
            return (($parts -join "`n`n").Trim() + "`n`n")
        }
        "quote" {
            $quoteBody = if (-not [string]::IsNullOrWhiteSpace($Info)) {
                $Info.Trim()
            } else {
                $body
            }
            if ([string]::IsNullOrWhiteSpace($quoteBody)) {
                return ""
            }
            $quoted = ($quoteBody -split "`r?`n" | ForEach-Object {
                if ([string]::IsNullOrWhiteSpace($_)) {
                    ">"
                } else {
                    "> $($_.TrimEnd())"
                }
            }) -join "`n"
            return ($quoted + "`n`n")
        }
        "table" {
            if ([string]::IsNullOrWhiteSpace($body)) {
                return ""
            }
            return ($body + "`n`n")
        }
        "demo" {
            $parts = @("### 示例")
            if (-not [string]::IsNullOrWhiteSpace($Info)) {
                $parts += ""
                $parts += $Info.Trim()
            }
            if (-not [string]::IsNullOrWhiteSpace($body)) {
                $parts += ""
                $parts += '```vue'
                $parts += $body
                $parts += '```'
            }
            return (($parts -join "`n").Trim() + "`n`n")
        }
        "previousNext" {
            return ""
        }
        default {
            if ([string]::IsNullOrWhiteSpace($body)) {
                return ""
            }
            return ($body + "`n`n")
        }
    }
}

function Normalize-Doc {
    param(
        [string]$SourceFile,
        [string]$TargetFile
    )

    $content = Get-Content -LiteralPath $SourceFile -Raw
    $content = $content -replace "`r`n", "`n"
    $content = $content -replace '(?m)^:\s*$', ':::'
    $lines = $content -split "`n"
    $builder = New-Object System.Text.StringBuilder
    $index = 0

    while ($index -lt $lines.Count) {
        $line = $lines[$index]
        $trimmed = $line.Trim()

        if ($trimmed -match '^:::+\s*([A-Za-z]+)(?:\s+(.*))?$') {
            $type = $matches[1]
            $info = if ($matches.Count -ge 3) { $matches[2] } else { "" }
            $bodyLines = @()
            $index++
            while ($index -lt $lines.Count -and $lines[$index].Trim() -notmatch '^:::+\s*$|^:$') {
                $bodyLines += $lines[$index]
                $index++
            }
            if ($index -lt $lines.Count -and $lines[$index].Trim() -match '^:::+\s*$|^:$') {
                $index++
            }
            [void]$builder.Append((Convert-ContainerBlock -Type $type -Info $info -BodyLines $bodyLines))
            continue
        }

        if ($trimmed -eq "<br>") {
            $index++
            continue
        }

        [void]$builder.AppendLine($line)
        $index++
    }

    $normalized = $builder.ToString()
    $normalized = $normalized -replace '(?m)^\s*:::+\s*title\s+(.+?)\s*$', '## $1'
    $normalized = $normalized -replace '(?m)^\s*:::+\s*describe\s+(.+?)\s*$', '$1'
    $normalized = $normalized -replace '(?m)^\s*:::+\s*demo\s+(.+?)\s*$', "### 示例`n`n`$1"
    $normalized = $normalized -replace '(?m)^\s*:::+\s*(table|anchor)\s*$', ''
    $normalized = $normalized -replace '(?m)^\s*:::+\s*previousNext(?:\s+.+?)?\s*$', ''
    $normalized = $normalized -replace '(?m)^\s*:::+\s*$', ''
    $normalized = $normalized -replace '(?m)^\s*:\s*$', ''
    $normalized = $normalized -replace "(`n){3,}", "`n`n"
    $normalized = $normalized.Trim() + "`n"
    Set-Content -LiteralPath $TargetFile -Value $normalized -Encoding UTF8
}

function Copy-PlainDocs {
    param(
        [string]$SourceRoot,
        [string]$DestinationRoot
    )

    $guideSource = Join-Path $SourceRoot "guide"
    $componentSource = Join-Path $SourceRoot "components"
    $guideDestination = Join-Path $DestinationRoot "guide"
    $componentDestination = Join-Path $DestinationRoot "components"

    New-Item -ItemType Directory -Force -Path $guideDestination, $componentDestination | Out-Null

    Get-ChildItem -LiteralPath $guideSource -File -Filter *.md | ForEach-Object {
        Normalize-Doc -SourceFile $_.FullName -TargetFile (Join-Path $guideDestination $_.Name)
    }

    Get-ChildItem -LiteralPath $componentSource -File -Filter *.md | ForEach-Object {
        Normalize-Doc -SourceFile $_.FullName -TargetFile (Join-Path $componentDestination $_.Name)
    }
}

New-Item -ItemType Directory -Force -Path $OutputRoot | Out-Null
Copy-Item (Join-Path $VersionRoot "README.zh.md") (Join-Path $OutputRoot "README.zh.md") -Force
Copy-PlainDocs -SourceRoot $VersionRoot -DestinationRoot $OutputRoot

Write-Output "Generated plain docs under: $OutputRoot"
