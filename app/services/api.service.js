(function(){
    var github = function($http) {
        var base = 'https://api.github.com/';
        var getUser = function(username) {
            return $http.get(base+"users/" + username)
                .then(function(response) {
                    return response.data;
                });
        };

        var getRepos = function(user) {
            return $http.get(user.repos_url)
                .then(function(response) {
                    return response.data;
                });
        };

        var getRepoDetails = function(username, repo) {
            return $http.get(base+"repos/" + username + "/" + repo)
                .then(function(response) {
                    return response.data;
                });
        };

        var getContributors = function(repo) {
            return $http.get(repo.contributors_url)
                .then(function(response) {
                    return response.data;
                });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepoDetails: getRepoDetails,
            getContributors : getContributors
        };

    };

    var module = angular.module("myApp");
    module.factory("github", github);
}());