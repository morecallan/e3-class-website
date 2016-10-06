app.controller("FaceCtrl", function($scope, JSONFactory){

// Creating empty array to store all students
  $scope.students = [];
  $scope.card = {
    image: "image/turdface.png",
    bio: "const EveningCohort3={ dayJobs: true, coffeeConsumed: '36,823lb' conqueredValleyOfDespair: true}"
  };

//Calling JSONFactory function that gets all students JSON object
  JSONFactory.getAllStudents() 
  .then (function(allStudents){

    $scope.students = allStudents;

  })

  function showStudentDetails(student){

    $scope.card = student;

  }



})