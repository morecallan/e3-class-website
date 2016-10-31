app.controller("MobileCtrl", function($scope, JSONFactory){
  // Creating empty array to store all students
  $scope.students = [];
  $scope.lastPerson = "";
  JSONFactory.getAllStudents()
  .then (function(allStudents){
    $scope.students = allStudents;
  });

  $scope.show = (that) => {
    $('#mobile-hide-' + $scope.lastPerson).addClass('hidden');
    if ($scope.lastPerson !== that.student.firstName) {
      $scope.lastPerson = that.student.firstName;
      let mainId = '#mobile-' + that.student.firstName;
      let hideId = '#mobile-hide-' + that.student.firstName;
      if ($(hideId).hasClass('hidden')) {
        $(document).scrollTop("200");
        console.log(window.scrollY);
        $(hideId).removeClass('hidden');
      } 
    } else {
      $scope.lastPerson = "";
    }
  }

  $scope

});

$("#mobile-search-bar")