const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Transportation = sequelize.define('Transportation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  origin: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  cost: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  }
});

module.exports = Transportation;
