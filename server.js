const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use('/dist',express.static(__dirname + '/dist/'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render(__dirname + '/pages/home');
});

app.get('/works', (req, res) => {
  res.render(__dirname + '/pages/works');
});

app.get('/services', (req, res) => {
  res.render(__dirname + '/pages/services');
});

app.get('/company', (req, res) => {
  res.render(__dirname + '/pages/about');
});

app.listen(port);
console.log(`Server is running on port: ${port}`); 