(function(){
  
  var app = angular.module("myApp");
  
  var UserController = function($scope, github, $routeParams,$location, users){

    var onError = function(){
      $scope.error = "Could not fetch the data";
    };
    
    var onRepos = function(data){
      $scope.repos = data;
      $location.hash("userDetails");
    };
    
    $scope.username = $routeParams.username;
    console.log($scope.username);
    $scope.repoSortOrder = "-stargazers_count";
    //github.getUser($scope.username).then(onUserComplete, onError);
      $scope.user = users;
      github.getRepos($scope.user).then(onRepos, onError);
    
  };

  app.controller("UserController", ["$scope", "github", "$routeParams","$location",'users', UserController]);
  
}());