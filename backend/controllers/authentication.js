const user = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Users } = db

// User login route
user.post('/', async (req, res) => {
    let user = await db.user.findOne({
        where: { email_address: req.body.email_address }
    });

    if (!user || !await bcrypt.compare(req.body.password, user.password_digest)) {
        res.status(404).json({
            message: `Could not find a user with the provided email address and password`
        });
    } else {
        const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET);
        req.session.token = token;
        req.session.userId = user.id;
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
        });
    }
});

// Get current user profile route
user.get('/profile', async (req, res) => {
    try {
      const userId = req.user.user_id;
  
      const user = await User.findOne({
        where: { user_id: userId },
        attributes: { exclude: ['password_digest'] },
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
module.exports = user;