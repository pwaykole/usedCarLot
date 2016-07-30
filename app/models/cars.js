var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//cars schema
var CarSchema = new Schema({
    make: String,
    index: Number,
    model: String,
    discription: String,
    registered: Date,
    img: String,
    price: Number,
    mileage: Number,
    fueltype: String
});
// return the model
module.exports = mongoose.model('Cars', CarSchema);
