
app.controller("FacesCtrl", function($scope, $location, JSONFactory, CommitsFactory){


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

  CommitsFactory.getCommitNumber()
  .then(function(commits){
    $scope.collectiveCommits = commits.commits.toString().split('');
    console.log($scope.collectiveCommits)
  })

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


  $scope.counter = 0;

  $scope.mouseWheel = function($event, $delta, $deltaY)
  {
    

    if ($delta == -1 && $deltaY == -1)
    {
      $scope.counter--
    }
    else if ($delta == 1 && $deltaY == 1)
    {
      $scope.counter++
    }

    if($scope.counter == 3){

      $location.path('splash');
    }
    else if($scope.counter == -3)
    {

      $location.path('technologies');

    }
}
 
});
