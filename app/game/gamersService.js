angular.module('gameModule').factory('gamersFactory',gamersFactory);

gamersFactory.$inject=[];
function gamersFactory(){
  var factory={
    initGamersList:function(list){
      localStorage.setItem('gamersList',JSON.stringify(list));
    },
    getGamers:function(){
      var config=JSON.parse(localStorage.getItem('gamersList'));
      
      return config===null?false:config;
    }
  };
  return factory;
}
