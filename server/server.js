
var express = require('express');
var morgan = require('morgan'); 
var app = express();
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
app.set('port', 2000);
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/../')));

app.listen(app.get('port'), function(){
	console.log("Listening on port ", app.get('port'))
});

app.post('/',function(req,res){
	var options = { method: 'GET',
	  url: 'https://api.flickr.com/services/rest/',
	  qs:
	   { method: 'flickr.photos.search',
	     api_key: 'abf53b7689c97eb14f4f0e35c32cbb27',
	     tags: 'timessquare',
	     woe_id: '2459115',
	     format: 'json',
	     nojsoncallback: '1',
	     auth_token: '72157681113405355-4a8536f965eb4533',
	     api_sig: 'aa8c8fe2808794d0e01b523056ea898d' },
	  headers:
	   { 'postman-token': 'b625ac6b-e54b-c9ba-4a3f-24701f627f0f',
	     'cache-control': 'no-cache',
	     woe_id: '2459115',
	     api_key: 'abf53b7689c97eb14f4f0e35c32cbb27' } 
	 };
 
  options.qs.tags = req.body.tag;
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



// var result = [];
// request(options, function (error, response, body) {
//   if (error){
//   	throw new Error(error);
//   	console.log('error', error)
//   }
//   result.push(body);
//   // console.log(result, 'resulttt');
// });
// // console.log(result, 'resulttt');



module.exports.app = app;