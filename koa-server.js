const Koa = require('koa');
const app = new Koa();

const port = 3000;

// Koa'da işlemler 'ctx' (context) üzerinden yürütülür.
app.use(ctx => {
    const url = ctx.url;
    
    // Türkçe karakter sorunu yaşamamak için tip ve dil ayarı
    ctx.type = 'text/html; charset=utf-8';

    if (url === '/' || url === '/index') {
        ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>';
    } else if (url === '/hakkimda') {
        ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
    } else if (url === '/iletisim') {
        ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
    } else {
        ctx.status = 404;
        ctx.body = '<h1>404 - Sayfa Bulunamadı</h1>';
    }
});

app.listen(port, () => {
    console.log(`Koa.js sunucusu port ${port} üzerinde başlatıldı.`);
});