"use strict";

var app = angular.module("ClassWebsite", ["ngRoute", "ngAnimate"])



app.config(function($routeProvider) {
    $routeProvider
        .when("/splash", {
            templateUrl: "partials/splash.html",
            controller:  "splashCtrl"
        })
        .when("/us", {
            templateUrl: "partials/facesOne.html",
            controller:  "FacesCtrl"
        })
        .otherwise("/splash");
});

