//Dependencies
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const cors = require('cors')

//configuration 
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//root
app.get('/', (req,res) => {
    res.status(200).json({
        message: "Welcome to FinalStretch"
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`)
})