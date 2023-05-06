'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Please enter your first name'
          }
        }
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notNull:{
            msg: 'Please enter your last name'
          }
        }
      },
      email_address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          notNull:{
            msg: 'Please enter your email address'
          }
        }
      },
      height: {
        type: Sequelize.INTEGER
      },
      current_weight: {
        type: Sequelize.INTEGER
      },
      goal_weight: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};