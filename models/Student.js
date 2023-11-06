const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    student_name: {
        type: DataTypes.STRING,
      },
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
    modelName: 'student',
  }
);

module.exports = Student;