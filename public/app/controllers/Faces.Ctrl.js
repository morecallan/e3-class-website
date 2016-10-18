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
    if (student.firstName === $scope.card.firstName) {
      $(`#${$scope.card.firstName}`).removeClass("shiny")
      animateCard();
        $scope.card = {
          image: "img/class-headshots/group_photo_placeholder.png",
          bio: "<p>const EveningCohort3 = { <br/> &nbsp;dayJobs: true,<br/> &nbsp;coffeeConsumed: '36,823lb', <br/> &nbsp;conqueredValleyOfDespair: true <br/></p>}",
          fullName: "Nashville Software Schoool Evening Cohort 3",
          tech: true
        };
    } else {
      $(`#${$scope.card.firstName}`).removeClass("shiny")
      animateCard();
      $scope.card = student;
      $scope.card.tech = false;
      $(`#${$scope.card.firstName}`).addClass("shiny")
    };
  };
  function animateCard() {
    $("#class-card").addClass("animated flip");
    $('#class-card').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
      $("#class-card").removeClass("animated flip");
    });
  };

});