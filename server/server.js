var express = require('express');
var morgan = require('morgan');
var db = require('../db/config.js');
var app = express();
var request = require('request');
const rp = require('request-promise')
var co = require('co')
var path = require('path');
var bodyParser = require('body-parser');

var Promise = require('bluebird');
app.set('port', process.env.PORT || 2000);
app.use(morgan('dev'));
app.use(bodyParser.json());

var outsideRequest = require('./apiCalls.js')
var promiseOutsider = Promise.promisify(outsideRequest.getFlickerWoe);

db.dbConnection.connect(function(err) {
    if (!err) {
        console.log("Database is connected ... nn");
    } else {
        console.log("Error connecting database ... nn");
    }
});

app.use(express.static(path.join(__dirname + '/../')));

app.listen(app.get('port'), function() {
    console.log("Listening on port ", app.get('port'))
});

console.log('inside server')

app.post('/', function(req, res) {
    var request = require("request");
    console.log(req.body.city, req.body.tag, "REQ CITY TAG##############")
    var selectQuery = "select * from flicker where tag ='" + req.body.tag + "' and city ='"+req.body.city+"'";
    console.log(selectQuery);
    db.dbConnection.query(selectQuery, function(err, results) {
        if (err) {
            console.log('ERROR', err);
        } else {
            // console.log('SUCCESSSSSS', results);
            if (results.length >= 20) {
                res.json(results);
            } else {
                var options = {
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest/',
                    qs: {
                        oauth_consumer_key: '3545858eb5032abdd0032fd5d9663417',
                        oauth_signature_method: 'HMAC-SHA1',
                        oauth_timestamp: '1489035228',
                        oauth_nonce: 'L4KdFn',
                        oauth_version: '1.0',
                        oauth_signature: 'RIMv0qyVVZCubzY5Y0I4YWYWwZ8=',
                        method: 'flickr.photos.search',
                        api_key: '519bef96f3f1304e71258378481aea09',
                        tags: req.body.tag,
                        woe_id: '2459115',
                        format: 'json',
                        nojsoncallback: '1'
                    },
                    headers: {
                        'postman-token': '4849b7a9-9c9b-c91d-15d4-51ae0ee5409c',
                        'cache-control': 'no-cache'
                    }
                };

                var options2 = {
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest/',
                    qs: {
                    	oauth_consumer_key: '3545858eb5032abdd0032fd5d9663417',
                        oauth_signature_method: 'HMAC-SHA1',
                        oauth_timestamp: '1489035228',
                        oauth_nonce: 'L4KdFn',
                        oauth_version: '1.0',
                        oauth_signature: 'RIMv0qyVVZCubzY5Y0I4YWYWwZ8=',
                        method: 'flickr.photos.search',
                        method: 'flickr.places.find',
                        api_key: '519bef96f3f1304e71258378481aea09',
                        query: req.body.city,
                        format: 'json',
                        nojsoncallback: '1'
                    },
                    headers: {
                        'postman-token': '8c753d4a-c824-6244-ef0e-df9d79f4364c',
                        'cache-control': 'no-cache'
                    }
                };


                // promiseOutsider(options2).then(function(error, results){
                //     console.log('BEFORE THISISISIISIISI')
                //     console.log(results, 'PROMOMOMOMOMOMOMOMO');
                // })

                console.log(req.body.city, req.body.tag, "REQ body TAG@@@@@@@@@@@@@@@@@@")
                rp(options2).then(function(results) {
                    var r1 = JSON.parse(results)
                    options.qs.woe_id = r1.places.place[0].woeid;
                }).then(function() {
                    // console.log(options);
                    rp(options).then(function(results) {
                        // console.log(results, 'RESULTSSSSSSSSSNSNSNNSNSNNS')
                        var obj = JSON.parse(results);
                        for (var i = 0; i < obj.photos.photo.length; i++) {
                            var temp = obj.photos.photo[i];
                            var finLink = 'https://farm' + temp.farm + '.staticflickr.com/' + temp.server + '/' + temp.id + '_' + temp.secret + '.jpg';
                            var queryStr = "insert into `flicker` (`url`, `title`, `tag`,`city`) values('" + finLink + "','" + temp.title + "','" + req.body.tag + "','"+req.body.city+"')";
                            db.dbConnection.query(queryStr, function(err) {
                                if (err) {
                                    console.log('ERROR', err);
                                } else {
                                    console.log('SUCCESSSSSS');
                                }
                            });
                        }

                        var selectQuery = "select * from flicker where tag ='" + req.body.tag + "' and city ='"+req.body.city+"'";
                        // console.log(selectQuery);
                        db.dbConnection.query(selectQuery, function(err, results) {
                            if (err) {
                                console.log('ERROR', err);
                            } else {
                                console.log('SUCCESSSSSS');
                                res.json(results);
                            }
                        });

                    })
                })


            }
        }
    });
});

module.exports.app = app;