(function () {
    'use strict';
    angular.module('Tombola.Module.GameLobby')
        .service('CheckForWins', ['$timeout', '$interval', 'SortCards', 'WinConditions', 'DisplayCards','StateChanger',
            function ($timeout, $interval, sortCards, winConditions, displayCards, stateChanger) {
                var me = this;

                me.checkSnap = function () {
                    if (displayCards.chosenCard.value === displayCards.previousCard.value) {
                        me.snapMessage = 'SNAP! We have a winner!';
                        sortCards.winnerName = 'Human';
                        sortCards.winner = true;
                        stateChanger.playerScore.push('|');
                        winConditions.clearData();
                    }
                    else {
                        winConditions.isButtonDisabled = true;
                        winConditions.loseCondition();
                    }
                };
            }]);
})();