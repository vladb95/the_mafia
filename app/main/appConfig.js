angular.module('mafiaModule').config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    templateUrl:'templates/main-template.html',
    /*controller:'mainController',
    controllerAs:'vm'*/
  })
  .when('/create-game',{
    templateUrl:'templates/create-game.html',
    controller:'createGameController',
    controllerAs:'vm'
  })
  .when('/choose-gamers',{
    templateUrl:'templates/choose-gamers.html',
    controller:'gamersController',
    controllerAs:'vm'
  })
  .when('/choose-roles',{
    templateUrl:'templates/choose-roles.html',
    controller:'rolesController',
    controllerAs:'vm'
  })
  .when('/game',{
    templateUrl:'templates/game-field.html',
    controller:'ingameController',
    controllerAs:'vm'
  })
  .otherwise({redirectTo:'/'});
}]);
