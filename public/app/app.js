angular.module('userApp', ['app.routes', 'authService', 'mainCtrl', 'userCtrl', 'userService', 'ngMaterial','ngMessages'])
// application configuration to integrate token into requests
 .config(function($httpProvider) {

 // attach our auth interceptor to the http requests
 $httpProvider.interceptors.push('AuthInterceptor');

})
  .config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('orange');
});
