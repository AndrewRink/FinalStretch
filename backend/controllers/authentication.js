const user = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')

const { User } = db

  
user.post('/', async (req, res) => {
    
    let user = await db.user.findOne({
        where: { email_address: req.body.email_address }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.password_digest)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided username and password` 
        })
    } else {
        res.json({ user })
    }
})


module.exports = user
