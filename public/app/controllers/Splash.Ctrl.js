
app.controller("SplashCtrl", function($scope, $location,deviceDetector) {

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

  var deviceInfo = this;
  deviceInfo.data = deviceDetector;
  deviceInfo.allData = JSON.stringify(deviceInfo, null, 2);
  if(deviceInfo.data.isMobile() && !deviceInfo.data.isTablet()) {
    $location.url('/mobile')
  }
})
