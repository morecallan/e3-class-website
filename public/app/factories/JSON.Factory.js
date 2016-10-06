app.factory('JSONFactory', function($http){
  getAllStudents = function() {
    $http({
      method: 'GET',
      url: '/data/class-info.json'
    }).success(function(data) {
      console.log(data.students);
      var shuffledStudents = []
      for(oneStudent in data.students){
        shuffledStudents.push(data.students[oneStudent]);
      };
      for(i in shuffledStudents){
        var randomNumber = Math.floor(Math.random()*19);
        var tempStudent = shuffledStudents[i];
        shuffledStudents[i] = shuffledStudents[randomNumber];
        shuffledStudents[randomNumber] = tempStudent;
      };
      return shuffledStudents;
    });
  }
  return {getAllStudents:getAllStudents};
});