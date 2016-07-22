angular.module('app.routes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'app/views/pages/home.html',
            controller: 'mainController as login'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'app/views/pages/login.html',
            controller: 'mainController as login'
        })
        .state('Users', {
            url: '/Users',
            templateUrl: 'app/views/pages/users/all.html',
            controller: 'userController'
        });

});
