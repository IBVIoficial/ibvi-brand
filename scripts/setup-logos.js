const https = require('https');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuração dos logos
const logos = [
  {
    name: 'ibvi-logo-primary',
    url: 'https://ik.imagekit.io/xybwnx8js/ibvi/brand/ibvi-previa-4.png',
    description: 'Primary logo for light backgrounds'
  },
  {
    name: 'ibvi-logo-dark',
    url: 'https://ik.imagekit.io/xybwnx8js/ibvi/brand/ibvi-previa-4-dark.png',
    description: 'Logo variant for dark backgrounds'
  },
  {
    name: 'ibvi-logo-mono',
    url: 'https://ik.imagekit.io/xybwnx8js/ibvi/brand/ibvi-previa-4-mono.png',
    description: 'Monochromatic version for single color applications'
  },
  {
    name: 'ibvi-logo-mono-dark',
    url: 'https://ik.imagekit.io/xybwnx8js/ibvi/brand/ibvi-previa-4-dark-mono.png',
    description: 'Dark monochromatic version'
  }
];

// Criar diretórios necessários
const createDirectories = () => {
  const dirs = [
    'assets/logo/png',
    'assets/logo/svg',
    'assets/logo/webp',
    'assets/logo/ico'
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
  });
};

// Download de arquivo
const downloadFile = (url, destination) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${path.basename(destination)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destination, () => {});
      reject(err);
    });
  });
};

// Função principal
const setupLogos = async () => {
  console.log('🎨 Setting up IBVI logos...\n');
  
  // Criar estrutura de diretórios
  createDirectories();
  
  // Download dos logos
  for (const logo of logos) {
    const pngPath = `assets/logo/png/${logo.name}.png`;
    
    try {
      // Baixar PNG original
      await downloadFile(logo.url, pngPath);
      
      // Nota: Conversões para SVG e outros formatos devem ser feitas manualmente
      // ou com ferramentas específicas após o download
      
    } catch (error) {
      console.error(`❌ Error downloading ${logo.name}:`, error.message);
    }
  }
  
  console.log('\n✨ Logo setup complete!');
  console.log('📝 Next steps: Convert PNGs to SVG format using design tools');
};

// Executar
setupLogos().catch(console.error);