app.factory('JSONFactory', function($http, $q){
  getAllStudents = function() {
    return $q(function(resolve) {
      $http({
        method: 'GET',
        url: '/data/class-info.json'
      }).success(function(data) {
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
        resolve(shuffledStudents);
      });
    });
  }
  return {getAllStudents:getAllStudents};
});
