const express = require('express');
const app = express();
const port = process.env.port || 3000;
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.redirect('home.html'));

app.listen(port, () => {
  console.log(`server started, listening in port ${port}`);
});
