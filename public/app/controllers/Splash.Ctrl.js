app.controller("SplashCtrl", function($scope, $location) {

 
  $scope.mouseWheel = function($event, $delta, $deltaY)
  {
    console.log("delta", $delta);
    console.log("deltaY", $deltaY);

    if ($delta == -1 && $deltaY == -1)
    {
      console.log("down");
      $location.path('people');
    }
    else if ($delta == 1 && $deltaY == 1)
    {
      console.log("up");
      $location.path('technologies')
    }
  }

});
