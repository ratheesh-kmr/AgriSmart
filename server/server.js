import app from './app.js';
import db from './config/db.js';

const PORT = process.env.PORT || 5000;

db.sync()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('Database connection error:', err));
