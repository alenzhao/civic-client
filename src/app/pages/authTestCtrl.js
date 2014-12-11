(function() {
  'use strict';
  angular
    .module('civic.pages')
    .controller('AuthTestCtrl', AuthTestCtrl);

  // @ngInject
  function AuthTestCtrl ($scope, $rootScope, $log) {
    $log.info('AuthTestCtrl loaded.');
    $scope.loadedMsg = 'Loaded AuthTest!';
  }
})();
