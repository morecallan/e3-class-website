app.controller("SplashCtrl", function($scope, deviceDetector, $location){

  var deviceInfo = this;
  deviceInfo.data = deviceDetector;
  deviceInfo.allData = JSON.stringify(deviceInfo, null, 2);
  if(deviceInfo.data.isMobile() && !deviceInfo.data.isTablet()) {
    $location.url('/mobile')
  }
  console.log("desktop", deviceInfo.data.isDesktop());
  console.log("mobile", deviceInfo.data.isMobile());
  console.log("tablet", deviceInfo.data.isTablet());
});
