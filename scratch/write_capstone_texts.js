const fs = require('fs');
const content = fs.readFileSync('/Users/adi/Desktop/Aditya\'s Portfolio/src/assets/bundle.js', 'utf8');

const targets = {
  "gold-prediction": "KM=",
  "titanic-prediction": "qM=",
  "streamverse-etl": "YM=",
  "financial-market": "QM=",
  "simple-threads": "JM="
};

const result = {};

for (const [key, target] of Object.entries(targets)) {
  const idx = content.indexOf(target);
  if (idx !== -1) {
    // Extract a large chunk of text around the component
    result[key] = content.substring(idx, idx + 12000);
  } else {
    result[key] = "NOT_FOUND";
  }
}

fs.writeFileSync('/Users/adi/Desktop/Aditya\'s Portfolio/scratch/capstone_data.json', JSON.stringify(result, null, 2), 'utf8');
console.log("Successfully wrote capstone_data.json!");
