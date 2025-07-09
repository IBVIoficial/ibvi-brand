const fs = require('fs');
const path = require('path');
const sharp = require('sharp'); // Precisa instalar: npm install sharp

const sizes = [16, 32, 48, 64, 96, 128, 256, 512];
const logoDir = 'assets/logo';

const optimizeLogos = async () => {
  console.log('🎨 Optimizing logos...\n');
  
  // Criar diretório de tamanhos
  const sizesDir = path.join(logoDir, 'sizes');
  if (!fs.existsSync(sizesDir)) {
    fs.mkdirSync(sizesDir, { recursive: true });
  }
  
  // Processar cada logo PNG
  const pngFiles = fs.readdirSync(path.join(logoDir, 'png'))
    .filter(file => file.endsWith('.png'));
  
  for (const file of pngFiles) {
    const inputPath = path.join(logoDir, 'png', file);
    const baseName = path.basename(file, '.png');
    
    console.log(`Processing: ${file}`);
    
    // Gerar diferentes tamanhos
    for (const size of sizes) {
      const outputPath = path.join(sizesDir, `${baseName}-${size}x${size}.png`);
      
      try {
        await sharp(inputPath)
          .resize(size * 3.4, size, { // Mantém proporção do logo
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .png({ quality: 90 })
          .toFile(outputPath);
          
        console.log(`  ✅ Created: ${size}x${size}`);
      } catch (error) {
        console.error(`  ❌ Error creating ${size}x${size}:`, error.message);
      }
    }
    
    // Criar versão WebP
    const webpPath = path.join(logoDir, 'webp', `${baseName}.webp`);
    try {
      await sharp(inputPath)
        .webp({ quality: 90 })
        .toFile(webpPath);
      console.log(`  ✅ Created WebP version`);
    } catch (error) {
      console.error(`  ❌ Error creating WebP:`, error.message);
    }
  }
  
  // Criar favicon
  console.log('\nCreating favicon...');
  try {
    await sharp(path.join(logoDir, 'png', 'ibvi-logo-primary.png'))
      .resize(32, 32)
      .toFile(path.join(logoDir, 'ico', 'favicon-32x32.png'));
    
    await sharp(path.join(logoDir, 'png', 'ibvi-logo-primary.png'))
      .resize(16, 16)
      .toFile(path.join(logoDir, 'ico', 'favicon-16x16.png'));
      
    console.log('✅ Favicon created');
  } catch (error) {
    console.error('❌ Error creating favicon:', error.message);
  }
  
  console.log('\n✨ Optimization complete!');
};

// Executar se chamado diretamente
if (require.main === module) {
  optimizeLogos().catch(console.error);
}

module.exports = { optimizeLogos };