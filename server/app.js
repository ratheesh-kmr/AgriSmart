import express from 'express';
import { router as cropRoutes } from './Routes/cropRoutes.js';  // Named import for cropRoutes
import marketRoutes from './Routes/marketRoutes.js';  // Default import for marketRoutes

const app = express();

app.use(express.json());
app.use('/api/crops', cropRoutes);  // Use the cropRoutes for handling crop requests
app.use('/api/markets', marketRoutes);  // Use the marketRoutes for handling market requests

export default app;
