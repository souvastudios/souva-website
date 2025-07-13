@echo off
echo === Souva Website GitHub Setup ===
echo.
echo PowerShell execution policy ayarlanıyor...
powershell -Command "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force"
echo.
echo GitHub setup script çalıştırılıyor...
powershell -File ".\setup-github.ps1"
echo.
echo Script tamamlandı. Herhangi bir tuşa basın...
pause 