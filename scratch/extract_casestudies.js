const fs = require('fs');
const content = fs.readFileSync('/Users/adi/Desktop/Aditya\'s Portfolio/src/assets/bundle.js', 'utf8');

// Lv= is Nurture, FM= is Zoom
const targets = {
  "nurture": "Lv=",
  "zoom": "FM="
};

for (const [key, target] of Object.entries(targets)) {
  const idx = content.indexOf(target + "()=>");
  if (idx !== -1) {
    const chunk = content.substring(idx, idx + 25000);
    fs.writeFileSync(`/Users/adi/Desktop/Aditya's Portfolio/scratch/${key}_raw.txt`, chunk, 'utf8');
    console.log(`Wrote ${key}_raw.txt (${chunk.length} chars)`);
  } else {
    console.log(`${key}: NOT FOUND with =>`)
    // Try without =>
    const idx2 = content.indexOf(target);
    if (idx2 !== -1) {
      const chunk2 = content.substring(idx2, idx2 + 25000);
      fs.writeFileSync(`/Users/adi/Desktop/Aditya's Portfolio/scratch/${key}_raw.txt`, chunk2, 'utf8');
      console.log(`Wrote ${key}_raw.txt (${chunk2.length} chars)`);
    }
  }
}
