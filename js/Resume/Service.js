app.factory('resume', ['$http', function($http) { 
  return $http.get('http://resume.mrkunkel.com/js/devops.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
