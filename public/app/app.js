"use strict";

var app = angular.module("ClassWebsite", ["ngRoute", "ngAnimate", "ng.deviceDetector"])

app.config(["ng.deviceDetector", function($routeProvider, deviceDetector) {
    var deviceInfo = this;
    deviceInfo.data = deviceDetector;
    deviceInfo.allData = JSON.stringify(deviceInfo, null, 2);
     console.log("desktop", deviceInfo.data.isDesktop());
    console.log("mobile", deviceInfo.data.isMobile());
     console.log("tablet", deviceInfo.data.isTablet());



    $routeProvider
        .when("/splash", {
            templateUrl: "partials/splash.html",
            // controller:  "splashCtrl"
        })
        .when("/people", {
            templateUrl: "partials/facesOne.html",
            controller:  "FacesCtrl"
        })
        .otherwise("/people");

    // var deviceInfo = this;
    // deviceInfo.data = deviceDetector;
    // deviceInfo.allData = JSON.stringify(deviceInfo, null, 2);
    //  console.log("desktop", deviceInfo.data.isDesktop());
    // console.log("mobile", deviceInfo.data.isMobile());
    //  console.log("tablet", deviceInfo.data.isTablet());
}]);
