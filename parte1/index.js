var request = require('request')
var express = require('express')
var app = express()
var tokenGen = ''

app.get('/genToken', function (req, res) {
    // creamos un objeto con sus respectivos campos
    var options = {
      method: 'POST',
      url: 'https://api.softwareavanzado.world/index.php?option=token&api=oauth2', // url que nos proporciona la api
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      form: {
        grant_type: 'client_credentials',
        client_id: 'sa',
        client_secret: 'fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745'
      }
    }
  
    // enviamos la petición como un post.
    request(options, function (error, response, body) {
      if (error) throw new Error(error)
      var parseo = JSON.parse(body)
      tokenGen = parseo.access_token
      res.send(body) // retornamos el objeto devuelto por la api
    })
});

// nos hace una petición de todos los contactos haciendo uso del tokenGen
app.get('/getLista', function (req, res) {
    console.log(tokenGen)
    var options = {
      method: 'GET',
      url: 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal&filter[search]=201314412', // url dada por la api
      headers: { Authorization: 'Bearer ' + tokenGen }
    }
  
    request(options, function (error, response, body) {
      if (error) throw new Error(error)
      //res.send(body); //retorno de lista completa
      //let b = JSON.parse(body);
      //console.log(b._embedded.item);
      res.send(body);
    });
});

app.get('/crearClientes', function (req, res) {
  for (let index = 1; index <= 10; index++) {
    var options = {
      method: 'POST',
      url: 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal',
      headers: { 'content-type': 'application/application/x-www-form-urlencoded', Authorization: 'Bearer ' + tokenGen },
      form: {
        name: '201314412 - parte1 - contacto ' + index
      }
    }
    request(options, function (error, response, body) {
      if (error) throw new Error(error)
    })
  }
  res.send('Contactos creados exitosamente!');
})


app.listen(3000, function () {
    console.log('app listening on http://localhost:3000/');
});
  