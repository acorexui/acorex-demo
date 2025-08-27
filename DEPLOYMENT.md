# راهنمای دیپلوی SSG Application

## 🚀 روش‌های دیپلوی

### 1. Docker (توصیه شده)

#### با Docker Compose:

```bash
# Build و اجرای اپلیکیشن
docker-compose up -d

# مشاهده لاگ‌ها
docker-compose logs -f

# توقف اپلیکیشن
docker-compose down
```

#### با Docker مستقیم:

```bash
# Build کردن image
docker build -t acorex-demo .

# اجرای container
docker run -d -p 80:80 --name acorex-demo acorex-demo

# مشاهده لاگ‌ها
docker logs -f acorex-demo

# توقف container
docker stop acorex-demo
```

### 2. Docker با Volume (برای development)

```bash
# Build کردن image
docker build -t acorex-demo .

# اجرا با volume برای تغییرات سریع
docker run -d -p 80:80 -v $(pwd)/dist/acorex-demo/browser:/usr/share/nginx/html --name acorex-demo acorex-demo
```

### 3. Local Development

```bash
# Build کردن SSG
npm run build:ssg

# اجرای local server
npm run serve:ssg
```

## 🔧 تنظیمات Docker

### Dockerfile تغییرات:

- **قبل**: SSR با Node.js
- **بعد**: SSG با Nginx

### مزایای جدید:

- **سرعت بیشتر**: Static files سریع‌تر لود می‌شن
- **مصرف کمتر**: Nginx کمتر از Node.js منابع مصرف می‌کنه
- **امنیت بیشتر**: Nginx security headers اضافه شده
- **کش بهتر**: Static assets برای 1 سال کش می‌شن

## 📊 Performance

### قبل از SSG:

- SSR: ~200-500ms response time
- Node.js memory: ~100-200MB
- CPU usage: متوسط

### بعد از SSG:

- Static files: ~10-50ms response time
- Nginx memory: ~10-20MB
- CPU usage: کم

## 🛠️ Troubleshooting

### مشکل: Container start نمی‌شه

```bash
# چک کردن لاگ‌ها
docker logs acorex-demo

# چک کردن port
docker ps -a
```

### مشکل: فایل‌ها لود نمی‌شن

```bash
# چک کردن build
docker exec -it acorex-demo ls -la /usr/share/nginx/html

# چک کردن nginx config
docker exec -it acorex-demo nginx -t
```

### مشکل: Route ها کار نمی‌کنن

```bash
# چک کردن nginx error logs
docker exec -it acorex-demo tail -f /var/log/nginx/error.log
```

## 🔍 Monitoring

### Health Check:

```bash
# تست health endpoint
curl http://localhost/health
```

### Performance Monitoring:

```bash
# مشاهده nginx access logs
docker exec -it acorex-demo tail -f /var/log/nginx/access.log

# مشاهده nginx error logs
docker exec -it acorex-demo tail -f /var/log/nginx/error.log
```

## 📝 Environment Variables

### Production:

```bash
export NODE_ENV=production
```

### Development:

```bash
export NODE_ENV=development
```

## 🔒 Security

### Security Headers اضافه شده:

- `X-Frame-Options`: جلوگیری از clickjacking
- `X-XSS-Protection`: XSS protection
- `X-Content-Type-Options`: جلوگیری از MIME sniffing
- `Referrer-Policy`: کنترل referrer information
- `Content-Security-Policy`: کنترل resource loading

## 📈 Optimization

### Caching Strategy:

- **Static Assets**: 1 سال
- **HTML Files**: 1 ساعت
- **API Responses**: بر اساس نیاز

### Compression:

- **Gzip**: فعال برای همه فایل‌های متنی
- **Compression Level**: 6 (بهینه)

## 🚀 Production Deployment

### با Docker Swarm:

```bash
# Deploy به swarm
docker stack deploy -c docker-compose.yml acorex-demo
```

### با Kubernetes:

```bash
# Apply deployment
kubectl apply -f k8s-deployment.yaml
```

### با Cloud Platforms:

- **AWS**: ECS یا EKS
- **Google Cloud**: GKE یا Cloud Run
- **Azure**: AKS یا Container Instances

## 📞 Support

برای مشکلات بیشتر:

1. چک کردن Docker logs
2. چک کردن nginx configuration
3. تست کردن health endpoint
4. بررسی network connectivity
