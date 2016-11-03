app.factory('JSONFactory', function($http, $q){
  getAllStudents = () => {
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
  };
  getTechnologies = () => {
    return $q(function(resolve) {
      $http({
        method: 'GET',
        url: '/data/tech-info.json'
      }).success(function(data) {
        let techs = {}
        for (let i in data) {
          if (data[i].section === 'front') {
            techs.front = data[i];
          } else if (data[i].section === 'server') {
            techs.server = data[i];
          } else if (data[i].section === 'tools') {
            techs.tools = data[i];
          };
        };
        resolve(techs);
      });
    });
  };
  return {getAllStudents:getAllStudents, getTechnologies:getTechnologies};
});