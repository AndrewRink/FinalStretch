'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('workouts', [{
      author_id: 1,
      workout_name: "Downward Facing Dog",
      equipment: "yoga mat",
      image: "https://images.pexels.com/photos/4534689/pexels-photo-4534689.jpeg",
      description: "Bend at the waist, placing hands flat on the mat, keeping your feet flat. Stretches back and legs",
      duration: 5,
      calories_burned: 50},
      {
      author_id: 1,
      workout_name: "Seated Dumbbell Butterfly Lifts",
      equipment: "yoga mat, assorted weight dumbbells",
      image: "https://thumbs.dreamstime.com/b/elderly-man-lifting-dumbbells-sitting-exercise-mat-isolated-white-background-96806335.jpg",
      description: "while seated, lift dumbbells from waist with arms extended out to the side, raise overhead and lower.",
      duration: 10,
      calories_burned: 75},
      {
      author_id: 1,
      workout_name: "Bicep Curls",
      equipment: "assorted weight dumbbells",
      image: "https://thumbs.dreamstime.com/b/elderly-man-playing-sports-light-background-37110685.jpg",
      description: "while standing, hold dumbell in one arm by waist, slowly curl arm until the dumbbell is even with shoulder, then slowly lower.",
      duration: 10,
      calories_burned: 60},
      {
      author_id: 1,
      workout_name: "Exercise Bike",
      equipment: "exercise bike",
      image: "https://thumbs.dreamstime.com/b/active-senior-using-exercise-bike-21772095.jpg",
      description: "approach the bike, adjust seat height and foot straps and mount the bike safely. Pedal the bike at a speed you are comfortable at.",
      duration: 30,
      calories_burned: 350},
      {
      author_id: 1,
      workout_name: "Tree Pose",
      equipment: "yoga mat",
      image: "https://media.gettyimages.com/id/200515789-001/photo/man-doing-yoga-tree-pose.jpg?s=1024x1024&w=gi&k=20&c=0J9RFqD9EujowXvidQokFenPQHkDnjbCTk5ye1vIn-I=",
      description: "While standing, stretch arms overhead and place hands together.  Bring one foot up and place against the inside thigh of the opposite leg.  Helps with balance and core strength.",
      duration: 5,
      calories_burned: 50},
      {
      author_id: 1,
      workout_name: "Cobra Pose",
      equipment: "yoga mat",
      image: "https://media.istockphoto.com/id/1282295809/photo/do-it-for-a-healthier-mind-and-body.jpg?s=1024x1024&w=is&k=20&c=O3v0x7yTP8IKUnjFsI-nnAPgZaO3FIlEQmbRL_hyVsA=",
      description: "While laying on mat, place hands shoulder length apart flat on the mat.  Push upper body up while leaving the lower body on the mat. Stretches the back.",
      duration: 5,
      calories_burned: 50}, 
      
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
