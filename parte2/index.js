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
    var params = {
        method: 'GET',
        url: 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap',
        headers: {
        Authorization: 'Basic c2E6dXNhYw==',
            'Content-Type': 'application/xml'
        },
        body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <adm:readList>\r\n         <limit>0</limit>\r\n         <!--Optional:-->\r\n         <filterSearch>201314412</filterSearch>\r\n      </adm:readList>\r\n   </soap:Body>\r\n</soap:Envelope>'

    }
    request(params, function (error, response) {
        if (error) throw new Error(error)
        res.send(response.body) // manda el objeto conteniendo todos los contactos que posean 201314285 en su nombre
    })
});

app.get('/crearClientes', function (req, res) {
    for (let index = 1; index <= 10; index++) {
        var options = {
          method: 'GET',
          url: 'https://api.softwareavanzado.world/administrator/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=soap',
          headers: {
            Authorization: 'Basic c2E6dXNhYw==',
            'Content-Type': 'application/xml'
          },
          body: '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">\r\n   <soap:Header/>\r\n   <soap:Body>\r\n      <adm:create>\r\n         <name>201314412 - parte2 - contacto ' + index + '</name>\r\n      </adm:create>\r\n   </soap:Body>\r\n</soap:Envelope>'
    
        }
        request(options, function (error, response) {
          if (error) throw new Error(error)
          console.log(response.body)
        })
      }
      res.send('Contactos creados exitosamente!');
})


app.listen(3000, function () {
    console.log('app listening on http://localhost:3000/');
});
  