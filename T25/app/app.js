var myProj1 = angular.module('myProj1',['ngRoute', 'ngAnimate']);

myProj1.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'MyProj1ContactController'
  })
  .when('/contact-success', {
    templateUrl: 'views/contact-success.html',
    controller: 'MyProj1ContactController'
  })
  .when('/home', {
    templateUrl: 'views/home.html',
    controller: 'MyProj1Controller'
  })
  .when('/list', {
    templateUrl: "views/list.html",
    controller: "MyProj1Controller"
  }).otherwise({
    redirectTo: '/home'
  });

}]);


myProj1.controller('MyProj1Controller', ['$scope','$http', function($scope, $http){

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

  $scope.removeAll = function(){
    $scope.sports = [];
  }

  // the following are all converted to JSON and saved in external file sports.json
  //
  // $scope.sports = [
  //   {
  //     name: 'swimming',
  //     level: 2,
  //     cost: 200,
  //     active: true,
  //     marking: 'black',
  //     thumb: 'content/img/swimming.png'
  //   },
  //
  //   {
  //     name: 'badminton',
  //     level: 1,
  //     cost: 150,
  //     active: true,
  //     marking: 'green',
  //     thumb: 'content/img/badminton.png'
  //   },
  //
  //   {
  //     name: 'tennis',
  //     level: 2,
  //     cost: 200,
  //     active: false,
  //     marking: 'blue',
  //     thumb: 'content/img/tennis.png'
  //   },
  //
  //   {
  //     name: 'marathon',
  //     level: 3,
  //     cost: 300,
  //     active: true,
  //     marking: 'orange',
  //     thumb: 'content/img/marathon.png'
  //   },
  //
  //   {
  //     name: 'basketball',
  //     level: 4,
  //     cost: 500,
  //     active:true,
  //     marking: 'green',
  //     thumb: 'content/img/basketball.png'
  //   }
  //
  // ];
  //
  // console.log(angular.toJson($scope.sports));

  $http.get('data/sports.json').then(function(response){
      $scope.sports = response.data;
  });

}]);


myProj1.directive('randomSport',[function(){

  return {
    restrict: 'E',
    scope: {
      sports: '=',
      title: '='
    },
    templateUrl: '../views/random.html',
    transclude: true,
    replace: true, //to replace the customed directive random-sport with div in random.html
    controller: function($scope){
      $scope.random = Math.floor(Math.random()*5);
    },
  };

}]);


myProj1.controller('MyProj1ContactController', ['$scope', '$location', function($scope, $location){

  $scope.sendMessage = function(){
    $location.path('/contact-success');
  }

}]);
