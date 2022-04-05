const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: String,
    price: Number,
    // flight: [{type: Schema.Types.ObjectId, required: true, unique: true, ref: 'Flight'}]
  });


module.exports = mongoose.model('Ticket', ticketSchema);