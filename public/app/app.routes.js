angular.module('app.routes', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/admin');

    $stateProvider

        .state('login', {
            url: '/admin',
            templateUrl: 'app/views/pages/login.html',
            controller: 'mainController as login'
        });

});
