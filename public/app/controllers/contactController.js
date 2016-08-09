angular.module('contactCtrl', ['ngMaterial'])

.controller('contactController', ['$scope', '$http', '$mdToast', function($scope, $http, $mdToast) {

var cf = this;

    $scope.doSendMail = function() {
    var data = ({
        contactName : cf.data.name,
        contactPhone : cf.data.phone,
        contactEmail : cf.data.email,
        contactAddress : cf.data.address
    });
    console.log(data.contactName);
    // clear the error
     $scope.error = '';
     var pinTo = "top right";
     // submit the form and generate a message using toast
    $http.post('/contactApi/contactForm', data)
    .success(function(data){
        console.log(data);
        $mdToast.show($mdToast.simple().textContent('Thank yo for contacting us' +' '+ data.name).position(pinTo).hideDelay(3000));
    })
    .error(function(data){

    });
   };
 }]);
