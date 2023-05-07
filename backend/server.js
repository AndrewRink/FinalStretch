//Dependencies
require('dotenv').config();
require('./auth');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const passport = require('passport');
const app = express();



//configuration 
app.use(cors());
app.use(express.json());
app.use(session({name: 'session', sameSite:'strict', secret: process.env.SESSION_SECRET, maxAge: 24 * 60 * 60 * 1000 }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());



//controllers
const workoutController = require('./controllers/workout_controller');
const userController = require('./controllers/user_controller');
app.use('/authentication', require('./controllers/authentication'));
app.use('/workoutlist', workoutController);
app.use('/userlist', userController);


//PORT
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
});