"use strict";
app.controller("MobileCtrl", function($scope, JSONFactory, $anchorScroll, deviceDetector){

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
  $scope.lastPerson = "";


  var deviceInfo = this;
  deviceInfo.data = deviceDetector;
  deviceInfo.allData = JSON.stringify(deviceInfo, null, 2);
  if(deviceInfo.data.os == "ios") {
    JSONFactory.getAllStudentsIOS()
      .then((allStudents) =>{
        $scope.students = allStudents;
        $("#mobile-search-bar").addClass("ios-hidden");
      })
  } else {
    JSONFactory.getAllStudents()
      .then (function(allStudents){
        $scope.students = allStudents;
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
