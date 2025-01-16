const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Marketplace = sequelize.define('Marketplace', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  crop_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  demand: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Marketplace;
