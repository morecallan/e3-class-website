app.controller("MobileCtrl", function($scope, JSONFactory){
  // Creating empty array to store all students
  $scope.students = [];

  JSONFactory.getAllStudents()
  .then (function(allStudents){
    $scope.students = allStudents;
  });

});