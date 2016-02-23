angular.module('gameModule').controller('ingameController',ingameCtrl);

ingameCtrl.$inject=['$timeout','rolesFactory','$location'];
function ingameCtrl($timeout,rolesFactory,$location){
  var vm=this;
  vm.gamers=null;
  vm.gameFlag=null;
  vm.currentState=null;
  vm.currentRoleActive=null;
  vm.timeTick=10;

  /*public methods*/
  vm.init=function(){
    vm.gameFlag=false;
    vm.currentState='day';
    vm.currentRoleActive=0;
    vm.gamers=rolesFactory.getGamers();
    if(!vm.gamers){
      $location.path('/');
    }
  };

  vm.startGame=function(){
    vm.gameFlag=true;
    vm.currentState='nigth';
    vm.currentRoleActive=1;
    _timer();
  };

  vm.back=function(){
    $location.path('/choose-roles');
  };

  vm.getCurrentPlayerGroupName=function(){
    return rolesFactory.getRoleName(vm.currentRoleActive);
  };

  /* private methods*/

  var _timer=function(){
    if(vm.timeTick<1){
      vm.timeTick=10;

      var chackFlag=true;
      do{
        vm.currentRoleActive++;
        if(vm.currentRoleActive>4){
          vm.currentState="day";
          vm.currentRoleActive=0;
          $timeout.cancel(myTimer);
          return;
        }
        checkFlag=_checkToContainsRoleInArray(vm.currentRoleActive);
      }while(!checkFlag);
    }
    vm.timeTick--;
    myTimer=$timeout(_timer,1000);
  };

  var _checkToContainsRoleInArray=function(roleId){
    for(var i=0;i<vm.gamers.length;i++){
      if(vm.gamers[i].roleName===undefined)
        continue;
      if(vm.gamers[i].roleName.priority===roleId)
        return true;
    }
    return false;
  };
}
