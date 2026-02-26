const arguments = process.argv.slice(2);
const sayi1 = parseInt(arguments[0]);
const sayi2 = parseInt(arguments[1]);

function asalSayilariBul(ilkSayi, ikinciSayi) {
    console.log(`${ilkSayi} ile ${ikinciSayi} arasındaki asal sayılar:`);
    
    for (let i = ilkSayi; i <= ikinciSayi; i++) {
        let asalMi = true;
        
        if (i <= 1) continue; 
        
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                asalMi = false;
                break;
            }
        }
        
        if (asalMi) {
            console.log(i);
        }
    }
}

asalSayilariBul(sayi1, sayi2);