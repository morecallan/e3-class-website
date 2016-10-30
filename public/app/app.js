"use strict";

var app = angular.module("ClassWebsite", ["ngRoute", "ngAnimate", "ngSanitize", "ng.deviceDetector"]);

app.config(function($routeProvider, deviceDetector) {

    $routeProvider
        .when("/splash", {
            templateUrl: "partials/splash.html",
            controller:  "SplashCtrl"
        })
        .when("/people", {
            templateUrl: "partials/facesOne.html",
            controller:  "FacesCtrl"
        })
        .when("/technologies", {
            templateUrl: "partials/technologies.html",
        })
        .otherwise("/splash");
});

var deviceInfo = this;
deviceInfo.data = deviceDetector;
deviceInfo.allData = JSON.stringify(deviceInfo, null, 2);
 console.log("desktop", deviceInfo.data.isDesktop());
console.log("mobile", deviceInfo.data.isMobile());
 console.log("tablet", deviceInfo.data.isTablet());