const user = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = db

user.post('/', async (req, res) => {
    
    let user = await db.user.findOne({
        where: { email_address: req.body.email_address }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.password_digest)) {
        res.status(404).json({ 
            message: `Could not find a user with the provided email address and password` 
        })
    } else {
        const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET)
        res.json({ 
            token: token,
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email_address: user.email_address,
                height: user.height,
                current_weight: user.current_weight,
                goal_weight: user.goal_weight
            }
         })
    }
})

module.exports = user;