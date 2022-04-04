const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const destinationSchema = new Schema({
  desAirport: String,
  arrival: Date,
});

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: String,
    departs: Date,
    destinations: [destinationSchema]
  });

  module.exports = mongoose.model('Flight', flightSchema);