const path = require('path');
const fs = require('fs');
const dir = '../images/who/'; 

fs.readdir(dir, function(err, files) {
  if(err){
     return console.log('unable to scan directory:' + err);
  }

  let namelist = [];
  
  namelist = files.map( (file,i) => {
    return ({
      name: path.basename(file)
        .replace(/\.[^/.]+$/, "")
        .split('_')
        .map(x => x.charAt(0).toUpperCase() + x.slice(1))
        .join(' '),
      loc: path.resolve(dir + file),
      id: i
      })
    });
  

  fs.writeFile(dir + '../namelist.json', JSON.stringify(namelist), err => console.log(err));
 
})


