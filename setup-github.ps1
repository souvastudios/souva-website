# GitHub Repository Setup Script
# Bu script'i çalıştırmak için:
# 1. PowerShell'i administrator olarak açın
# 2. Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
# 3. .\setup-github.ps1

Write-Host "=== Souva Website GitHub Setup ===" -ForegroundColor Green

# GitHub authentication kontrolü
Write-Host "GitHub authentication kontrol ediliyor..." -ForegroundColor Yellow
$authStatus = gh auth status 2>&1
if ($authStatus -match "not logged into") {
    Write-Host "GitHub'a giriş yapılıyor..." -ForegroundColor Yellow
    gh auth login --web
}

# Repository oluştur
Write-Host "GitHub repository oluşturuluyor..." -ForegroundColor Yellow
gh repo create souva-website --public --description "Souva Studios - Complete bilingual website with Turkish translation"

# Remote ekle
Write-Host "Remote repository bağlantısı ekleniyor..." -ForegroundColor Yellow
git remote add origin https://github.com/$(gh api user --jq '.login')/souva-website.git

# Push yap
Write-Host "Kod GitHub'a yükleniyor..." -ForegroundColor Yellow
git push -u origin main

Write-Host "=== BAŞARILI! ===" -ForegroundColor Green
Write-Host "Repository URL: https://github.com/$(gh api user --jq '.login')/souva-website" -ForegroundColor Cyan

# Netlify deployment komutları
Write-Host ""
Write-Host "=== Netlify Deployment ===" -ForegroundColor Green
Write-Host "1. https://netlify.com'a gidin ve GitHub ile giriş yapın" -ForegroundColor Yellow
Write-Host "2. 'New site from Git' -> 'GitHub' -> 'souva-website' seçin" -ForegroundColor Yellow
Write-Host "3. Build settings:" -ForegroundColor Yellow
Write-Host "   - Build command: npm run build" -ForegroundColor White
Write-Host "   - Publish directory: out" -ForegroundColor White
Write-Host "   - Framework: Next.js" -ForegroundColor White
Write-Host "4. 'Deploy site' butonuna tıklayın" -ForegroundColor Yellow

Write-Host ""
Write-Host "Tamamlandı! Website GitHub'da ve Netlify'de hazır." -ForegroundColor Green 