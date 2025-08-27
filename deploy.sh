#!/bin/bash

# ACoreX Demo SSG Deployment Script
# این اسکریپت برای دیپلوی SSG application استفاده می‌شه

set -e

echo "🚀 Starting ACoreX Demo SSG Deployment..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if docker-compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Build the application
echo "📦 Building SSG application..."
npm run build:ssg

# Build Docker image
echo "🐳 Building Docker image..."
docker build -t acorex-demo .

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose down 2>/dev/null || true

# Start the application
echo "▶️ Starting application..."
docker-compose up -d

# Wait for the application to start
echo "⏳ Waiting for application to start..."
sleep 10

# Check if the application is running
if curl -f http://localhost/health >/dev/null 2>&1; then
    echo "✅ Application is running successfully!"
    echo "🌐 Access your application at: http://localhost"
    echo "🔍 Health check: http://localhost/health"
else
    echo "❌ Application failed to start. Check logs with: docker-compose logs"
    exit 1
fi

echo "🎉 Deployment completed successfully!"
