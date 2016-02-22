angular.module('gameModule').factory('rolesFactory',rolesFactory);

rolesFactory.$inject=['gameFactory','gamersFactory'];
function rolesFactory(gameFactory,gamersFactory){
  /*private path*/
  var _config=function(){
    return gameFactory.getGameConfig();
  };
  var _roles=function(){
    var localConfig=_config();
          return [{
            logo:'logo',
            count:parseInt(localConfig.mafiaCount)?parseInt(localConfig.mafiaCount):0,
            name:'Мафия'
          },{
            logo:'maniak',
            count:parseInt(localConfig.maniaksCount)?parseInt(localConfig.maniaksCount):0,
            name:'Маньяк'
          },{
            logo:'police',
            count:parseInt(localConfig.comissarsCount)?parseInt(localConfig.comissarsCount):0,
            name:'Полиция'
          },{
            logo:'doctor',
            count:parseInt(localConfig.doctorsCount)?parseInt(localConfig.doctorsCount):0,
            name:'Доктор'
          },{
            logo:'bus',
            count:parseInt(localConfig.driversCount)?parseInt(localConfig.driversCount):0,
            name:'Водитель автобуса'
          }];
  };

  var _initGamers=function(){
    var roles=_roles();
    var gamers=gamersFactory.getGamers();
    if(!gamers)
      return gamers;
    for(var i=0;i<gamers.length;i++){
      gamers[i].roleName=roles[gamers[i].role];
    }
    return gamers;
  };

  /*public path*/
  var rolesObject={
    getRoles:_roles,
    getGamers:_initGamers,
  };
  return rolesObject;
}
