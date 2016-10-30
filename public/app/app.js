"use strict";

var app = angular.module("ClassWebsite", ["ngRoute", "ngAnimate", "ngSanitize", "ng.deviceDetector"]);

app.config(function($routeProvider) {

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
        .when("/mobile", {
            templateUrl: "partials/mobile.html",
            controller: "MobileCtrl"
        })
        .otherwise("/splash");
});
app.run(($location) => {
    $location.path('/splash');
});