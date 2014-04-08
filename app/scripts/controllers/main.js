'use strict';

angular.module('bddEditApp')
  .controller('EditorCtrl', function ($scope) {
	  $scope.newScenario = [];

	  $scope.scenarios = [
	    [
	      'Given there is a list of all scenarios',
	      'When I enter a keyword for new scenario',
	      'Then I see a subset of list containing the keyword'
	    ],
	    [
	      'Given I see a subset of list containing the keyword',
	      'When I choose a sentence from the list',
	      'Then I do not need to type in the sentence'
	    ]
	  ];
	 
	  $scope.addLine = function() {
	    $scope.newScenario.push($scope.newLine);
	    $scope.newLine = '';
	  };

	  $scope.addScenario = function() {
	    $scope.scenarios.push($scope.newScenario);
	    $scope.newScenario = [];
	  };

	  $scope.select = function(item) {
	    $scope.newLine = item;
	  };

	  $scope.removeLine = function(index) {
	    $scope.newScenario.splice(index, 1);
	  };
  });