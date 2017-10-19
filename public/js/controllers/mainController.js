
app.controller('mainController', function($scope, beerFactory) {
 

    $scope.testArray = [
        {
            name: 'bob',
            relatives: [
                {
                    name: 'terry',
                    friends: ['a', 'b', 'c']
                }, 
                {
                    name: 'carl',
                    friends: ['a', 'c']
                },
            ] 
        },
        {
            name: 'haim',
            relatives: [
                {
                    name: 'this man',
                    friends: ['a', 'c']
                }, 
                {
                    name: 'sup',
                    friends: ['a', 'c', 'f']
                },
            ] 
        }
    ]

    $scope.beers = [];
    
      $scope.addBeer = function() {
          var newBeer = {};
        beerFactory.addBeer(newBeer);
      }

      $scope.removeBeer = function() {
        beerFactory.removeBeer(this);
      }

      beerFactory.getBeers()
      
      .then(function(beers) {
        $scope.beers = beers;
      })
      .catch(function(error) {
        console.log(error)
      });

});