// Daire Alanı Hesaplama Fonksiyonu
function circleArea(r) {
    const area = Math.PI * r * r;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area.toFixed(2)}`);
}

// Daire Çevresi Hesaplama Fonksiyonu
function circleCircumference(r) {
    const circumference = 2 * Math.PI * r;
    console.log(`Yarıçapı ${r} olan dairenin çevresi: ${circumference.toFixed(2)}`);
}

// Fonksiyonları dışarı aktarma (export)
module.exports = {
    circleArea,
    circleCircumference
}