app.controller("categoryController", [
    "$scope", "$category", "$product","$routeParams",  function($scope, $category,$product, $routeParams) {

        $scope.init = function() {
        	$category.get($routeParams.id, function(res){
        		console.log(res);
        		$scope.category = res;

        		$scope.category.products = [];
        		$scope.category.productIds.forEach(function(id){
        			$product.get(id, function(product){
        				$scope.category.products.push(product);
        			})
        		})

        	})
        };
    }
])