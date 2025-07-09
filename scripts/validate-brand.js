#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating IBVI Brand Repository...\n');

const requiredFiles = [
  'README.md',
  'LICENSE',
  'LICENSE-ASSETS.md',
  'package.json',
  '.gitignore',
  'CONTRIBUTING.md',
  'CHANGELOG.md'
];

const requiredDirs = [
  'assets/logo',
  'assets/fonts',
  'components/react',
  'tokens',
  'docs/manual'
];

let errors = 0;

// Check files
requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing required file: ${file}`);
    errors++;
  } else {
    console.log(`✅ Found: ${file}`);
  }
});

// Check directories
requiredDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Missing required directory: ${dir}`);
    errors++;
  } else {
    console.log(`✅ Found: ${dir}`);
  }
});

if (errors === 0) {
  console.log('\n✨ All validations passed!');
  process.exit(0);
} else {
  console.error(`\n❌ Found ${errors} issues. Please fix them.`);
  process.exit(1);
}