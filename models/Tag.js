const { Model, DataTypes } = require('sequelize');
const { databaseVersion } = require('../../../UCF-VIRT-FSF-FT-03-2021-U-LOL/13-ORM/01-Activities/03-Ins_Models/config/connection.js');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
