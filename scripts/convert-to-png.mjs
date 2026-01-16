import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename } from 'path';
import { existsSync } from 'fs';

const BRAND_DIR = './public/brand';

// Define output sizes for different asset types
const sizeConfig = {
  logos: [
    { suffix: '', scale: 1 },      // Original size
    { suffix: '@2x', scale: 2 },   // Retina
    { suffix: '@3x', scale: 3 },   // High DPI
  ],
  icons: [
    { suffix: '', scale: 1 },
  ],
  avatars: [
    { suffix: '', scale: 1 },
    { suffix: '@2x', scale: 2 },
  ],
  banners: [
    { suffix: '', scale: 1 },
    { suffix: '@2x', scale: 2 },
  ],
  badges: [
    { suffix: '', scale: 1 },
    { suffix: '@2x', scale: 2 },
  ],
};

// Base dimensions for SVGs (will be parsed from viewBox)
const baseDimensions = {
  'logos': { width: 120, height: 80 },
  'icons': { width: 32, height: 32 },
  'avatars': { width: 400, height: 400 },
  'banners': { width: 1200, height: 630 },
  'badges': { width: 120, height: 32 },
};

// Specific dimensions for files with different sizes
const specificDimensions = {
  's3-logo-full.svg': { width: 320, height: 80 },
  's3-logo-full-light.svg': { width: 320, height: 80 },
  's3-logo-wordmark.svg': { width: 160, height: 40 },
  'favicon-16.svg': { width: 16, height: 16 },
  'favicon-32.svg': { width: 32, height: 32 },
  'favicon-mono.svg': { width: 32, height: 32 },
  'apple-touch-icon.svg': { width: 180, height: 180 },
  'icon-192.svg': { width: 192, height: 192 },
  'icon-512.svg': { width: 512, height: 512 },
  'avatar-square-sm.svg': { width: 64, height: 64 },
  'avatar-circle-sm.svg': { width: 64, height: 64 },
  'og-image.svg': { width: 1200, height: 630 },
  'twitter-header.svg': { width: 1500, height: 500 },
  'github-social.svg': { width: 1280, height: 640 },
  'linkedin-banner.svg': { width: 1584, height: 396 },
  'email-signature.svg': { width: 600, height: 150 },
  'powered-by.svg': { width: 180, height: 40 },
};

async function convertSvgToPng(svgPath, pngPath, width, height) {
  try {
    await sharp(svgPath, { density: 300 })
      .resize(width, height)
      .png()
      .toFile(pngPath);
    console.log(`✓ ${pngPath}`);
  } catch (error) {
    console.error(`✗ ${pngPath}: ${error.message}`);
  }
}

async function processDirectory(dirName) {
  const dirPath = join(BRAND_DIR, dirName);
  const pngDir = join(dirPath, 'png');

  // Create png subdirectory
  if (!existsSync(pngDir)) {
    await mkdir(pngDir, { recursive: true });
  }

  const files = await readdir(dirPath);
  const svgFiles = files.filter(f => f.endsWith('.svg'));

  const scales = sizeConfig[dirName] || [{ suffix: '', scale: 1 }];

  for (const file of svgFiles) {
    const svgPath = join(dirPath, file);
    const baseName = basename(file, '.svg');

    // Get dimensions
    const dims = specificDimensions[file] || baseDimensions[dirName] || { width: 100, height: 100 };

    for (const { suffix, scale } of scales) {
      const width = Math.round(dims.width * scale);
      const height = Math.round(dims.height * scale);
      const pngPath = join(pngDir, `${baseName}${suffix}.png`);

      await convertSvgToPng(svgPath, pngPath, width, height);
    }
  }
}

async function main() {
  console.log('Converting SVG assets to PNG...\n');

  const directories = ['logos', 'icons', 'avatars', 'banners', 'badges'];

  for (const dir of directories) {
    console.log(`\n📁 ${dir}/`);
    await processDirectory(dir);
  }

  console.log('\n✅ Conversion complete!');
}

main().catch(console.error);
