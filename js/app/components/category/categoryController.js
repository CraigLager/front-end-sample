app.controller("categoryController", [
    "$scope", "$category", "$product","$routeParams",  function($scope, $category,$product, $routeParams) {

        $scope.init = function() {
        	$category.get($routeParams.id, function(res){
        		$scope.category = res;
                console.log("category", $scope.category);
        		
                $scope.category.products = [];
        		$scope.category.productIds.forEach(function(id){
        			$product.get(id, function(product){
        				$scope.category.products.push(product);
                        console.log("category.products[" + ($scope.category.products.length -1) + "]", product);
        			})
        		})

        	})
        };
    }
])