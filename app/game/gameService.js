angular.module('gameModule').factory('gameFactory',gameFactory);

gameFactory.$inject=[];
function gameFactory(){
  var factoryObject={
    setGameConfig:function(config){
      localStorage.setItem('config', JSON.stringify(config));
    },
    getGameConfig:function(){
      var config=JSON.parse(localStorage.getItem('config'));
      return config===null?false:config;
    }
  };
  return factoryObject;
}
