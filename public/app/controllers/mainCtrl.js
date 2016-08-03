angular.module('mainCtrl', ['authService'])

  .controller('mainController', function($rootScope, $location, Auth, Account) {

    var vm = this;

    // get info if a person is logged in
    vm.loggedIn = Auth.isLoggedIn();

   // function to handle login form
   vm.doLogin = function() {
    // clear the error
     vm.error = '';
     // call the Auth.login() function
     Auth.login(vm.loginData.username, vm.loginData.password)
       .success(function(data) {
         // if a user successfully logs in, redirect to users page
         if (data.success)
             $location.path('/dashboard');
         else
             vm.error = data.message;
       });
   };

   // function to handle logging out
   vm.doLogout = function() {
     Auth.logout();
     // reset all user info
     vm.user = {};
     $location.path('/login');
   };

 });
