var myProj1 = angular.module('myProj1',[]);

myProj1.controller('MyProj1Controller', ['$scope', function($scope){

  $scope.removeSport = function(sport){
    var removeSport = $scope.sports.indexOf(sport);
    $scope.sports.splice(removeSport,1);
  }

  $scope.sports = [
    {
      name: 'swimming',
      level: 2,
      cost: 200,
      active: true,
      marking: 'black'
    },

    {
      name: 'badminton',
      level: 1,
      cost: 150,
      active: true,
      marking: 'green'
    },

    {
      name: 'tennis',
      level: 2,
      cost: 200,
      active: false,
      marking: 'blue'
    },

    {
      name: 'marathon',
      level: 3,
      cost: 300,
      active: true,
      marking: 'orange'
    },

    {
      name: 'basketball',
      level: 4,
      cost: 500,
      active:false,
      marking: 'green'
    }

  ];

}]);
