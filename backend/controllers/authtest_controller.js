const user = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const { createTokens, validateToken } = require('../middleware/jwt')

user.get('/profile', validateToken, (req, res, next) => {
    res.json('profile')

});

user.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const foundUser = await db.user.findOne({ where: { email: email } });

    if (!foundUser) {
        return res.status(400).json({ error: "User doesn't exist." });
    }

    const dbPassword = foundUser.password;
    const match = await bcrypt.compare(password, dbPassword);

    if (!match) {
        return res.json({ error: "Wrong Username and Password Combination." });
    }

    const  accessToken = createTokens(foundUser)
    res.cookie("accessToken", accessToken, {
        maxAge: 86400, //24 hours
        httpOnly: true
    })

    res.json("User logged in")
});


user.post('/register', async (req,res) => {
    const { first_name, last_name, email, password, role } = req.body;
    await bcrypt.hash(password, 10 ).then((hash) => {
        db.user.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hash,
            role: role
        }).then(() => {
            res.json("USER REGISTERED")
            res.json(user)
        }).catch((err) => {
            if (err) {
                res.status(400).json({ error: err});
            }
        })
    })
})

module.exports = user;