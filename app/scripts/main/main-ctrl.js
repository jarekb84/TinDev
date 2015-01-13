/* global Firebase */

'use strict';

angular.module('tinDev')
  .controller('MainCtrl', function ($scope, $firebase) {
    var ref = new Firebase('https://tindev.firebaseio.com/');
    var sync = $firebase(ref);

    $scope.currentFramework = {};
    sync.$asArray().$loaded()
      .then(function (data) {
        $scope.frameworks = data;
        getRandomFramework();
      });

    var getRandomFramework = function () {
      $scope.currentFramework = $scope.frameworks[Math.floor(Math.random() * $scope.frameworks.length)];
    };

    $scope.ballin = function () {
      var item = getItemFromArray();

      item.points++;
      $scope.frameworks.$save(item);

      getRandomFramework();
    }

    $scope.busted = function () {
      var item = getItemFromArray();

      item.points--;
      $scope.frameworks.$save(item);

      getRandomFramework();
    }

    var getItemFromArray = function(){
     return  $scope.frameworks.filter(function (item) {
        return item.key === $scope.currentFramework.key;
      })[0];
    }
  });
