const express = require('express');
// const { City, Flight } = require('./db/models');
const { getDBFlightsByParams, getDBFlightsById } = require('../db/read');
const { createDBFlight } = require('../db/create');
const { validateGetFlightQuerySchema, validatepostFlightReqBody } = require('./schema')

const router = express.Router();
//mergeParams: true To make path parameters (present in parent route) to accessible to sub-routes 

router.get('/', async (req, res) => {
    try {
        const flightsParams = await validateGetFlightQuerySchema(req.query);
        const flights = await getDBFlightsByParams(flightsParams)
        res.json(flights);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch cities' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newFlight = await validatepostFlightReqBody(req.body);
        const flight = await createDBFlight({
            "flight_id": "1",
            "departure_city_id": newFlight.departureCity,
            "arrival_city_id": newFlight.arrivalCity,
            "name": newFlight.name,
        });
        res.json(flight);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to cerate flight' });
    }
});


module.exports = router;