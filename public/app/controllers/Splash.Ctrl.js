app.controller("SplashCtrl", function($scope, $location) {

  $scope.counter = 0;

    
  $scope.mouseWheel = function($event, $delta, $deltaY)
  {
    

    if ($delta == -1 && $deltaY == -1)
    {
      $scope.counter--
    }
    
    if($scope.counter == -3)
    {

      $location.path('people');

    }
    
  }

});
