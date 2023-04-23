const workout = require('express').Router()
const db = require('../models')
const { Workouts } = db
const { Op } = require('sequelize')


//workout
workout.get('/', async (req,res) => {
    try {
        const foundItem = await Workouts.findAll({
            author: [ [ id, ASC ] ],
            where: {
                workout_name: { [Op.like]: `%${req.query.name ? req.query.name: ''}` }
            }
        })
        res.status(200).json(fountItem)
    }catch(err){
        res.status(500).json(err)
    }
})

//find workout by id
workout.get('/:id', async (req,res) => {
    try{
        const foundItem = await Workouts.findOne({
            where: {workout_id: req.params.id}
        })
        res.status(200).json(foundItem)
    }catch(err) {
        res.status(500).json(err)
    }
})

//create new workout
workout.post('/', async (req,res) => {
    try {
        const { id, ...workoutItemData } = req.body; 
        const workoutItem = await Workouts.create(workoutItemData);
        res.status(201).json(workoutItem);
    }catch(err){
        console.error(err);
        res.status(500).json(err)
    }
})


//update workout
workout.put('/:id', async (req,res) => {
    try{
        const { workout_name, description, image, duration } = req.body; 
        const workoutItem = await Workouts.update(
            { workout_name, description, image, duration },
            {
                where: { id: req.params.id },
                returning: true,
                plain: true,
            }
        );
        if(updatedWorkout[0] === 0){
            res.status(404).json({ message: 'Workout not found'});
        }else {
            res.status(200).json(updatedWorkout[1])
        }
    }catch(err) {
        res.status(500).json(err)
    }
})

//delete workout
workout.delete('/:id', async (req,res) => {
    try{
        console.log(req.params.id)
        const deletedWorkout = await Workouts.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Deleted ${deletedWorkout} from workout list`
        })
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = workout