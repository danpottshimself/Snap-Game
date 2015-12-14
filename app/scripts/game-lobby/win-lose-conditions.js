(function () {
    'use strict';
    angular.module('Tombola.Module.GameLobby')
        .service('WinConditions', ['$timeout', '$interval', 'SortCards', 'StateChanger','DisplayCards',
            function ($timeout, $interval, sortCards, stateChanger, displayCards) {
                var me = this;
                me.loseMessage = '';
                me.isButtonDisabled = false;
                me.clearData = function () {
                    $interval.cancel(displayCards.dealCards);
                    sortCards.cards = [];
                    sortCards.chosenCard = null;
                    sortCards.previousCard = null;
                    $timeout(me.winCondition, 5000);
                };
                me.winCondition = function () {
                    stateChanger.goToHome();
                    me.snapMessage = '';
                };

                me.loseCondition = function () {
                    me.loseMessage = 'YOU THOUGHT WRONG! You cant call snap now for 5 seconds.';
                    $timeout(function () {
                        me.loseMessage = '';
                        me.isButtonDisabled = false;
                    }, 5000);
                };
            }]);
})();