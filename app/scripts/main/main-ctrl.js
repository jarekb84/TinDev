/* global Firebase */

'use strict';

angular.module('tinDev')
  .controller('MainCtrl', function ($scope, $firebase) {
  	// now we can use $firebase to synchronize data between clients and the server!
    var ref = new Firebase('https://<your-firebase>.firebaseio.com/');
    var sync = $firebase(ref);

    $scope.currentFramework = {};
    $scope.frameworks = [
      {
        'key': 'angular',
        'title': 'AngularJS',
        'url': 'images/logos/angular.png',
        points:0
      },
      {
        'key': 'bootstrap',
        'title': 'bootstrap',
        'url': 'images/logos/bootstrap.png',
        points:0
      },
      {
        'key': 'canjs',
        'title': 'canjs',
        'url': 'images/logos/canjs.png',
        points:0
      },
      {
        'key': 'dojo',
        'title': 'dojo',
        'url': 'images/logos/dojo.png',
        points:0
      },
      {
        'key': 'ember',
        'title': 'ember',
        'url': 'images/logos/ember.png',
        points:0
      },
      {
        'key': 'firebase',
        'title': 'firebase',
        'url': 'images/logos/firebase.png',
        points:0
      },
      {
        'key': 'foundation',
        'title': 'foundation',
        'url': 'images/logos/foundation.png',
        points:0
      },
      {
        'key': 'grunt',
        'title': 'grunt',
        'url': 'images/logos/grunt.png',
        points:0
      },
      {
        'key': 'ionic',
        'title': 'ionic',
        'url': 'images/logos/ionic.png',
        points:0
      },
      {
        'key': 'jquery',
        'title': 'jquery',
        'url': 'images/logos/jquery.png',
        points:0
      },
      {
        'key': 'knockout',
        'title': 'knockout',
        'url': 'images/logos/knockout.png',
        points:0
      },
      {
        'key': 'react',
        'title': 'react',
        'url': 'images/logos/react.png',
        points:0
      },
      {
        'key': 'yeoman',
        'title': 'yeoman',
        'url': 'images/logos/yeoman.png',
        points:0
      },
      {
        'key': 'vanillajs',
        'title': 'vanillajs',
        'url': 'images/logos/vanilla.png',
        points:0
      },
      {
        'key': 'yui',
        'title': 'yui',
        'url': 'images/logos/yui.png',
        points:0
      },
    ];
    var getRandomFramework = function () {

      $scope.currentFramework = $scope.frameworks[Math.floor(Math.random() * $scope.frameworks.length)];
    };

    getRandomFramework();

    $scope.ballin = function(){
      $scope.frameworks.filter(function(item) {
        return item.key === $scope.currentFramework.key;
      })[0].points++;

      getRandomFramework();
    }

    $scope.busted = function(){
      $scope.frameworks.filter(function(item) {
        return item.key === $scope.currentFramework.key;
      })[0].points--;

      getRandomFramework();
    }
  });
