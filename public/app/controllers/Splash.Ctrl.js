app.controller("SplashCtrl", function($scope, $rootScope, deviceDetector, $location){
  $rootScope.topNav = false;

  var deviceInfo = this;
  deviceInfo.data = deviceDetector;
  deviceInfo.allData = JSON.stringify(deviceInfo, null, 2);
  if(deviceInfo.data.isMobile() && !deviceInfo.data.isTablet()) {
    $location.url('/mobile')
  }
});
