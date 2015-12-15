(function () {
    'use strict';
    angular.module('Tombola.Module.GameLobby')
        .service('DisplayCards', ['$timeout', '$interval', 'SortCards', 'StateChanger',
            function ($timeout, $interval, sortCards, stateChanger) {
                var me = this,
                    aiWinner = function () {
                        me.aiMessage = 'AI has won the game. Better luck next time!';
                        sortCards.winnerName = 'AI';
                        $timeout(stateChanger.goToHome, 4000);
                        $interval.cancel(me.dealCards);
                        sortCards.cards = [];
                        sortCards.chosenCard = null;
                        sortCards.previousCard = null;
                        stateChanger.aiScore.push('|');
                    };
                me.chosenCard = null;

                me.showCard = function () {
                    me.hideMe = false;
                    var i = 0;
                    me.dealCards = $interval(function () {
                        me.chosenCard = sortCards.cards[i];
                        me.previousCard = sortCards.cards[i - 1];
                        i++;
                        if (me.chosenCard.value === me.previousCard.value) {
                            $timeout(function () {
                                if (me.winner !== true) {
                                    aiWinner();
                                }
                            }, 1000);
                        }
                    }, 4000, sortCards.cards.length);
                    me.aiMessage = '';
                };
            }]);
})();