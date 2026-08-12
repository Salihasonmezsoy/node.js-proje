const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'Urunler.json');

function urunleriOku() {
  try{
    if(!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf-8');
      return [];
    }
    const okunan = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(okunan || '[]');
  }catch (error) {
    console.error('Hata oluştu:', error);
    return [];
  }
}


function urunKaydet(urun) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(urun, null, 2), 'utf-8');
  } catch (error) {
    console.error('Hata oluştu:', error);
  }
}

module.exports = {
  urunleriOku,
  urunKaydet
};
