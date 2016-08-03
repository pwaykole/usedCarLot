angular.module('app.routes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'app/views/pages/home.html',
            controller: 'homeController as home'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: 'app/views/pages/login.html',
            controller: 'mainController as login'
        })
        .state('users', {
            url: '/users',
            templateUrl: 'app/views/pages/users/all.html',
            controller: 'userController as user',
            authenticated: true
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/views/pages/dashboard/dashboard.html',
            controller: 'dashboardController as dashboard',
            authenticated: true
        });

});
