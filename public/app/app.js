angular

.module('userApp', ['app.routes', 'authService', 'mainCtrl', 'userCtrl', 'userService', 'ngMaterial','ngMessages','hmeCtrl','jkAngularCarousel', 'dashboardCtrl', 'userAvatarDirective', 'authService', 'accountService', 'ngStorage'])
.run(function ($rootScope, Account, $location) {
  // google analytics
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    event.preventDefault;
    if(toState.name == 'admin' && Account.getAccountData().username){
      $location.path('/dashboard');
      return;
    }
    if(toState.authenticated && !Account.getAccountData().username){
           $location.path('/');
           return;
    }
    $location.path(toState.url);
  })
})
// application configuration to integrate token into requests
 .config(function($httpProvider, $mdThemingProvider) {
 // attach our auth interceptor to the http requests
 $httpProvider.interceptors.push('AuthInterceptor');
 $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('orange');

});

