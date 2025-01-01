const express = require('express');
// const { City, Flight } = require('./db/models');
const { getDBFlightsByParams, getDBFlightsById } = require('../db/read');
// const { createDBFlight } = require('./db/create');
const { validateGetFlightQuerySchema } = require('./schema')

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


module.exports = router;