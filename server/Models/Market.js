import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';  // Import the sequelize instance

// Define the Market model
const Market = sequelize.define('Market', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  // Auto-increment for the ID
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,  // Name is required
  },
  location: {
    type: DataTypes.STRING(255),
    allowNull: false,  // Location is required
  },
  distance_from_origin_km: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,  // Distance is required
  },
}, {
  timestamps: false,  // Disable timestamps if not needed
  tableName: 'markets',  // Specify the table name in the database
});

export { Market };
