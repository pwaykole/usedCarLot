angular.module('dashboardCtrl', ['ngMaterial'])
    .controller('dashboardController', function ($scope, Account, Auth, $location) {
        
        var vm = this;

        angular.extend(vm, {
            Variables : {
                CurrentUser : {}
            },
            Methods : {}
        });

        vm.Variables.CurrentUser = Account.getAccountData();

        vm.Methods.Logout = function(){
            Auth.logout();
            Account.clearAccountData();
            $location.path('/admin');

        }

});
