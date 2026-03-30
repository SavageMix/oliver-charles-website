const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/images/projects/project-18';
const files = fs.readdirSync(inputDir)
  .filter(f => /\.(jpe?g|png)$/i.test(f))
  .sort();

console.log('Found files:', files);

(async () => {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(inputDir, file);
    const outputName = `composite-decking-stokenchurch-${i + 1}.jpg`;
    const outputPath = path.join(inputDir, outputName);
    
    try {
      const info = await sharp(inputPath)
        .resize(1600, 1200, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputPath);
      
      console.log(`Optimized ${file} -> ${outputName} (${info.width}x${info.height}, ${Math.round(info.size / 1024)}KB)`);
      
      if (file !== outputName) {
        fs.unlinkSync(inputPath);
        console.log(`Deleted original ${file}`);
      }
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
})();
