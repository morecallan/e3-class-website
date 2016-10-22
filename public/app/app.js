"use strict";

var app = angular.module("ClassWebsite", ["ngRoute", "ngAnimate", "ngSanitize", "monospaced.mousewheel"])



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
        .otherwise("/splash");
});
