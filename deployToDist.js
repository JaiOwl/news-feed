const shelljs = require('shelljs');

shelljs.cp('-rf', 'server/dist/*', 'dist/');
shelljs.cp('-rf', 'server/dist/.*', 'dist/');
shelljs.cp('.env.config', 'dist/.env');

// Install Production
shelljs.cd('dist');
shelljs.exec('npm install --production');
shelljs.cd('../');

// Copy Client to Hosted directory
shelljs.cp('-rf', 'client/dist', 'dist/public');
shelljs.cp('-rf', 'server/views', 'dist/views');
