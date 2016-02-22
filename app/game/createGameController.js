angular.module('gameModule').controller('createGameController',createGameCtrl);

createGameCtrl.$inject=['$location','gameFactory'];
function createGameCtrl($location,gameFactory){
  var vm=this;
  vm.gameConfig={};
  vm.setComposition=function(composition){
    vm.gameConfig.mafiaCount=composition[0];
    vm.gameConfig.maniaksCount=composition[1];
    vm.gameConfig.comissarsCount=composition[2];
    vm.gameConfig.doctorsCount=composition[3];
    vm.gameConfig.driversCount=composition[4];
  };

  vm.init=function(){
    if(!gameFactory.getGameConfig()){
      vm.gameConfig.countGamers=9;
      vm.setComposition([2,0,1,1,0]);
    }else{
      vm.gameConfig=gameFactory.getGameConfig();
    }

  };

  vm.chooseGamersCount=function(){
    if(vm.gameConfig.countGamers==9){
      vm.setComposition([2,0,1,1,0]);
    }else if(vm.gameConfig.countGamers==10){
      vm.setComposition([2,1,1,1,0]);
    }else if(vm.gameConfig.countGamers==11){
      vm.setComposition([3,1,1,1,0]);
    }else if(vm.gameConfig.countGamers==14){
      vm.setComposition([3,1,1,1,1,1]);
    }else if(vm.gameConfig.countGamers==12 | vm.gameConfig.countGamers==13){
      vm.setComposition([3,1,1,1,1]);
    }
  };

  vm.createGame=function(){
    gameFactory.setGameConfig(vm.gameConfig);
    $location.path('/choose-gamers');
  };

  vm.back=function(){
    $location.path('/');
  };
}
