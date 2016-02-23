angular.module('gameModule').filter('timerFilter',timerFilter);

function timerFilter(){
  return function(time){
    return time>59?'1:00':(time>9?'0:'+time:'0:0'+time);
  };
}
