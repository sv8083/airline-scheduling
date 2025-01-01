const express = require('express')
const bodyParser = require('body-parser')
const flightRouter = require('./api_v1/flights')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
// console.log(`App running on port ${port}.`)
})  

app.use('/flights', flightRouter)
