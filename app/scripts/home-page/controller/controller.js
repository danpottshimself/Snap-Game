(function () {
    'use strict';
    angular.module('Tombola.Module.HomePage')
        .controller('HomeController', ['$scope','StateChanger',
            function ($scope, stateChanger) {
            $scope.stateChange = stateChanger;
            }]);
})();