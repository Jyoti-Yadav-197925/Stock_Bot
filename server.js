import express from 'express';
import { connectDB } from './config/db.js';
import tradingRoutes from './routes/tradingRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { executeTrade } from './services/tradingService.js';
import { PORT } from './config/env.js';

const startServer = () => {
    const app = express();
    app.use(express.json()); // Middleware to parse JSON body requests

    // Connect to the database (if using one)
    connectDB();

    // Use trading routes and error handler
    app.use('/api', tradingRoutes);
    app.use(errorHandler);

    // Run the trading bot every 10 seconds
    setInterval(executeTrade, 10000);

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

export { startServer };
