app.factory("$product", ["$http", function($http) {
        var factory ={};

        factory.get = function(id, callback){
            $http({
              method: 'GET',
              url: '/api/product/' + id + '.json'
            }).then(function successCallback(response) {
                callback(response.data);
              }, function errorCallback(response) {
                console.log('ERROR',response);
              });
        }
        
        return factory;
    }
]);