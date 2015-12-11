(function () {
    'use strict';
    angular.module('Tombola.Module.GameLobby')
        .service('CheckForWins', ['$timeout', '$interval', 'SnapModel', 'StateChanger',
            function ($timeout, $interval, snapModel, stateChanger) {
                var me = this;
                me.isButtonDisabled = false;
                me.clearData = function () {
                    $interval.cancel(snapModel.dealCards);
                    snapModel.cards = [];
                    snapModel.chosenCard = null;
                    snapModel.previousCard = null;
                    $timeout(me.winCondition, 5000);
                };
                me.winCondition = function () {
                    stateChanger.goToHome();
                    me.snapMessage = '';
                };

                me.loseCondition = function () {
                    $timeout(function () {
                        me.loseMessage = '';
                        me.isButtonDisabled = false;
                    }, 5000);
                };

                me.checkSnap = function () {
                    console.log(snapModel.chosenCard);
                    if (snapModel.chosenCard.value === snapModel.previousCard.value) {
                        me.snapMessage = 'SNAP! We have a winner!';
                        me.clearData();
                    }
                    else {
                        me.loseMessage = 'YOU THOUGHT WRONG! You cant call snap now for 5 seconds.';
                        me.isButtonDisabled = true;
                        me.loseCondition();
                    }
                };
            }]);
})();