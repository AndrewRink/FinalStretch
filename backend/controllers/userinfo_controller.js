const userInfo = require('express').Router()
const db = require('../models')
const { UserInfos } = db
const { Op } = require('sequelize')


// GET all workouts
userInfo.get('/', async (req, res) => {
    try {
      const foundItems = await db.userInfo.findAll({
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
userInfo.get('/:id', async (req,res) => {
    try{
        const foundItem = await UserInfos.findOne({
            where: {id: req.params.id}
        })
        res.status(200).json(foundItem)
    }catch(err) {
        res.status(500).json(err)
    }
})

//create new workout
userInfo.post('/', async (req, res) => {
    try {
      const { first_name, last_name, email_address, height, current_weight, goal_weight } = req.body;
      const newUserItem = await db.userInfo.create({
        first_name,
        last_name,
        email_address,
        height,
        current_weight,
        goal_weight,
      });
      res.status(201).json(newUserItem);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// //update workout
// workout.put('/:id', async (req,res) => {
//     try{
//         const { workout_name, description, equipment, image, duration } = req.body; 
//         const workoutItem = await Workouts.update(
//             { workout_name, description, equipment, image, duration },
//             {
//                 where: { workout_id: req.params.id },
//                 returning: true,
//                 plain: true,
//             }
//         );
//         if(updatedWorkout[0] === 0){
//             res.status(404).json({ message: 'Workout not found'});
//         }else {
//             res.status(200).json(updatedWorkout[1])
//         }
//     }catch(err) {
//         res.status(500).json(err)
//     }
// })

// workout.delete('/:id', async (req, res) => {
//   try {
//     const deletedWorkout = await db.workout.destroy({
//       where: {
//         workout_id: req.params.id
//       }
//     });
//     const updatedWorkoutList = await db.workout.findAll();
//     res.status(200).json(updatedWorkoutList);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json(err);
//   }
// });
module.exports = userInfo