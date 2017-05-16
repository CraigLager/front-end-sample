var app = angular.module("app", ["ngRoute"]);

//app.run(['$rootScope', '$http', '$httpProvider',function ($rootScope, $http,$httpProvider) {
//    $httpProvider.defaults.withCredentials = true;
//}]);

app.config([
    "$httpProvider", function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }
]);

// http://stackoverflow.com/questions/11873570/angularjs-for-loop-with-numbers-ranges
/*
usage:
<div ng-repeat="n in [] | range:100">
  do something
</div>
*/
app.filter("range", function() {
    return function(input, total) {
        total = parseInt(total);

        for (var i = 0; i < total; i++) {
            input.push(i);
        }

        return input;
    };
});

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/views/home.html"
    })
    .when("/category/:id", {
        templateUrl : "/views/category.html"
    })
    .when("/product/:id", {
        templateUrl : "/views/product.html"
    });
});

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);


// utility functions
function isFunction(possibleFunction) {
    return typeof (possibleFunction) === typeof (Function);
}