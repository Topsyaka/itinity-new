const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use('/dist',express.static(__dirname + '/dist/'));

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/home.html');
});

app.get('/works', (req, res) => {
  res.sendfile(__dirname + '/works.html');
});

app.listen(process.env.PORT || 5000);