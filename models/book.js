var mongoose = require('mongoose'),
var Schema = mongoose.Schema;
var BookSchema = new Schema({
    title: String,
    author: String,
    year: Integer
});

mongoose.model('Book', BookSchema);