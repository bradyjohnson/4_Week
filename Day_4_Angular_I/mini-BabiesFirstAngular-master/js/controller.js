/**
 * Created by williambjohnson on 2/7/15.
 */
var app = angular.module('myApp');

app.controller('MainController', function($scope){
  $scope.users = [];
  $scope.addUser = function(){
    console.log($scope.newUser);
    $scope.users.push($scope.newUser);
    $scope.newUser = {};
  };

  $scope.deleteUser = function(index){
    $scope.users.splice(index, 1);
  }

});
