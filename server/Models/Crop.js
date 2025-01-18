// backend/models/crop.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';  // Default import for sequelize

// Define the Crop model
const Crop = sequelize.define('Crop', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Additional fields can be added as needed
}, {
  timestamps: false,  // Disable timestamps if not required
  tableName: 'crops',  // Specify the table name
});

// Export the Crop model for use in routes
export { Crop };
