# Deployment Script for Souva Website
# Bu script'i her güncelleme sonrası çalıştırın

param(
    [string]$message = "Website updated"
)

Write-Host "=== Souva Website Deployment ===" -ForegroundColor Green

# Değişiklikleri kontrol et
Write-Host "Git durumu kontrol ediliyor..." -ForegroundColor Yellow
$gitStatus = git status --porcelain
if (-not $gitStatus) {
    Write-Host "Hiçbir değişiklik bulunamadı." -ForegroundColor Red
    exit
}

# Değişiklikleri göster
Write-Host "Değişiklikler:" -ForegroundColor Yellow
git status

# Kullanıcıdan onay al
$confirm = Read-Host "Bu değişiklikleri deploy etmek istiyor musunuz? (y/n)"
if ($confirm -ne "y") {
    Write-Host "Deployment iptal edildi." -ForegroundColor Red
    exit
}

# Add, commit, push
Write-Host "Değişiklikler ekleniyor..." -ForegroundColor Yellow
git add .

Write-Host "Commit yapılıyor..." -ForegroundColor Yellow
git commit -m $message

Write-Host "GitHub'a push yapılıyor..." -ForegroundColor Yellow
git push origin main

Write-Host "=== BAŞARILI! ===" -ForegroundColor Green
Write-Host "Değişiklikler GitHub'a yüklendi." -ForegroundColor Cyan
Write-Host "Netlify otomatik olarak güncellenecek (1-2 dakika)." -ForegroundColor Cyan

# Netlify URL'sini göster
Write-Host ""
Write-Host "Netlify dashboard: https://app.netlify.com/sites" -ForegroundColor Yellow
Write-Host "Deployment log'larını kontrol edin." -ForegroundColor Yellow 