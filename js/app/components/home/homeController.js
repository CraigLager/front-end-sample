app.controller("homeController", [
    "$scope", "$category",  function($scope, $category) {

        $scope.init = function() {
        	$category.getIndex(function(res){
        		$scope.categories = [];

        		res.forEach(function(id){
        			$category.get(id, function(cat){
        				$scope.categories.push(cat);
                        console.log("categories[" + ($scope.categories.length -1) + "]", cat);
        			})
        		})

        	})
        };
    }
])