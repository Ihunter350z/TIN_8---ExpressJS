var express = require('express');
var app = express();
let path = require('path');
let bodyParser = require('body-parser');


app.get('/hello', function (req, res) {
  res.send('hello world');
});

app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/form.html'));
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/formdata', (req, res) => {
  res.render('formdata', { Name: req.body.name, Password: req.body.password, Age: req.body.age });
});

app.use(bodyParser.json())
app.post('/jsondata', (req, res) => {
    res.render('jsondata.ejs', { people: req.body.persons });
});

app.listen(3000);

