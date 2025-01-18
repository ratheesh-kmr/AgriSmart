import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Crop = db.define('Crop', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pricePerUnit: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

export default Crop;
