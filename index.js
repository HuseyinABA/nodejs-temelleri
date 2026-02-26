// circle.js dosyasındaki fonksiyonları object destructuring ile içeri aktarıyoruz
const { circleArea, circleCircumference } = require('./circle');

const r = 5; // Yarıçapı 5 olarak belirliyoruz

// Fonksiyonları çalıştırıyoruz
circleArea(r);
circleCircumference(r);