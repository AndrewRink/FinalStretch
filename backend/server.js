//Dependencies
require('dotenv').config();
require('./auth')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const { Sequelize } = require('sequelize')
const cors = require('cors')
const passport = require('passport')

//configuration 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


//root
app.get('/', (req,res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>')
})

app.get('/auth/google', 
passport.authenticate('google', {scope: ['email', 'profile']})
)

app.get('/google/callback', 
    passport.authenticate('google', {
    successRedirect:'/protected',
    failureRedirect:'/auth/failure',
    })
)

app.get('/auth/failure', (req, res) => {
    res.send('something went wrong')
})

app.get('/protected', (req, res) => {
    res.send('Hello!');
})

//controllers
const workoutController = require('./controllers/workout_controller')
app.use('/workoutlist', workoutController)

//PORT
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})