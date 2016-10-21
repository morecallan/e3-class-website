app.factory('CommitsFactory', function($http, $q){

  getCommitNumber = function() {
    return $q(function(resolve, reject) {
      $http({
        method: 'GET',
        url: 'https://class-commits.herokuapp.com/api/class-commits'
      }).success(function(data) {
        console.log(data)
        resolve(data);
      });
    });
  }
  return {getCommitNumber:getCommitNumber};
});
