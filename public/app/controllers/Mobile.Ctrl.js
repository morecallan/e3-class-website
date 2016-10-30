app.controller("MobileCtrl", function($scope, JSONFactory){
  // Creating empty array to store all students
  $scope.students = [];
  $scope.fuck = true;
  JSONFactory.getAllStudents()
  .then (function(allStudents){
    $scope.students = allStudents;
  });

  $scope.show = (that) => {
    console.log("hi", that);
    let mainId = '#mobile-' + that.student.firstName;
    let hideId = '#mobile-hide-' + that.student.firstName;
    if ($(hideId).hasClass('hidden')) {
      $(document).scrollTop(200);
      $(hideId).removeClass('hidden');
    } else {
      $(hideId).addClass('hidden');
    }
    
  }

});

$("#mobile-search-bar")