var myProj1 = angular.module('myProj1',[]);

myProj1.controller('MyProj1Controller', ['$scope', function($scope){
  $scope.message = 'Hello World!';
  $scope.sports = ['swimming','badminton','tennis','marathon','basketball'];
}]);
