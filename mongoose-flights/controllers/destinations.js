const Flight = require('../models/flight')

module.exports = {
    create,
}

function create(req, res){
    if(req.body.arrival == "") {
        d = new Date();
        year = d.getFullYear();
        month = d.getMonth();
        day = d.getDate();
       req.body.departs = new Date(year+1,month,day);
     }

    console.log(req.body);
	console.log(req.params.id);
    Flight.findById(req.params.id, function(err, flightFromTheDatabase) {
        flightFromTheDatabase.destinations.push(req.body);

        flightFromTheDatabase.save(function(err){
            console.log(flightFromTheDatabase)
            res.redirect(`/flights/${flightFromTheDatabase._id}`)
        })
    })
}