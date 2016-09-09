
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var request = require('request');

var app = express();

app.use(bodyParser.urlencoded({
	extended: false
}));


// app.use(express.static('public'));

// mongoose.connect('mongodb://localhost/w');

// var db = mongoose.connection;

// db.on('error', function(err){
// 	console.log('Mongoose Error: ', err);
// });

// db.once('open', function(){
// 	console.log('Mongoose connection successful.');
// });


// var Story = require('./models/Story.js');
// var User = require('./models/User.js');


//Routes

app.get('/', function(req, res){
	res.send(index.html);
});

//Get request to scrape

// app.get('/scrape', function(req, res){
// 	request('url',function(error,response,html){
// 		var $ = cheerio.load(html);

// 		$('').each(function(i, element){
// 			var result = {};

// 			result.title = $(this).children('').text();
// 			result.link = $(this).children('').attr('href');
// 			var entry = new Story(result);


// 			entry.save(function(err,doc){
// 				if(err){
// 					console.log(err);
// 				}else{
// 					console.log(doc);
// 				}
// 			});
// 		});
// 	});
// 	res.send("Scrape Complete");
// });



app.listen(3000, function(){
	console.log('App running on port 3000!');
})