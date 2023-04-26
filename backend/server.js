//Dependencies
require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { Sequelize } = require('sequelize')
const cors = require('cors')


//configuration 
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


//root
app.get('/', (req,res) => {
    res.status(200).json({
        message: "Welcome to FinalStretch"
    })
})

//controllers
const workoutController = require('./controllers/workout_controller')
app.use('/workoutlist', workoutController)

app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})