(function () {
    'use strict';
    angular.module('Tombola.Module.Main')
        .service('StateChanger',
        function ($state) {
            var me = this;

            me.goToLobby = function (){
                $state.go('gameLobby');
            };
             me.goToHome = function (){
                $state.go('homePage');
            };
        });
})();