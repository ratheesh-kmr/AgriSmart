const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Crop = sequelize.define('Crop', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  average_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING(20),
    allowNull: false,
  }
});

module.exports = Crop;
