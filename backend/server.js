//Dependencies
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const passport = require('passport');
const app = express();
const defineCurrentUser = require('./middleware/defineCurrentUser')



//configuration 
app.use(session({
    secret: 'flexibleoldpeople',
    resave: false,
    savUnitialized: true
}));
app.use(cors({
    origin:true,
    credentials: true
}));
app.use(express.json());
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