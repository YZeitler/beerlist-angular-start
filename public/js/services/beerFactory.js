app.factory('beerFactory', function($http) {

    var beerFactory = {};
    
    beerFactory.getBeers = function() {
        return $http.get('/beers')
          .then(function(response) {
            return angular.copy(response.data);
          });
      };
    
      beerFactory.addBeer = function(newBeer) {
      };
    
      beerFactory.removeBeer = function(beerToRemove) {
      };
    
      return beerFactory;
});
