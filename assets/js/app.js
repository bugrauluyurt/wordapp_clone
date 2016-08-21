'use strict'

angular.module('wordapp',['ui.bootstrap'])

  .controller('NavCtrl', ['$scope', function($scope) {

    $scope.languages = [
      'English',
      'Swedish',
      'Turkish'
    ];

  }])

;
