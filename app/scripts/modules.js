angular.module('Tombola.Module.HomePage', []);
angular.module('Tombola.Module.Main', ['ui.router','Tombola.Module.HomePage'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/HomePage");

        $stateProvider
            .state('homePage', {
                url: "/HomePage",
                templateUrl: 'templates/home-page.html',
                controller: 'HomeController'
            });
    });