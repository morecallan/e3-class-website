"use strict";
app.controller("MobileCtrl", function($scope, JSONFactory, $anchorScroll){

  // init controller
  var controller = new ScrollMagic.Controller();

  // create a scene
  var scene = new ScrollMagic.Scene({
    offset: 0,
    reverse: true,
    duration: window.innerHeight,
    triggerHook: "onEnter"
  })
  .setClassToggle('#mobile-search-bar', 'hidden')
  controller.addScene(scene);
  // Creating empty array to store all students
  $scope.students = [];
  $scope.lastPerson = "";
  JSONFactory.getAllStudents()
  .then (function(allStudents){
    $scope.students = allStudents;
  });

  $("#mobile-search-bar").keyup(() => {
    if($("#mobile-search-bar").val() === "") {
      scene.addTo(controller)
    } else {
      scene.remove();
    }
  })

  $scope.show = (that) => {
    $('#mobile-hide-' + $scope.lastPerson).addClass('hidden');
    if ($scope.lastPerson !== that.student.firstName) {
      $scope.lastPerson = that.student.firstName;
      let mainId = 'mobile-' + that.student.firstName;
      let hideId = '#mobile-hide-' + that.student.firstName;
      // $anchorScroll(mainId);
      // $anchorScroll.yOffset = 100;
      if ($(hideId).hasClass('hidden')) {
        //window.scrollTo(0, 500);
        $(hideId).removeClass('hidden');
      }
    } else {
      $scope.lastPerson = "";
    }
  };
});
