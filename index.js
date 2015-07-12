var express  = require('express'),
		app      = express(),
		mongoose = require('mongoose'),
		Book 		 = require('mongoose').model('Book'),
		models   = require('book.js').initialize();


mongoose.connect("mongodb://localhost/Books");
require('./models/books');

//================= END OF BOILERPLATE===================


app.get('/', function(req,res) {
	console.log("Response found!");
	res.render("The app is working!");
});

