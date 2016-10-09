"use strict";

var app = angular.module("ClassWebsite", ["ngRoute", "ngAnimate"])



app.config(function($routeProvider) {
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
});
