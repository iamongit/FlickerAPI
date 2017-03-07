
var express = require('express');
var morgan = require('morgan'); 
var app = express();
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
app.set('port', process.env.PORT || 2000);
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/../')));

app.listen(app.get('port'), function(){
	console.log("Listening on port ", app.get('port'))
});

app.post('/',function(req,res){
	var request = require("request");

var options = { method: 'GET',
  url: 'https://api.flickr.com/services/rest/',
  qs: 
   { method: 'flickr.photos.search',
     api_key: 'abf53b7689c97eb14f4f0e35c32cbb27',
     tags: req.body.tag,
     woe_id: '2459115',
     format: 'json',
     nojsoncallback: '1' },
  headers: 
   { 'postman-token': '4849b7a9-9c9b-c91d-15d4-51ae0ee5409c',
     'cache-control': 'no-cache' } 
 };
 
  request(options, function (error, response, body) {
	  if (error){
	  	throw new Error(error);
	  	console.log('error', error)
	  }
	  // console.log(body, 'body');
	  res.json(body);
  });

  // res.end("yes");
});

module.exports.app = app;