//Dependencies
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const cors = require('cors');
const cookieParser = require('cookie-parser');



const app = express();




//configuration 


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(bodyParser.json());
app.use(cors());

//controllers
const workoutController = require('./controllers/workout_controller');
const authtestController = require('./controllers/authtest_controller')
app.use('/workoutlist', workoutController);
app.use('/authtest', authtestController);


//PORT
app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
});