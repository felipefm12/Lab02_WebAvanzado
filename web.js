const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/Nosotros', function(req, res) {
  res.sendFile(__dirname + '/Nosotros.html');
});

app.get('/NuestrosServicios', function(req, res) {
  res.sendFile(__dirname + '/NuestrosServicios.html');
});

app.get('/Contacto', function(req, res) {
  res.sendFile(__dirname + '/Contacto.html');
});

app.post('/Contacto', function(req, res) {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const email = req.body.email;
  const numero = req.body.numero;
  const mensaje = req.body.mensaje;

  
  res.render('Mensaje.ejs', { nombre: nombre, apellido: apellido, email: email, numero: numero, mensaje: mensaje });

});

app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/404.html');
});

app.listen(8080);
