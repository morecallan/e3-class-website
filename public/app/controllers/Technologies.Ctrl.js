app.controller("TechnologiesCtrl", function($scope, $location){

$scope.mouseWheel = function($event, $delta, $deltaY)
  {
    console.log("delta", $delta);
    console.log("deltaY", $deltaY);

    if ($delta == -1 && $deltaY == -1)
    {
      console.log("down");
      $location.path('splash');
    }
    else if ($delta == 1 && $deltaY == 1)
    {
      console.log("up");
      $location.path('people')
    }
  }


})