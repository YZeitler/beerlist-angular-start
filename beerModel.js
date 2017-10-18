var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var beerSchema = new Schema({
    name: { type: String },
    style: { type: String },
    image_url: { type: String },
    abv: { type: Number },
    ratingTotal: { type: Number },   // sum of the ratings
    numberOfRatings: { type: Number }  //  ratings count
  });
  
  var Beer = mongoose.model("Beer", beerSchema);
  
  module.exports = Beer;
