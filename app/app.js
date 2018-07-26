'use strict';

// Declare app level module which depends on views, and components
var app =
angular.module('myApp', [
  'ngRoute',
  'myApp.version'
]);

app.config(['$locationProvider', '$routeProvider',  function($locationProvider, $routeProvider, $scope,$window) {
  //$locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
  $routeProvider
      .when("/",{
            templateUrl: "main/main.html",
            controller: "MainController"
          })
      .when("/user/:username",
          {
            templateUrl: "user/userdetails.html",
            controller: "UserController",
            resolve: {
                users: function (github, $window) {
                    return github.getUser($window.localStorage.getItem('name'));
                }
            }
          })
      .when("/repo/:username/:reponame",
          {
            templateUrl: "repo/repodetails.html",
            controller: "RepositoryController"
          })

      .otherwise({redirectTo: '/'});
}]);
