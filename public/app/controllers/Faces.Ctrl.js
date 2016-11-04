app.controller("FacesCtrl", function($scope, JSONFactory, CommitsFactory){

// Creating empty array to store all students
  $scope.students = [];

  $scope.card = {
    image: "img/class-headshots/group_photo_placeholder.png",
    bio: "<p>const EveningCohort3 = { <br/> &nbsp;dayJobs: true,<br/> &nbsp;coffeeConsumed: '36,823lb', <br/> &nbsp;conqueredValleyOfDespair: true <br/></p>}",
    fullName: "Nashville Software School Evening Cohort 3",
    tech: true
  };

//Calling JSONFactory function that gets all students JSON object
  JSONFactory.getAllStudents()
  .then (function(allStudents){
    $scope.students = allStudents;
  });

  CommitsFactory.getCommitNumber()
  .then(function(commits){
    $scope.collectiveCommits = commits.commits.toString().split('');
    console.log($scope.collectiveCommits)
  })

  $scope.showStudentDetails = function(student, event){
    if (student.firstName === $scope.card.firstName) {
      //$(`#${$scope.card.firstName}`).removeClass("shiny")
      $(event.target).attr("id", "none");
      animateCard();
        $scope.card = {
          image: "img/class-headshots/group_photo_placeholder.png",
          bio: "<p>const EveningCohort3 = { <br/> &nbsp;dayJobs: true,<br/> &nbsp;coffeeConsumed: '36,823lb', <br/> &nbsp;conqueredValleyOfDespair: true <br/></p>}",
          fullName: "Nashville Software School Evening Cohort 3",
          tech: true
        };
    } else {
      //$(`#${$scope.card.firstName}`).removeClass("shiny")
      $(event.target).attr("id", "shiny");
      animateCard();
      $scope.card = student;
      $scope.card.tech = false;
    };
  };

  function animateCard() {
    $("#class-card").addClass("animated flip");
    $('#class-card').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
      $("#class-card").removeClass("animated flip");
    });
  };

});
