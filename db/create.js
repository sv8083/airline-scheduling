const { Flight } = require('./models');

/**
 * Create a new flight.
 * @param {object} flightData - The data for the new flight.
 * @returns {Promise<object>} The newly created flight record.
 */
async function createDBFlight(flightData) {
    const newFlight = await Flight.create(flightData);
    return newFlight;
}

module.exports = { createDBFlight };
