angular.module('hmeCtrl', ['ngMaterial', 'carService'])

.controller('homeController', ['$scope','_','$state','cars', 'latestCars', 'allCars', '$timeout','$q','$log', function ($scope,  _, $state, cars, latestCars, allCars, $timeout, $q, $log) {

    $scope.dataArray = [
          {
            src: '../../assets/img/acura-rlx.jpg'
          },
          {
            src: '../../assets/img/acura-tlx.jpg'
          },
          {
            src: '../../assets/img/bmw-ilx.jpg'
          },
          {
            src: '../../assets/img/bmw-nsx.jpg'
          },
          {
            src: '../../assets/img/bmw-rlx.jpg'
          },
          {
            src: '../../assets/img/Toyota-tlx.jpg'
          }
        ];

    $scope.latestCars = latestCars.data;
    $scope.letterLimit = 100;

    //for search bar
    var self = this;

    self.simulateQuery = true;

    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange   = searchTextChange;

    self.newState = newState;

    function newState(state) {
      alert("Sorry! no cars available for your search...");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `states` list of key/value pairs
     */

    function loadAll() {

    var stooges = angular.fromJson(JSON.stringify(allCars.data));
    var allCarNames = _.pluck(stooges, 'make');

        return allCarNames.map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };

    }
}]);
