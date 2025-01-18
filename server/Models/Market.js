import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Market = db.define('Market', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pricePerUnit: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

export default Market;
