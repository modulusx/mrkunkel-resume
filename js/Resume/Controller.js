app.controller('Controller', ['$scope', 'resume', function($scope, resume) { 
  $scope.resume = resume.success(function(data) { 
    $scope.resume = data; 
  });
}]);
