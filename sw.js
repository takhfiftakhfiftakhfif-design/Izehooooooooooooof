const CACHE_NAME = 'izeh-off-v1';

self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (event) => {
    // اینجا می‌توانید کدی برای کارکرد آفلاین اضافه کنید
    event.respondWith(fetch(event.request));
});
