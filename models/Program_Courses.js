const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Program_Courses extends Model {}

Program_Courses.init(
  {
    courses_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'courses',
        key: 'id',
      },
    },
      program_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'program',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Program_Courses',
  }
);

module.exports = Program_Courses;