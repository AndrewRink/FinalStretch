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
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true 
    },
    author_id: DataTypes.STRING,
    workout_name: DataTypes.STRING,
    equipment: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.SMALLINT,
    calories_burned: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'workout',
    tableName: 'workouts',
    timestamps: false,
  });
  return workout;
};