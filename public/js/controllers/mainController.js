
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
    
            beerFactory.addBeer(newBeer)
            .then(function(beer) {
            $scope.beers.push(beer);
            })
            .catch(function(error) {
            console.log(error)
            });
      }

      $scope.removeBeer = function() {
          var beerId = this.beer._id
            beerFactory.removeBeer(beerId)
            .then(function(beer) {
                for (var i = 0; i < $scope.beers.length; i++) {
                    if ($scope.beers[i]._id === beer._id) {
                        $scope.beers.splice(i, 1);
                        break;
                    }
                }
            })
            .catch(function(error) {
                 console.log(error)
            });
        }



      beerFactory.getBeers()
      .then(function(beers) {
        $scope.beers = beers;
      })
      .catch(function(error) {
        console.log(error)
      });

});