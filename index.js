var express  = require('express'),
		app      = express(),
		mongoose = require('mongoose'),
		Book 		 = require('mongoose').model('Book');


mongoose.connect("mongodb://localhost/test");

app.get('/', function(req,res) {
	console.log("Response found!");
	res.render("The app is working!");
});

mongoose.connect("mongodb://localhost/test");