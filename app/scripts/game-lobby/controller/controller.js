(function () {
    'use strict';
    angular.module('Tombola.Module.GameLobby')
        .controller('LobbyController', ['$scope', 'SortCards', 'WinConditions', 'DisplayCards', 'CheckForWins',
            function ($scope, sortCards, winConditions, displayCards, checkForWins) {
                $scope.sortCards = sortCards;
                $scope.winConditions = winConditions;
                $scope.displayCards = displayCards;
                $scope.checkForWins = checkForWins;
            }]);
})();