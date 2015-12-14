(function () {
    'use strict';
    angular.module('Tombola.Module.GameLobby')
        .controller('LobbyController', ['$scope','SnapModel','CheckForWins','AiPlayer',
            function ($scope, snapModel, checkForWins, aiPlayer) {
                $scope.snapModel = snapModel;
                $scope.checkWinners = checkForWins;
                $scope.aiPlayer = aiPlayer;
            }]);
})();