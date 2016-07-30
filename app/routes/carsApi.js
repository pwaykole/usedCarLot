var Cars = require('../models/cars');
var config = require('../../config');

module.exports = function (app, express) {

    var carApiRouter = express.Router();

        carApiRouter.route('/cars')
         // get all the Cars
        .get(function (req, res) {
            Cars.find(function (err, cars) {
                if (err) res.send(err);
                // return the cars
                res.json(cars);
            });
        });

     carApiRouter.route('/cars/latest')
         // get all the Cars
        .get(function (req, res) {

            Cars.find().limit(10).sort({ index: -1 }).exec(function(err, data){
                res.json(data);
            });
        });

     return carApiRouter;
};
