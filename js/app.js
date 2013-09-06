"use strict";


// Declare app level module which depends on filters, and services
angular.module("myApp", ["myApp.filters", "myApp.services", "myApp.directives", "ngGrid", "ui.bootstrap", "ui", "angles",])
.config(["$routeProvider", "$httpProvider", function ($routeProvider, $httpProvider) {
    $routeProvider.when("/view1", { templateUrl: "partials/partial1.html", controller: "MyCtrl1" });
    $routeProvider.when("/view2", { templateUrl: "partials/partial2.html", controller: "MyCtrl2" });
    $routeProvider.when("/view3", { templateUrl: "partials/partial3.html", controller: "MyCtrl3" });
    $routeProvider.when("/details/:id", { templateUrl: "partials/details.html", controller: "details" });
    $routeProvider.when("/stackapp", { templateUrl: "partials/stackapp.html", controller: "stackapp" });
    $routeProvider.when("/paging", { templateUrl: "partials/paging.html", controller: "paging" });
    $routeProvider.when("/cart", { templateUrl: "partials/cart.html", controller: "CartController" });
    $routeProvider.when("/todos", { templateUrl: "partials/todos.html", controller: "TodoController" });
    $routeProvider.when("/people", { templateUrl: "partials/people.html", controller: "PeopleController"});
    $routeProvider.when("/chart", { templateUrl: "partials/charts.html", controller: "chartCtrl"});
    $routeProvider.when("/showdown", { templateUrl: "partials/markdown.html", controller: "markdownCtrl"});  
    $routeProvider.when("/contacts", { templateUrl: "partials/contacts.html", controller: "contactsCtrl"});
    $routeProvider.when("/random", { templateUrl: "partials/random.html", controller: "randomCtrl"});
    $routeProvider.otherwise({ redirectTo: "/view1" });
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
} ]);

