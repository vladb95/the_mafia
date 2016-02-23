angular.module('gameModule').factory('rolesFactory',rolesFactory);

rolesFactory.$inject=['gameFactory','gamersFactory'];
function rolesFactory(gameFactory,gamersFactory){
  /*private part*/
  var _config=function(){
    return gameFactory.getGameConfig();
  };
  var _roles=function(){
    var localConfig=_config();
          return [{
            logo:'logo',
            count:parseInt(localConfig.mafiaCount)?parseInt(localConfig.mafiaCount):0,
            name:'Мафия',
            priority:1
          },{
            logo:'maniak',
            count:parseInt(localConfig.maniaksCount)?parseInt(localConfig.maniaksCount):0,
            name:'Маньяк',
            priority:2
          },{
            logo:'police',
            count:parseInt(localConfig.comissarsCount)?parseInt(localConfig.comissarsCount):0,
            name:'Коммисар',
            priority:3
          },{
            logo:'doctor',
            count:parseInt(localConfig.doctorsCount)?parseInt(localConfig.doctorsCount):0,
            name:'Доктор',
            priority:4
          },{
            logo:'bus',
            count:parseInt(localConfig.driversCount)?parseInt(localConfig.driversCount):0,
            name:'Водитель автобуса',
            priority:5
          }];
  };

  var _initGamers=function(){
    var roles=_roles();
    var gamers=gamersFactory.getGamers();
    if(!gamers)
      return gamers;
    for(var i=0;i<gamers.length;i++){
      gamers[i].roleName=roles[gamers[i].role];
      gamers[i].days=0;
      gamers[i].treatments=0;
    }
    return gamers;
  };

  var _getRoleNameById=function(id){
    var roles=_roles();
    return roles[id-1].name;
  };

  var _rolesActions=function(){
    return [{
      roleId:1,
      name:'kill',
      action:'',
    },{
      roleId:2,
      name:'kill',
      action:'',
    },{
      roleId:3,
      name:'kill',
      action:''
    },{
      roleId:4,
      name:'treatment',
      action:''
    }];
  };

  /*public part*/
  var rolesObject={
    getRoles:_roles,
    getGamers:_initGamers,
    getRoleName:_getRoleNameById,
  };
  return rolesObject;
}
