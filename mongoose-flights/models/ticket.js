const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: String,
    price: Number,
  });


module.exports = mongoose.model('Ticket', ticketSchema);