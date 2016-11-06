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
            controller: "TechnologiesCtrl"
        })
        .when("/mobile", {
            templateUrl: "partials/mobileCards.html",
            controller: "MobileCtrl"
        })
        .when("/mobile", {
            templateUrl: "partials/mobileCards.html",
            controller: "MobileCtrl"
        })
        .otherwise("/splash");
});
app.run(($location) => {
    $location.path('/splash');
});