$imagesRoot = Join-Path $PSScriptRoot 'public\images'
$videosRoot = Join-Path $PSScriptRoot 'public\videos'

New-Item -ItemType Directory -Force -Path (Join-Path $imagesRoot 'team') | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $imagesRoot 'screens') | Out-Null
New-Item -ItemType Directory -Force -Path $videosRoot | Out-Null

$files = @(
    @('images\team\ira-agarwal-profile.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/08/ira-agarwal-profile.png'),
    @('images\team\hanish-suri-profile-v1.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/hanish-suri-profile-v1.png'),
    @('images\team\sunil-khokhar-profile.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/sunil-khokhar-profile.png'),
    @('images\team\mohit-sharma-profile.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/08/mohit-sharma-profile.png'),
    @('images\team\tushar-profile.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/08/tushar-profile.png'),
    @('images\favicon.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/08/favicon-risk-radar-v1-300x300.png'),
    @('images\screens\select-requirement-file-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/select-requirement-file-screen.png'),
    @('images\screens\select-bug-report-file-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/select-bug-report-file-screen.png'),
    @('images\screens\select-test-case-file-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/select-test-case-file-screen.png'),
    @('images\screens\add-credentials-jira-and-github-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/add-credentials-jira-and-github-screen.png'),
    @('images\screens\historical-knowledge-base-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/historical-knowledge-base-screen.png'),
    @('images\screens\analyze-button-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/analyze-button-screen.png'),
    @('images\screens\downloadble-pdf-copy-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/downloadble-pdf-copy-screen.png'),
    @('images\screens\specialized-agents-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/specialized-agents-screen.png'),
    @('images\screens\better-risk-analysis-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/better-risk-analysis-screen.png'),
    @('images\screens\historical-reports-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/historical-reports-screen.png'),
    @('images\screens\ai-observability-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/ai-observability-screen.png'),
    @('images\screens\feedback-and-reviews-screen.png','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/feedback-and-reviews-screen.png'),
    @('videos\home-risk-radar-updated.mp4','https://demo.aiqariskradar.com/wp-content/uploads/2026/09/home-risk-radar-updated.mp4')
)

foreach ($item in $files) {
    $rel = $item[0]
    $url = $item[1]
    $dest = Join-Path (Join-Path $PSScriptRoot 'public') $rel
    Write-Host "Downloading $rel from $url ..."
    try {
        [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
        Invoke-WebRequest -Uri $url -OutFile $dest -TimeoutSec 45
        Write-Host "Done: $rel"
    } catch {
        Write-Warning "Failed downloading $rel : $_"
    }
}
Write-Host "All downloads complete."
