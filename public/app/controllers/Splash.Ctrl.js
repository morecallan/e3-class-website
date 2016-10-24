app.controller("SplashCtrl", function($scope, $location) {

 
  $scope.mouseWheel = function($event, $delta, $deltaY)
  {
    // $scope.scrollValue = 0;

    // if ($delta == -1 && $deltaY == -1)
    // {
    //   var scrollValue = $scope.scrollValue;
    //   scrollValue -= scrollValue
    //   console.log("scrollValue", scrollValue);
    // }
    // else if ($delta == 1 && $deltaY == 1)
    // {
    //   var scrollValue = $scope.scrollValue;
    //   scrollValue++
    //   console.log("scrollValue", scrollValue);
    // }

    if ($delta == -1 && $deltaY == -1)
    {
      console.log("delta", $delta);
      console.log("delta", $deltaY);
      $location.path('people');
    }
    else if ($delta == 1 && $deltaY == 1)
    {
     console.log("delta", $delta);
      console.log("delta", $deltaY);
      $location.path('technologies');
    }
  }

});
