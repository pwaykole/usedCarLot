angular.module('app.routes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('admin', {
            url: '/admin',
            templateUrl: 'app/views/pages/login.html',
            controller: 'mainController'
        });

});
