const fs = require('fs');
const path = require('path');

function removeDirRecursive(pathname) {
  if(fs.existsSync(pathname)) {
    fs.readdirSync(pathname).forEach( (file, idx) => {
      let curPath = path.join(pathname, file);
      if(fs.lstatSync(curPath).isDirectory()) {
        removeDirRecursive(curPath)
      } else {
        fs.unlinkSync(curPath);
      }
    } );
    fs.rmdirSync(pathname);
  }
}

function getDirname() {
  let cwd = process.cwd();
  return cwd.split(path.sep).pop();
}

let resetConf = {
  "name": getDirname(),
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "repository": {},
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {},
  "homepage": ""
};
let appConf = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
appConf.scripts.setup = 'echo \"Project has already been setup, you have to run \'npm install\' before writing your codes\" && exit 1';
let packageJson = Object.assign({}, appConf, resetConf);

// Generate new package.json
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf8');

// Remove .git directory
removeDirRecursive('.git');

// Remove LICENSE file
fs.unlinkSync('LICENSE');

// Remove self
fs.unlinkSync(__filename);
