(function () {
    'use strict';
    angular.module('Tombola.Module.GameLobby')
        .controller('LobbyController', ['$scope','SnapModel',
            function ($scope, snapModel) {
                $scope.snapModel = snapModel;
            }]);
})();