/**
 * Update a flight by ID.
 * @param {string} flightId - The ID of the flight to update.
 * @param {object} updateData - The data to update.
 * @returns {Promise<number>} The number of rows updated.
 */
async function updateFlight(flightId, updateData) {
    const [updatedRowCount] = await Flight.update(updateData, {
        where: { id: flightId },
    });

    return updatedRowCount; // Returns the number of updated rows
}

module.exports = { updateFlight };
