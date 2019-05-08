const express = require('express');
const app = express();
const port = process.env.port || 3000;
const path = require('path');
const util = require('./util/utility');
const who = require('./controllers/who');
console.log(who.getList());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server started, listening in port ${port}`);
});

app.get('/', (req, res) => res.redirect('home.html'));

// app.get('/getlist', (req,res) => {
//   res.send('test')
// })

app.get('/getlist', (req,res) => {
  let length = req.length || 10;
  let nameList = who.getNameList;
  console.log(nameList);
  // let listcount = nameList.length;
  
  
  // let randIndex =  (length >= listcount) ? util.randindex( listcount) : util.randindex(length, listcount) ;
  
  // let randList = randIndex.map(v => nameList[v]);
  
  
  // res.send(randList);
  res.send('test');
})

