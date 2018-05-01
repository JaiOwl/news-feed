const fs = require('fs');
const shelljs = require('shelljs');
const packageJson = require('./package.json');

// generate production package.json
const prodPackageJson = {...packageJson};
prodPackageJson.main = 'index.js';
delete prodPackageJson.scripts;
delete prodPackageJson.devDependencies;
delete prodPackageJson.babel;
delete prodPackageJson.eslintConfig;
delete prodPackageJson.jest;
prodPackageJson.scripts = { 'start': 'node -r dotenv/config index.js' };

fs.writeFileSync(
    'dist/package.json',
    JSON.stringify(prodPackageJson, null, 2),
    'utf8'
);

shelljs.cp('package-lock.json', 'dist/');
shelljs.cp('.env.config', 'dist/');
