app.directive('aboutInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/Resume/aboutInfoDirective.html' 
  }; 
});
app.directive('awardInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/Resume/awardInfoDirective.html' 
  }; 
});
app.directive('contactInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/Resume/contactInfoDirective.html' 
  }; 
});
app.directive('degreeInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/Resume/degreeInfoDirective.html' 
  }; 
});
app.directive('expInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/Resume/expInfoDirective.html' 
  }; 
});
app.directive('jobInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/Resume/jobInfoDirective.html' 
  }; 
});
app.directive('projectInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/Resume/projectInfoDirective.html' 
  }; 
});
app.directive('socialInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/Resume/socialInfoDirective.html' 
  }; 
});
