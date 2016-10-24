app.controller("TechnologiesCtrl", function($scope, $location){

$scope.mouseWheel = function($event, $delta, $deltaY)
  {
    if ($delta == -1 && $deltaY == -1)
    {
      console.log("delta", $delta);
      console.log("delta", $deltaY);
      $location.path('splash');
    }
    else if ($delta == 1 && $deltaY == 1)
    {
      console.log("delta", $delta);
      console.log("delta", $deltaY);
      $location.path('people');
    }
  }


})