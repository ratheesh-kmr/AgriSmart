import pg from 'pg';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const { Pool } = pg;

// Create a new Pool instance with the connection settings from .env
const appDB = new Pool({
  user: process.env.DB_USER,          // Your database username
  host: process.env.DB_HOST,          // Your database host (usually 'localhost')
  database: process.env.APP_DB,       // The name of the database
  password: process.env.DB_PASSWORD,  // The password for your database
  port: process.env.DB_PORT           // The port number (usually 5432 for PostgreSQL)
});

// Test the connection
appDB.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.stack);
  } else {
    console.log('Connected to App DB.');
  }
});

export default appDB;
