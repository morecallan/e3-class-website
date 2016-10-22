app.controller("SplashCtrl", function($scope, $location){

 
  $scope.mouseWheel = function(view)
  {
    console.log("changedView");
    $location.path(view);
  }

});
