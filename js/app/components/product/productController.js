app.controller("productController", [
    "$scope", "$product", "$routeParams",  function($scope, $product, $routeParams) {

        $scope.init = function() {
        	    $product.get($routeParams.id, function(res){
        	    	$scope.product = res;
        	    	console.log("product", $scope.product);
        		})
        };
    }
])