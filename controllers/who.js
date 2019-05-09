const path = require('path');
const fs = require('fs');
const dir = './public/images/who/'; 

function getList(){
  return fs.readdirSync(dir).map(mapfiles);
  //  fs.writeFile(dir + '../namelist.json', JSON.stringify(nameList), err => err ? 'namelist not saved' + err : '');
}

     
function mapfiles(file, i) {
  return {
    name: path
      .basename(file)
      .replace(/\.[^/.]+$/, '')
      .split('_')
      .map(x => x.charAt(0).toUpperCase() + x.slice(1))
      .join(' '),
    loc: './images/who/' + file,
    id: i
  };
};

module.exports = {
  getList
};





