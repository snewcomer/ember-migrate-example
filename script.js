'use strict';

const path = require("path");
const fs = require("fs");

const dir = 'translations';

let locales = fs.readdirSync(path.join('app', 'locales'));
locales.forEach((localeName) => {
  let content = fs.readFileSync(path.join('app', 'locales', locales[0], 'translations.js'), 'utf8');
  let obj = new Function(content.replace('export default', 'return'))();
  let json = JSON.stringify(obj);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(path.join(dir, `${localeName}.json`), JSON.stringify(obj), 'utf8');
});

module.exports = function transformValues(obj) {
// compressed
Object.keys(obj).forEach(key => {
  let value = obj[key]
  obj[key] = value.replace('')
});
}

function walk(obj) {

}

