const express = require('express');
const router = express.Router();
const ticketsControll = require('../controllers/tickets');

router.get('/tickets/new', ticketsControll.new);
router.post('/tickets', ticketsControll.create);
router.post('/flights/:id/tickets', ticketsControll.addToFlight);


module.exports = router;