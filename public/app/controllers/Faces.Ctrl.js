app.controller("FacesCtrl", function($scope, JSONFactory, CommitsFactory){



// Creating empty array to store all students
  $scope.students = [];

  $scope.card = {
    image: "https://firebasestorage.googleapis.com/v0/b/classwebsitee3.appspot.com/o/2016_11_19_EC3_Group_0032_T.jpg?alt=media&token=79b19d0e-cb0d-4b4e-8ff0-93e758ce93e9",
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
    $scope.collectiveCommits = commits.commits.collectiveCommits.toString().split('');
  })

  $scope.showStudentDetails = function(student, event){
    if (student.firstName === $scope.card.firstName) {
      //$(`#${$scope.card.firstName}`).removeClass("shiny")
      //$(event.target).removeAttr("id");
      removeHalo();
      animateCard();
        $scope.card = {
          image: "https://firebasestorage.googleapis.com/v0/b/classwebsitee3.appspot.com/o/2016_11_19_EC3_Group_0032_T.jpg?alt=media&token=79b19d0e-cb0d-4b4e-8ff0-93e758ce93e9",
          bio: "<p>const EveningCohort3 = { <br/> &nbsp;dayJobs: true,<br/> &nbsp;coffeeConsumed: '36,823lb', <br/> &nbsp;conqueredValleyOfDespair: true <br/></p>}",
          fullName: "Nashville Software School Evening Cohort 3",
          tech: true
        };
    } else {
      //$(`#${$scope.card.firstName}`).removeClass("shiny")
      //$(event.target).removeAttr("id");
      removeHalo();
      applyHalo(event);
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

  function removeHalo(){
    if ($("#shiny")){
      $("#shiny").removeAttr("id");
    };
  };

  function applyHalo(event){
    console.log(event.target);
    console.log($(event.target).prop("nodeName"));
    if ($(event.target).prop("nodeName") === "IMG"){
      $(event.target).attr("id", "shiny");
    }
  };

});
