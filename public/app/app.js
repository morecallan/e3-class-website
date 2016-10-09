"use strict";

var app = angular.module("ClassWebsite", ["ngRoute", "ngAnimate"])


<<<<<<< HEAD

=======
>>>>>>> master
app.config(function($routeProvider) {
    $routeProvider
        .when("/splash", {
            templateUrl: "partials/splash.html",
            // controller:  "splashCtrl"
        })
<<<<<<< HEAD
        .when("/us", {
            templateUrl: "partials/facesOne.html",
            controller:  "FacesCtrl"
=======
        .when("/people", {
            templateUrl: "partials/facesOne.html",
            // controller:  "projectCtrl"
>>>>>>> master
        })
        .otherwise("/people");
});
<<<<<<< HEAD

=======
>>>>>>> master
