const fs = require('fs');

// CREATE (Dosya oluşturma ve veriyi yazma)
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log("Dosya oluşturulurken hata:", err);
    console.log("Dosya başarıyla oluşturuldu ve veri eklendi (CREATE).");

    // READ (Dosyayı okuma - Create işlemi bittikten sonra çalışır)
    fs.readFile('employees.json', 'utf8', (err, data) => {
        if (err) console.log("Dosya okunurken hata:", err);
        console.log("Dosyadaki veri okundu (READ):", data);

        // UPDATE (Dosyayı güncelleme - Read işlemi bittikten sonra çalışır)
        // JSON formatını bozmamak için üzerine yeni veriyi yazarak güncelliyoruz
        fs.writeFile('employees.json', '{"name": "Employee 1 Name Updated", "salary": 3500}', 'utf8', (err) => {
            if (err) console.log("Dosya güncellenirken hata:", err);
            console.log("Dosyadaki veri güncellendi (UPDATE).");

            // DELETE (Dosyayı silme - Update işlemi bittikten sonra çalışır)
            fs.unlink('employees.json', (err) => {
                if (err) console.log("Dosya silinirken hata:", err);
                console.log("Dosya başarıyla silindi (DELETE).");
            });
        });
    });
});