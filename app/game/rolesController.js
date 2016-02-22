angular.module('gameModule').controller('rolesController',rolesCtrl);

rolesCtrl.$inject=['rolesFactory','gamersFactory','$location'];
function rolesCtrl(rolesFactory,gamersFactory,$location){
  var vm=this;

  vm.currentRole=-1;
  vm.choosenGamers=null;
  vm.config=null;

  vm.roles=null;

  vm.init=function(){
    vm.choosenGamers=rolesFactory.getGamers();
    if(!vm.choosenGamers){
      $location.path('/');
    }
    vm.roles=rolesFactory.getRoles();
    checkGamersForChoosenRoles();
  };

  vm.selectRole=function(index){
    if(vm.roles[vm.currentRole]!==undefined){
      if(vm.currentRole===-1|vm.roles[vm.currentRole].count<1){
        return;
      }
    }
    if(vm.choosenGamers[index].role!==undefined){
      if(vm.choosenGamers[index].role===vm.currentRole){
        vm.choosenGamers[index].role=undefined;
        vm.roles[vm.currentRole].count++;
        return;
      }else{
          vm.roles[vm.choosenGamers[index].role].count++;
      }
    }
    if(vm.currentRole!==-1){
      vm.choosenGamers[index].role=vm.currentRole;
      vm.roles[vm.currentRole].count--;
    }else{
      vm.choosenGamers[index].role=undefined;
    }
    if(vm.roles[vm.currentRole].count<1){
      vm.currentRole=-1;
    }
  };

  vm.setCurrentRole=function(roleId){
    vm.currentRole=roleId;
  };

  vm.startGame=function(){
    gamersFactory.initGamersList(vm.choosenGamers);
    $location.path('/game');
  };

  vm.back=function(){
    $location.path('/choose-gamers');
  };

  var checkGamersForChoosenRoles=function(){
    for(var i=0;i<vm.choosenGamers.length;i++){
      if(vm.choosenGamers[i].role!==undefined){
        vm.roles[vm.choosenGamers[i].role].count--;
      }
    }
  };
}
