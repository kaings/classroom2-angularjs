var myProj1 = angular.module('myProj1',[]);

myProj1.controller('MyProj1Controller', ['$scope', function($scope){

  $scope.removeSport = function(sport){
    var removeSport = $scope.sports.indexOf(sport);
    $scope.sports.splice(removeSport,1);
  }

  $scope.addSport = function(){
    $scope.sports.push({
      name: $scope.newsport.name,
      level: parseInt($scope.newsport.level),
      cost: parseInt($scope.newsport.cost),
      marking: $scope.newsport.marking,
      active: true
    });

    $scope.newsport.name = "";
    $scope.newsport.level = "";
    $scope.newsport.cost = "";
    $scope.newsport.marking = "";
  }

  $scope.sports = [
    {
      name: 'swimming',
      level: 2,
      cost: 200,
      active: true,
      marking: 'black',
      thumb: 'content/img/swimming.png'
    },

    {
      name: 'badminton',
      level: 1,
      cost: 150,
      active: true,
      marking: 'green',
      thumb: 'content/img/badminton.png'
    },

    {
      name: 'tennis',
      level: 2,
      cost: 200,
      active: false,
      marking: 'blue',
      thumb: 'content/img/tennis.png'
    },

    {
      name: 'marathon',
      level: 3,
      cost: 300,
      active: true,
      marking: 'orange',
      thumb: 'content/img/marathon.png'
    },

    {
      name: 'basketball',
      level: 4,
      cost: 500,
      active:true,
      marking: 'green',
      thumb: 'content/img/basketball.png'
    }

  ];

}]);
