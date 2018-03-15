var myProj1 = angular.module('myProj1',[]);

myProj1.controller('MyProj1Controller', ['$scope', function($scope){

  $scope.sports = [
    {
      name: 'swimming',
      level: 2,
      cost: 200,
      active: true
    },

    {
      name: 'badminton',
      level: 1,
      cost: 150,
      active: true
    },

    {
      name: 'tennis',
      level: 2,
      cost: 200,
      active: false
    },

    {
      name: 'marathon',
      level: 3,
      cost: 300,
      active: true
    },

    {
      name: 'basketball',
      level: 4,
      cost: 500,
      active:false
    }

  ];

}]);
