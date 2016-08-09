angular.module('app.routes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
             resolve: {
                latestCars: ['cars',
                    function(cars) {
                    return cars.getLatestCars();
                }],
                allCars:['cars', function(cars){
                    return cars.getCarNames();
                }]
        },
            templateUrl: 'app/views/pages/home.html',
            controller: 'homeController as home'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/views/pages/contact.html',
            controller: 'contactController as cf'
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
