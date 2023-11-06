const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Program extends Model {}

Program.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    program_name: {
      type: DataTypes.STRING,
    },
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'program',
  }
);

module.exports = Program;
