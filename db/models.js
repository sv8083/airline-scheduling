const { DataTypes } = require('sequelize');
const sequelize = require('./session'); // Import the Sequelize instance

// Define Cities model
const City = sequelize.define('City', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define Flights model
const Flight = sequelize.define('Flight',
  {
    flight_id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      unique: true,
    },
    departure_city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: City,
        key: 'id',
      },
    },
    arrival_city_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: City,
        key: 'id',
      },
    },
  },
  {
    tableName: 'flights', // Custom table name
    timestamps: false,
  }
);

// Define relationships
// City.hasMany(Flight, { foreignKey: 'departureCityId', as: 'departingFlights' });
// City.hasMany(Flight, { foreignKey: 'arrivalCityId', as: 'arrivingFlights' });
// Flight.belongsTo(City, { foreignKey: 'departureCityId', as: 'departureCity' });
// Flight.belongsTo(City, { foreignKey: 'arrivalCityId', as: 'arrivalCity' });

module.exports = { City, Flight };
