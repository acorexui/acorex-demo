@echo off
REM ACoreX Demo SSG Deployment Script for Windows
REM این اسکریپت برای دیپلوی SSG application در Windows استفاده می‌شه

echo 🚀 Starting ACoreX Demo SSG Deployment...

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker is not installed. Please install Docker Desktop first.
    pause
    exit /b 1
)

REM Check if docker-compose is installed
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker Compose is not installed. Please install Docker Compose first.
    pause
    exit /b 1
)

REM Build the application
echo 📦 Building SSG application...
call npm run build:ssg
if errorlevel 1 (
    echo ❌ Failed to build SSG application.
    pause
    exit /b 1
)

REM Build Docker image
echo 🐳 Building Docker image...
docker build -t acorex-demo .
if errorlevel 1 (
    echo ❌ Failed to build Docker image.
    pause
    exit /b 1
)

REM Stop existing containers
echo 🛑 Stopping existing containers...
docker-compose down >nul 2>&1

REM Start the application
echo ▶️ Starting application...
docker-compose up -d
if errorlevel 1 (
    echo ❌ Failed to start application.
    pause
    exit /b 1
)

REM Wait for the application to start
echo ⏳ Waiting for application to start...
timeout /t 10 /nobreak >nul

REM Check if the application is running
echo 🔍 Checking application health...
curl -f http://localhost/health >nul 2>&1
if errorlevel 1 (
    echo ❌ Application failed to start. Check logs with: docker-compose logs
    pause
    exit /b 1
)

echo ✅ Application is running successfully!
echo 🌐 Access your application at: http://localhost
echo 🔍 Health check: http://localhost/health
echo 🎉 Deployment completed successfully!

pause
