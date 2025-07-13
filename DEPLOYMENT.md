# Souva Website Deployment Rehberi

## 🚀 İlk Defa GitHub'a Yükleme

### Option 1: Otomatik Setup (Önerilen)
1. `setup-github.bat` dosyasına çift tıklayın
2. Script otomatik olarak:
   - GitHub authentication yapacak
   - Repository oluşturacak
   - Kodları yükleyecek
   - Netlify talimatlarını verecek

### Option 2: Manuel Setup
1. GitHub.com'a gidin ve yeni repository oluşturun
2. Terminal'de şu komutları çalıştırın:
```bash
git remote add origin https://github.com/USERNAME/souva-website.git
git push -u origin main
```

## 🌐 Netlify'e Deployment

1. [netlify.com](https://netlify.com)'a gidin
2. GitHub ile giriş yapın
3. "New site from Git" → "GitHub" → "souva-website" seçin
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Framework**: Next.js
5. "Deploy site" butonuna tıklayın

## 🔄 Güncelleme Yapmak

### Option 1: Otomatik Deployment
```bash
.\deploy.ps1 -message "Yeni özellik eklendi"
```

### Option 2: Manuel Deployment
```bash
git add .
git commit -m "Güncellemeler"
git push origin main
```

## 📁 Dosya Yapısı

- `setup-github.bat`: İlk setup için
- `setup-github.ps1`: GitHub setup scripti
- `deploy.ps1`: Güncelleme scripti
- `DEPLOYMENT.md`: Bu rehber

## 🌍 Dil Sistemi

Website tamamen çok dilli:
- **Türkçe/İngilizce**: Tüm UI elementleri
- **Blog**: `.tr.md` dosyaları Türkçe içerik
- **Ürün sayfaları**: Tam olarak tercüme edilmiş
- **Hukuki sayfalar**: Gizlilik ve Kullanım Şartları

## 🎯 Önemli Notlar

- Her push otomatik olarak Netlify'i günceller
- Build süresi ~2-3 dakika
- Hata durumunda Netlify dashboard'dan logları kontrol edin
- Domain değişikliği için Netlify settings'ten

## 📞 Sorun Yaşarsanız

1. Git durumunu kontrol edin: `git status`
2. GitHub connection'ı kontrol edin: `gh auth status`
3. Netlify build loglarını kontrol edin

**Başarılar!** 🎉 