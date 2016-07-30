angular.module('userApp', ['app.routes', 'authService', 'mainCtrl', 'userCtrl', 'userService', 'ngMaterial','ngMessages','hmeCtrl','jkAngularCarousel'])
// application configuration to integrate token into requests
 .config(function($httpProvider, $mdThemingProvider) {
 // attach our auth interceptor to the http requests
 $httpProvider.interceptors.push('AuthInterceptor');
 $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('orange');

});
