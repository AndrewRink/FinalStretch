const workout = require('express').Router()
const db = require('../models')

const { Op } = require('sequelize')


// GET all workouts
workout.get('/', async (req, res) => {
  try {
    const foundItems = await db.workout.findAll({
      where: {
        workout_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
      },
      order: [['author_id', 'ASC']]
    })
    res.status(200).json(foundItems)
  } catch (err) {
    res.status(500).json(err)
  }
})


//find workout by id
workout.get('/:id', async (req, res) => {
  try {
    const foundItem = await db.workout.findOne({
      where: { workout_id: req.params.id }
    })
    res.status(200).json(foundItem)
  } catch (err) {
    res.status(500).json(err)
  }
})

//create new workout
workout.post('/', async (req, res) => {
  try {
    const { workout_name, description, equipment, image, duration } = req.body;
    const newWorkoutItem = await db.workout.create({
      workout_name,
      description,
      equipment,
      image,
      duration
    });
    res.status(201).json(newWorkoutItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update workout
workout.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { workout_name, description, equipment, image, duration } = req.body;
    const updatedWorkout = await db.workout.update(
      { workout_name, description, equipment, image, duration },
      {
        where: { workout_id: req.params.id },
        returning: true,
        plain: true
      });
    res.status(200).json(updatedWorkout[1]);
  } catch (err) {
    res.status(500).json(err)
  }
})

workout.delete('/delete/:id', async (req, res) => {
  try {
    const deletedWorkout = await db.workout.destroy({
      where: {
        workout_id: req.params.id
      }
    });
    const updatedWorkoutList = await db.workout.findAll();
    res.status(200).json(updatedWorkoutList);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
module.exports = workout