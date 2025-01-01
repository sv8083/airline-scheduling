const { Op } = require('sequelize');
const {Flight} = require('./models')

/**
 * Get tenant conversations by parameters.
 * @param {object} db - The Sequelize instance.
 * @param {object} params - Filter parameters.
 * @param {string} params.departureCity  - departure City Name.
 * @param {string} params.arrivalCity  - arrival City Name.
 * @param {string} params.name - Flight Name.
 * @param {boolean} [multiple=true] - Whether to fetch multiple records.
 * @returns {Promise<object|array>} The matching tenant flight(s).
 */
async function getDBFlightsByParams({ departureCity, arrivalCity, name, multiple = true }) {
    const whereClause = {};
    const include = [];

    // Filter by departure city name
    if (departureCity) {
        include.push({
            model: City,
            as: 'departureCity', // Alias defined in associations
            where: { name: departureCity },
        });
    }
    if (arrivalCity) {
        include.push({
            model: City,
            as: 'arrivalCity', // Alias defined in associations
            where: { name: arrivalCity },
        });
    }
    if (name) {
        whereClause.name = { [Op.like]: `%${name}%` };
    }
    if (multiple) {
        return await Flight.findAll({
            where: whereClause,
            order: [['id', 'ASC']], // Optional ordering
        });
    }
    else {
        return await Flight.findOne({
            where: whereClause,
            order: [['id', 'ASC']], // Optional ordering
        });
    }
}

/**
 * Get tenant conversations by parameters.
 * @param {number} id - Filter parameters.
 * @returns {Promise<object>} The matching tenant flight(s).
 */
async function getDBFlightsById(flightId) {
    const whereClause = {
        id: flightId,
    };
    return await Flight.findOne({
        where: whereClause,
        order: [['id', 'ASC']], // Optional ordering
    });
}
module.exports = {
    getDBFlightsByParams,
    getDBFlightsById
};
