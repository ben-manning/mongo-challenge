
var mongoose = require('mongoose'),
	mongo = require('mongodb'),
	express = require('express'),
	app = express(),
	Book = require('./models/books');

//================= END OF BOILERPLATE===================


// app.get('/', function(req,res) {
// 	console.log("Response found!");
// 	res.render("The app is working!");
// });
app.get('/',function(req,res){
	res.send("This shit works");
});

app.get('/books',function(req,res){
	res.json(Book);
});
// mongoose.connect('mongodb://localhost/27017/tedb.st');
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Express server listening on port');
});
