var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/beers');

var Beer = require("./beerModel");

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var handler = function(res, next){
  return function(err, beer) {
    if (err) {
      return next(err);
    }
    res.send(beer);
  }
}


// to handle getting all beers from the db and their comments
app.get('/beers', function (req, res, next) {
  Beer.find(handler(res,next));
});



// to handle adding a beer
app.post('/beers', function(req, res, next) {
  Beer.create(req.body, handler(res,next));
});

// to handle deleting a beer
app.delete('/beers/:id', function(req, res, next) {
  Beer.findByIdAndRemove(req.params.id, handler(res,next));
});

// to handle updating a beer

app.put('/beers/:beerId', function(req, res, next) {
  Beer.findByIdAndUpdate(req.params.beerId, req.body, { new: true }, handler(res,next));
});

// to handle adding a rating to a beer

app.post('/beers/:id/ratings', function(req, res, next) {
  //code a suitable update object 
  //using req.body to retrieve the new rating
  var updateObject = {$inc : {numberOfRatings : 1, ratingTotal: req.body.rating}};

  Beer.findByIdAndUpdate(req.param.id, updateObject, { new: true }, handler(res,next));
});



// error handler to catch 404 and forward to main error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// main error handler
// warning - not for use in production code!
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});


app.listen(8000, function() {
  console.log("yo yo yo, on 8000!!")
});