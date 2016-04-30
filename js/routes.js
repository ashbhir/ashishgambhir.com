angular.module('ashishApp',['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: "templates/home/index.html"
    })
    .when('/designing',{
      templateUrl: "templates/designing/index.html"
    })
    .when('/coding',{
      templateUrl: "templates/coding/index.html"
    })
    .when('/photography',{
      templateUrl: "templates/photography/index.html"
    })
    .otherwise({
      redirectTo: "/"
    })
})
;