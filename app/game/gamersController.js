angular.module('gameModule').controller('gamersController',gamersCtrl);

gamersCtrl.$inject=['gameFactory','$location','gamersFactory'];
function gamersCtrl(gameFactory,$location,gamersFactory){
  var vm=this;
  vm.limitGamers=0;

  vm.gamers=[
    {
      name:'Франс',
      image:'images/face.jpg',
      selected:false
    },
    {
      name:'Элла',
      image:'images/face2.jpg',
      selected:false
    },
    {
      name:'Денис',
      image:'images/face3.jpg',
      selected:false
    },
    {
      name:'Юлиана',
      image:'images/face4.jpg',
      selected:false
    },
    {
      name:'Макс',
      image:'images/face5.jpg',
      selected:false
    },
    {
      name:'Люда',
      image:'images/face6.jpg',
      selected:false
    },
    {
      name:'Славик',
      image:'images/face7.jpg',
      selected:false
    },
    {
      name:'Юрганова',
      image:'images/face8.jpg',
      selected:false
    },
    {
      name:'Люда',
      image:'images/face9.jpg',
      selected:false
    },
    {
      name:'Славик',
      image:'images/face10.jpg',
      selected:false
    },
    {
      name:'Юрганова',
      image:'images/face2.jpg',
      selected:false
    },
    {
      name:'Юлиана',
      image:'images/face4.jpg',
      selected:false
    },
    {
      name:'Макс',
      image:'images/face5.jpg',
      selected:false
    },
    {
      name:'Люда',
      image:'images/face6.jpg',
      selected:false
    },
    {
      name:'Славик',
      image:'images/face7.jpg',
      selected:false
    },
    {
      name:'Юрганова',
      image:'images/face8.jpg',
      selected:false
    },
    {
      name:'Люда',
      image:'images/face9.jpg',
      selected:false
    },
    {
      name:'Славик',
      image:'images/face10.jpg',
      selected:false
    },
    {
      name:'Юрганова',
      image:'images/face2.jpg',
      selected:false
    },
  ];

  vm.init=function(){
    if(!gameFactory.getGameConfig()){
      $location.path('/');
    }else{
      vm.limitGamers=gameFactory.getGameConfig().countGamers;
    }
  };

  vm.addGamer=function(gamer){

  };

  vm.chooseGamer=function(i){
    if(vm.gamers[i].selected){
      vm.gamers[i].selected=!vm.gamers[i].selected;
    }else{
      var selectedGamers=0;
      for(var j=0;j<vm.gamers.length;j++){
        if(vm.gamers[j].selected){
          selectedGamers++;
        }
      }
      if(selectedGamers<vm.limitGamers){
        vm.gamers[i].selected=true;
      }
    }

  };

  vm.choosenGamers=function(){
    var gamers=[];
    for(var i=0;i<vm.gamers.length;i++){
      if(vm.gamers[i].selected)
        gamers.push(vm.gamers[i]);
    }
    return gamers;
  };

  vm.goBack=function(){
    $location.path('/create-game');
  };

  vm.submit=function(){
    var gamers=[];
    for(var i=0;i<vm.gamers.length;i++){
      if(vm.gamers[i].selected){
        gamers.push(vm.gamers[i]);
      }
    }
    gamersFactory.initGamersList(gamers);
    $location.path('/choose-roles');
  };
}
