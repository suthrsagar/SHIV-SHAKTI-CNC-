const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'images');
const files = fs.readdirSync(imageDir).filter(file =>
  ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())
);

let htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Image Gallery</title>
  <style>
    body { font-family: Arial; text-align: center; background: #f0f0f0; }
    .gallery { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; padding: 20px; }
    .gallery img { width: 200px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.2); }
  </style>
</head>
<body>
  <h1>Auto Image Gallery</h1>
  <div class="gallery">
`;

files.forEach(file => {
  htmlContent += `<img src="images/${file}" alt="${file}">\n`;
});

htmlContent += `
  </div>
</body>
</html>
`;

fs.writeFileSync('view.html', htmlContent);
console.log('✅ index.html generated successfully!');
