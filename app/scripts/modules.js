angular.module('Tombola.Module.HomePage', []);
angular.module('Tombola.Module.GameLobby', []);
angular.module('Tombola.Module.Main', ['ui.router','Tombola.Module.HomePage', 'Tombola.Module.GameLobby'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/HomePage");

        $stateProvider
            .state('homePage', {
                url: "/HomePage",
                templateUrl: 'templates/home-page.html',
                controller: 'HomeController'
            })

            .state('gameLobby', {
                url: "/lobby",
                templateUrl: 'templates/game-lobby.html',
                controller: 'GameLobby'
            });
    });