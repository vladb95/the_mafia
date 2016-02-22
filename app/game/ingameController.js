angular.module('gameModule').controller('ingameController',ingameCtrl);

ingameCtrl.$inject=['$timeout','rolesFactory','$location'];
function ingameCtrl($timeout,rolesFactory,$location){
  var vm=this;
  vm.gamers=null;
  vm.gameFlag=null;

  /*public methods*/
  vm.init=function(){
    vm.gameFlag=false;
    vm.gamers=rolesFactory.getGamers();
    if(!vm.gamers){
      $location.path('/');
    }
  };

  vm.startGame=function(){
    vm.gameFlag=true;
  };

  vm.back=function(){
    $location.path('/choose-roles');
  };
}
