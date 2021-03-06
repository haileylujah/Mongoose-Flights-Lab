const Flight = require("../models/flight");
const Ticket = require('../models/ticket');


function show(req, res) {
  Flight.findById(req.params.id)
  .populate('flightsTickets').exec(function(err, flight) {
    Ticket.find(
     {_id: {$nin: flight.flightsTickets}}, 
     function(err, tickets) {
       console.log(tickets);
       res.render('flights/show', {
         title: 'Flight Detail', flight: flight, tickets: tickets
       });
     }
   );
  });
}

function newFlight(req, res) {
  res.render("flights/new", { title: "Add Flights" });
}

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { 

      flights,
      title: "All Flights",
    });
  });
}

function create(req, res) {
 console.log(req.body);

  if((req.body.flightNo < 10)||(req.body.flightNo > 9999)) req.body.flightNo = "n/a";

  if(req.body.departs == "") {
     d = new Date();
     year = d.getFullYear();
     month = d.getMonth();
     day = d.getDate();
    req.body.departs = new Date(year+1,month,day);
  }
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }



  const flight = new Flight(req.body);
  flight.save(function (err) { 

    console.log(err, " this err");
    if (err) return res.redirect("/flights/new");
    console.log(flight);

    res.redirect("/flights");
  });





}

module.exports = {
  new: newFlight,
  create,
  index,
  show,
};
