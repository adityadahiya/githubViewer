(function() {

  var app = angular.module("myApp");

  var RepositoryController = function($scope, github, $routeParams) {

    var onRepoComplete = function(data) {
      $scope.repo = data;
      github.getContributors($scope.repo).then(onContributors, onError);
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };

    var onContributors = function(data) {
      $scope.contributors = data;
    };

    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;
    console.log($scope.username);
    $scope.contributorsSortOrder = "+login";
    github.getRepoDetails($scope.username, $scope.reponame)
      .then(onRepoComplete, onError);

  };

  app.controller("RepositoryController", ["$scope", "github", "$routeParams",
    RepositoryController
  ]);

}());