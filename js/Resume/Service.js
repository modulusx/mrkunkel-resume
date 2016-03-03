app.factory('resume', ['$http', function($http) { 
  return $http.get('/js/devops.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
