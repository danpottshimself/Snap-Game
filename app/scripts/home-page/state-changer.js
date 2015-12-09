(function () {
    'use strict';
    angular.module('Tombola.Module.HomePage')
        .service('StateChanger',
        function ($state) {
            var me = this;

            me.goToLobby = function (){
                $state.go('gameLobby');
            };
            var goToHome = function (){
                $state.go('homePage');
            };
        });
})();