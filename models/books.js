var mongoose 		= require('mongoose'),
	  Schema 			= mongoose.Schema;
		BookSchema 	= new Schema({
    title: String,
    author: String,
    year: Integer
});

mongoose.model('Books', BookSchema);