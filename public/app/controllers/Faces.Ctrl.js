app.controller("FacesCtrl", function($scope, JSONFactory){

// Creating empty array to store all students
  $scope.students = [];

  $scope.card = {
    image: "img/class-headshots/group_photo_placeholder.png",
    bio: "<p>const EveningCohort3 = { <br/> &nbsp;dayJobs: true,<br/> &nbsp;coffeeConsumed: '36,823lb', <br/> &nbsp;conqueredValleyOfDespair: true <br/></p>}",
    fullName: "Nashville Software Schoool Evening Cohort 3",
    tech: true
  };

//Calling JSONFactory function that gets all students JSON object
  JSONFactory.getAllStudents()
  .then (function(allStudents){
    $scope.students = allStudents;
  });

  $scope.showStudentDetails = function(student){
    $scope.card = student;
  };
});
