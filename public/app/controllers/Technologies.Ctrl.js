app.controller('TechnologiesCtrl', function($scope, JSONFactory) {
  $scope.technologies = {};
  JSONFactory.getTechnologies().then((techs) => {
    $(document).ready(function(){
      $('.tooltipped').tooltip({delay: 50});
    });
    $scope.technologies = techs;
  })
})