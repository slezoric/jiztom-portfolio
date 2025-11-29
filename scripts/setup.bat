@echo off
REM Cross-platform setup script for Windows
REM This script automates the initial setup for the portfolio project

setlocal enabledelayedexpansion

echo 🚀 Setting up Jiztom's Portfolio...
echo.

REM Check if Bun is installed
where bun >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo 📦 Bun not found. Installing Bun...
    echo This will download and install Bun from the official source.
    echo.
    
    REM Download Bun installer (Windows native binary)
    powershell -Command "iex (New-Object Net.WebClient).DownloadString('https://bun.sh/install.ps1')"
    
    echo ✅ Bun installed successfully!
    echo.
    echo ⚠️  Please restart this terminal window and try again.
    echo.
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('bun --version') do set BUN_VERSION=%%i
    echo ✅ Bun is already installed: !BUN_VERSION!
)

echo.
echo 📚 Installing project dependencies...
call bun install

echo.
echo ✅ Setup complete!
echo.
echo 📖 Next steps:
echo    1. Start the dev server: bun run dev
echo    2. Open http://localhost:8080 in your browser
echo    3. Edit config at: src/config/portfolio-config.ts
echo.
pause
