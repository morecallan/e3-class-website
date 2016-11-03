app.controller('TechnologiesCtrl', ($scope) => {
  $('.tooltipped').tooltip();
  $scope.technologies = {}
  JSONFactory.getTechnologies().then((techs) => {
    $scope.technologies = techs;
  })
})