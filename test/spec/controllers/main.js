'use strict';

describe('Controller: EditorCtrl', function () {

  // load the controller's module
  beforeEach(module('bddEditApp'));

  var EditorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditorCtrl = $controller('EditorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.newScenario.length).toBe(1);
  });
});
