const fs = require('fs');
let packageJson = JSON.parse(fs.readFileSync('package.json').toString());

delete packageJson.dependencies;
delete packageJson.devDependencies;
delete packageJson.scripts;
delete packageJson.tests;

fs.writeFileSync('dist/package.json', JSON.stringify(packageJson, null, 2));
