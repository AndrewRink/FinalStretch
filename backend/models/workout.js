'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  workout.init({
    workout_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
    },
    workout_name: DataTypes.STRING,
    area_of_focus: DataTypes.STRING,
    length_of_workout: DataTypes.SMALLINT,
    calories_burned: DataTypes.SMALLINT,
    
  });
  return workout;
};