// Başlangıçta var olan postlarımız
const posts = [
    { id: 1, title: 'İlk Post', yazar: 'Hüseyin' },
    { id: 2, title: 'İkinci Post', yazar: 'Hüseyin' },
    { id: 3, title: 'Üçüncü Post', yazar: 'Hüseyin' }
];

// Postları listeleme fonksiyonu
const listPosts = () => {
    console.log("--- Güncel Post Listesi ---");
    posts.forEach(post => {
        console.log(`${post.id}. Post: ${post.title} (Yazar: ${post.yazar})`);
    });
};

// Yeni post ekleme fonksiyonu (Asenkron yapıyı simüle etmek için Promise kullanıyoruz)
const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        console.log("\nYeni post ekleniyor, lütfen bekleyin...");
        
        // setTimeout ile 2 saniyelik gecikme yaratıp asenkron bir işlem simüle ediyoruz
        setTimeout(() => {
            posts.push(newPost);
            resolve("Başarılı: Yeni post eklendi!\n"); 
        }, 2000);
    });
};

// Async - Await yapısı ile işlemleri sıraya koyma
async function processPosts() {
    try {
        // Önce mevcutları listele
        listPosts(); 
        
        // Yeni postu ekle ve işlemin bitmesini BEKLE (await)
        const message = await addPost({ id: 4, title: 'Dördüncü Post', yazar: 'Danışman' });
        console.log(message);
        
        // Post eklendikten sonra listeyi tekrar çağırıp güncel halini görelim
        listPosts(); 
        
    } catch (error) {
        console.log("HATA YAKALANDI: ", error);
    }
}

// Sistemi çalıştır
processPosts();