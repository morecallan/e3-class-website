"use strict";
app.controller("MobileCtrl", function($scope, $timeout, JSONFactory, $location, $anchorScroll, deviceDetector){
  $("#mobile-search-bar").addClass("hidden");


  var scrollCancel = 0;


  // init controller
  var controller = new ScrollMagic.Controller();


  // create a scene
  var scene = new ScrollMagic.Scene({
    offset: 0,
    reverse: true,
    duration: window.innerHeight,
    triggerHook: "onEnter"
  })
  .setClassToggle('#mobile-search-bar', 'hidden-top')
  controller.addScene(scene);
  // Creating empty array to store all students
  $scope.students = [];
  $scope.firstPerson = "";
  $scope.lastPerson = "";


  var deviceInfo = this;
  deviceInfo.data = deviceDetector;
  deviceInfo.allData = JSON.stringify(deviceInfo, null, 2);
  if(deviceInfo.data.os == "ios") {
    JSONFactory.getAllStudentsIOS()
      .then((allStudents) =>{
        $scope.students = allStudents;
        $scope.firstPerson = `mobile-${$scope.students[0].firstName}`;
      })
  } else {
    JSONFactory.getAllStudents()
      .then (function(allStudents){
        $scope.students = allStudents;
        $scope.firstPerson = `mobile-${$scope.students[0].firstName}`;
      });
  }

  $("#mobile-search-bar").keyup(() => {
    if($("#mobile-search-bar").val() === "") {
      scene.addTo(controller)
    } else {
      scene.remove();
    }
  })

  window.onscroll = function() {
    if($("#mobile-search-bar").hasClass("hidden")){
      if(scrollCancel === 0) {
        $("#mobile-search-bar").removeClass("hidden");
      } else {
        scrollCancel = 0;
      }
    }
  };

  $scope.scrollToFirstStudent = (ev) => {
    var id = $location.hash();
    $location.hash($scope.firstPerson);
    $anchorScroll();
    $location.hash(id);
    $("#mobile-search-bar").addClass("hidden");
    scrollCancel = 1
  }

  $scope.show = (that) => {
    $("#mobile-search-bar").addClass("hidden");
    scrollCancel = 1
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
      $("#mobile-search-bar").removeClass("hidden")
      scrollCancel = 0
    }
  };
});
