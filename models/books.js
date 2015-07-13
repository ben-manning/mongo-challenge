var mongoose = require('mongoose');

var BookSchema 	= mongoose.Schema(
	{
    title: String,
    author: String,
    year: Number
	}
);

var Book = mongoose.model('Book', BookSchema);
	