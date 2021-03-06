angular.module('userCtrl', ['ngMaterial', 'md.data.table', 'userService']).config(['$mdThemingProvider', function ($mdThemingProvider) {
        'use strict';
        $mdThemingProvider.theme('default').primaryPalette('cyan');
}]).controller('userController', ['$mdEditDialog', '$q', '$scope', '$timeout', 'User', function ($mdEditDialog, $q, $scope, $timeout, User) {
        'use strict';
        var vm = this;
        // set a processing variable to show loading things
        vm.processing = true;
        // grab all the users at page load
        User.all().success(function (data) {
            // when all the users come back, remove the processing variable
            vm.processing = false;
            // bind the users that come back to vm.users
            vm.users = data;
        });
        $scope.selected = [];
        $scope.limitOptions = [5, 10, 15];
        $scope.options = {
            rowSelection: true
            , multiSelect: true
            , autoSelect: true
            , decapitate: false
            , largeEditDialog: true
            , boundaryLinks: true
            , limitSelect: true
            , pageSelect: true
        };
        $scope.query = {
            order: 'name'
            , limit: 5
            , page: 1
        };
        // function to delete a user
        vm.deleteUser = function (id) {
            vm.processing = true;
            // accepts the user id as a parameter
            User.delete(id).success(function (data) {
                // get all users to update the table
                // you can also set up your api
                // to return the list of users with the delete call
                User.all().success(function (data) {
                    vm.processing = false;
                    vm.users = data;
                });
            });
        };
        $scope.toggleLimitOptions = function () {
            $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
        };
        $scope.getTypes = function () {
            return ['Candy', 'Ice cream', 'Other', 'Pastry'];
        };
        $scope.loadStuff = function () {
            $scope.promise = $timeout(function () {
                vm.processing = true;
                User.all().success(function (data) {
                    // when all the users come back, remove the processing variable
                    vm.processing = false;
                    // bind the users that come back to vm.users
                    vm.users = data;
                })
            }, 2000);
        }
        $scope.logItem = function (item) {
            console.log(item.name, 'was selected');
        };
        $scope.logOrder = function (order) {
            console.log('order: ', order);
        };
        $scope.logPagination = function (page, limit) {
            console.log('page: ', page);
            console.log('limit: ', limit);
        }
}])
    // controller applied to user creation page
    .controller('userCreateController', function (User) {
        var vm = this;
        // variable to hide/show elements of the view
        // differentiates between create or edit pages
        vm.type = 'create';
        // function to create a user
        vm.saveUser = function () {
            vm.processing = true;
            // clear the message
            vm.message = '';
            // use the create function in the userService
            User.create(vm.userData).success(function (data) {
                vm.processing = false;
                // clear the form
                vm.userData = {};
                vm.message = data.message;
            });
        };
    });
