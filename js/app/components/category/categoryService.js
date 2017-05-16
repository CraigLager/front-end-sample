app.factory("$category", ["$http", function($http) {
        var factory ={};

        factory.get = function(id, callback){
            $http({
              method: 'GET',
              url: '/api/category/' + id + '.json'
            }).then(function successCallback(response) {
                callback(response.data);
              }, function errorCallback(response) {
                console.log('ERROR',response);
              });
        }

        factory.getIndex = function(callback){
                      $http({
              method: 'GET',
              url: '/api/category/index.json'
            }).then(function successCallback(response) {
                callback(response.data);
              }, function errorCallback(response) {
                console.log('ERROR',response);
              });
        }
        
        return factory;
    }
]);