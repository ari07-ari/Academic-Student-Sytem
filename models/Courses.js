const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Courses extends Model {}

Courses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    course_name: {
        type: DataTypes.STRING,
      },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'courses',
  }
);

module.exports = Courses;