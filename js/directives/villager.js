app.directive('villager', function(){
	return{
    restrict: 'E',
    scope: {
      v: '='
    },
    templateUrl: 'js/directives/villager.html'
  }
});