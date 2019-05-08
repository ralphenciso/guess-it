const path = require('path');
const fs = require('fs');
const dir = './public/images/who/'; 
let nameList;

function getList(){
  fs.readdir(dir, createList);
  return nameList;
}


function createList(err, files) {
  if(err){
    return console.log('unable to scan directory:' + err);
  }

  nameList = files.map(mapfiles);

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
    loc: path.resolve(dir + file),
    id: i
  };
};

module.exports = {
  getList
};





