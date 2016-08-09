angular.module('carService', [])

 .service('cars', ['$http', function ($http) {

     //get 10 latest cars available to sell
     this.getLatestCars = function() {
        return $http.get('/carsApi/cars/latest/');
    };

     //get all car names for search
     this.getCarNames = function() {
        return $http.get('/carsApi/cars/allcars/');
    };

 }]);
