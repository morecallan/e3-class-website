app.controller("TechnologiesCtrl", function($scope, $location){

$scope.mouseWheel = function($event, $delta, $deltaY)
  {
    if ($delta == -1 && $deltaY == -1)
    {
      $location.path('splash');
    }
    else if ($delta == 1 && $deltaY == 1)
    {
      $location.path('people')
    }
  }


})