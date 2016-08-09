var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//contact form schema
var ContactForm = new Schema({
    name: String,
    phone: Number,
    email: String,
    address: String
});
// return the model
module.exports = mongoose.model('Contact', ContactForm);
