import express from "express";
import { getReport } from '../controllers/tradingController.js'; 
import { logTrades, validateTradeRequest } from '../middlewares/tradingMiddleware.js';

const router = express.Router();

// Routes
// You can use the middleware functions as needed
router.post('/trade', logTrades, validateTradeRequest, (req, res) => {
    // Your trade handling logic here
});

// Assuming you want to apply middleware to the report route as well
router.get('/report', logTrades, getReport);

export default router;
