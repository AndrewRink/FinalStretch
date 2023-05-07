const user = require('express').Router();
const db = require('../models');
const { Users } = db;
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');


// GET all users
user.get('/', async (req, res) => {
    try {
      const foundItems = await db.user.findAll({
        where: {
          first_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
        },
        order: [ ['id', 'ASC'] ]
      })
      res.status(200).json(foundItems)
    } catch (err) {
      res.status(500).json(err)
    }
})
  

//find workout by id
user.get('/:id', async (req, res) => {
  try {
    const foundItems = await db.user.findOne({
      where: { user_id: req.params.id }
      
    })
    res.status(200).json(foundItems)
  } catch (err) {
    res.status(500).json(err)
  }
})

//create new user
user.post('/', async (req, res) => {
    try {
      const { first_name, last_name, email_address, password_digest, height, current_weight, goal_weight } = req.body;
      const newUserItem = await db.user.create({
        first_name,
        last_name,
        email_address,
        password_digest,
        height,
        current_weight,
        goal_weight,
        password_digest: await bcrypt.hash(password_digest,10)
      });
      
      res.status(201).json(newUserItem);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = user;
