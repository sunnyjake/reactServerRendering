var express = require('express');

var app = express();

app.use('/', express.static(__dirname.concat('/public/')));

app.get('/page/:page', function(request, response){
  var data = 'some text';
  response.header('Content-Type': 'application/json');
  response.end(data);
});

app.listen(8080, function(){
  console.log('Server runs on localhost:8080');
});
