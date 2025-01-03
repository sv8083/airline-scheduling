const express = require('express')
const bodyParser = require('body-parser')
const flightRouter = require('./api_v1/flights')
const sequelize = require('./db/session')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Test connection on startup
// (async () => {
//   try {
//     // await sequelize.authenticate();
//     console.log('Connected to PostgreSQL successfully!');
//   } catch (error) {
//       console.error('Failed to connect to PostgreSQL:', error.message);
//       process.exit(1); // Exit the process with failure
//   }
// })();

// app.listen(port, () => {
// // console.log(`App running on port ${port}.`)
// })


app.use('/flights', flightRouter)

const startServer = async () => {
  try {
    // Test database connection
    console.log('Testing PostgreSQL connection...');
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL successfully!');

    // Start the Express server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Startup Error:', {
      message: error.message,
      stack: error.stack,
      ...error, // Log other properties if available
    });
    process.exit(1); // Exit process on failure
  }
};

// Call the function to start the server
startServer();