angular.module('accountService', ['ngStorage'])

    .service('Account', function ($localStorage) {

        this.setAccountData = function( userData ){
            $localStorage.username = userData.username;
            $localStorage.firstname = userData.firstname;
            $localStorage.lastname = userData.lastname;
            $localStorage.emailaddress = userData.emailaddress;
            $localStorage.menus = userData.menus;
        }

        this.getAccountData = function( ){
            return {
                username : $localStorage.username,
                firstname : $localStorage.firstname,
                lastname : $localStorage.lastname,
                emailaddress : $localStorage.emailaddress,
                menus : $localStorage.menus
            }
        }

        this.clearAccountData = function(){
            $localStorage.$reset();
        }
    });