
(function(){  

  var app = angular.module("myApp");
  
  var MainController = function($scope, $interval, $location, $window){
    
    var decrementCountdown = function(){
      $scope.countdown -=1;
      if($scope.countdown < 1){
        $scope.search($scope.username);
      }
    };
    
    var countdownInterval = null;
    var startCountdown= function(){
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };
    
    $scope.search = function(username){
        $window.localStorage.setItem('name', username);
      if(countdownInterval){
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
        $location.path("/user/" + username);
      }
    };
    
    $scope.username = "Angular";
    $scope.countdown = 10;
    startCountdown();
  };
  
  app.controller("MainController", ["$scope", "$interval", "$location","$window", MainController]);
  
}());