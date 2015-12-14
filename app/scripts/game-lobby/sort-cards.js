(function () {
    'use strict';
    angular.module('Tombola.Module.GameLobby')
        .service('SortCards',
        function ($state) {
            var me = this,
                suits = ["Clubs", "Diamonds", "Hearts", "Spades"],
                cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
            me.cards = [];
            me.winner = false;
            me.winnerName = '';

            var deck = function () {
                    var suit,
                        rank;
                    for (suit in suits) {
                        for (rank in cardNumbers) {
                            me.cards.push({
                                suit: suits[suit],
                                value: cardNumbers[rank],
                                image: suits[suit] + cardNumbers[rank]
                            });
                        }
                    }
                    shuffle(me.cards);
                },

                shuffle = function (cards) {
                    var counter = cards.length,
                        temp,
                        index;

                    while (counter > 0) {
                        index = Math.floor(Math.random() * counter);
                        counter--;

                        temp = cards[counter];
                        cards[counter] = cards[index];
                        cards[index] = temp;
                    }
                    return cards;
                },

                goToHome = function () {
                    $state.go('homePage');
                };

            me.init = function () {
                deck();
            };

            me.stateChanger = function () {
                goToHome();
            };
        });
})();