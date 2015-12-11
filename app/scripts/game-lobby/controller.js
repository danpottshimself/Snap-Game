(function () {
    'use strict';
    angular.module('Tombola.Module.GameLobby')
        .controller('LobbyController', ['$scope','SnapModel','CheckForWins',
            function ($scope, snapModel, checkForWins) {
                $scope.snapModel = snapModel;
                $scope.checkWinners = checkForWins;
            }]);
})();