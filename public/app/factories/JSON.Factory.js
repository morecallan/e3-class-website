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
          var randomNumber = Math.floor(Math.random()*18);
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
        let techs = {
          front: [],
          server: [],
          tools: []
        }
        let tData = data.technologies;
        for (let i in tData) {
          if (tData[i].section === 'front') {
            techs.front.push(tData[i]);
          } else if (tData[i].section === 'server') {
            techs.server.push(tData[i]);
          } else if (tData[i].section === 'tools') {
            techs.tools.push(tData[i]);
          };
        };
        resolve(techs);
      });
    });
  };
  return {getAllStudents:getAllStudents, getTechnologies:getTechnologies};
});
