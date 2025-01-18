import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Set up the Sequelize instance
const sequelize = new Sequelize({
  host: process.env.DB_HOST,            
  username: process.env.DB_USER,        
  password: process.env.DB_PASSWORD,    
  database: process.env.APP_DB,         
  dialect: 'postgres',                  
  port: process.env.DB_PORT,            
  logging: false,                       
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
