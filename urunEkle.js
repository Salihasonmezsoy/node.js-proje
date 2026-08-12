const {urunleriOku, urunKaydet} = require('./db');

function urunEkle(no, isim, miktar, fiyat) {
  const urunler = urunleriOku();
  const olanUrun = urunler.find(urun => urun.no === no);
  const miktarSayi = Number(miktar);
  if (olanUrun) {
    olanUrun.stok += miktarSayi;
    console.log(`Ürün güncellendi: ${olanUrun.isim}, Fiyat: ${fiyat}, Yeni Stok: ${olanUrun.stok}`);
  } else {
    console.log(`Yeni ürün ekleniyor: ${isim}, Fiyat: ${fiyat}, Stok: ${miktarSayi}`);
    const yeniUrun = {
      no: no,
      isim: isim,
      stok: miktarSayi,
      fiyat: fiyat
    };
    urunler.push(yeniUrun);
    console.log(`Yeni ürün eklendi: ${yeniUrun.isim}, Fiyat: ${yeniUrun.fiyat}, Stok: ${yeniUrun.stok}`);
  }
  urunKaydet(urunler);
}

module.exports = urunEkle;