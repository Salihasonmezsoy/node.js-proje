const {urunleriOku} = require('./db');
const urunEkle = require('./urunEkle');

function urunVarMi(isim) {
  const urun = urunleriOku();
  const mevcutUrun = urun.find(urun => urun.isim === isim);

  if(mevcutUrun){
    console.log(`Ürün mevcut: ${mevcutUrun.isim}, No: ${mevcutUrun.no}, Stok: ${mevcutUrun.stok}\n`);
    console.log(`-------------------------------\n`);
  }
  else {
    console.log(`${isim} bulunamadı`);
    console.log(`-------------------------------\n`);
  }
}

function tumUrunleriYazdir() {
  const urunler = urunleriOku();
  if(urunler.length === 0) {
    console.log('Listenizde ürün yok\n');
    console.log(`-------------------------------\n`);
    return;
  }
  else{
    console.log('TÜM ÜRÜNLER:\n');
    urunler.forEach(urun => {
     console.log(`Ürün: ${urun.isim}, No: ${urun.no}, Fiyat: ${urun.fiyat}, Stok: ${urun.stok}\n`);
    });
    console.log(`-------------------------------\n`);
  }
}

urunVarMi('Telefon');
urunEkle(1, 'Laptop', 10, 50000);
urunEkle(2, 'Mouse', 20, 300);
urunEkle(3, 'Klavye', 15, 1500);
urunVarMi('Laptop');
tumUrunleriYazdir();
urunEkle(1, 'Laptop', 5, 50000);
tumUrunleriYazdir();
