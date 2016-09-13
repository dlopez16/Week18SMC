
var express = require('express');
var bodyParser = require('body-parser');
// var mongojs = require('mongojs');
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var request = require('request');


var app = express();



app.use(bodyParser.urlencoded({
	extended: false
}));


app.use(express.static('public'));

mongoose.connect('mongodb://localhost/Week18SMCDB');

var db = mongoose.connection;

db.on('error', function(err){
	console.log('Mongoose Error: ', err);
});

db.once('open', function(){
	console.log('Mongoose connection successful.');
});


var Story = require('./models/Story.js');
var User = require('./models/User.js');


// //Routes

app.get('/', function(req, res){
	res.send(index.html);
// });

// //Get request to scrape

app.get('/scrape', function(req, res){
	request('https://www.reddit.com/r/webdev/',function(err,response,html){
			if(err) {
				throw err;
			}

			
	
 		var $ = cheerio.load(html);
		var results = [];
		$('.js-event-tracking').each(function(i, element){
			
			var title = $(element).text();
			var link = $(element).find('a').attr("href");
		

			results.push({
				title:title,
				link:link,
			});

			// result.title = $(this).children('a').text();
			// result.link = $(this).children('a').attr('href');
			var entry = new StorySc(result);


			entry.save(function(err,doc){
				if(err){
					res.send(err);
				}else{
					res.send(doc);
				}
			});
		});
		console.log('Here are your results ', results);
	});
// 	res.send("Scrape Complete");
// });



// app.listen(3000, function(){
// 	console.log('App running on port 3000!');
// });