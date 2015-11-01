var app = angular.module('app', []);
app.controller('myCtrl', function($scope,$http) {

  $http.get('data/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.add = function(){
    $scope.phones.push({
      'name' : $scope.enteredName,
      'snippet' : $scope.enteredSnippet
    });
    $scope.enteredName = "";
    $scope.enteredSnippet = "";
  };
  $scope.orderby = 'name';

});
