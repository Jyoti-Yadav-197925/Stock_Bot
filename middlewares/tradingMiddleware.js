// Example middleware to log every trade attempt
export const logTrades = (req, res, next) => {
    console.log(`Trade request received at ${new Date().toISOString()}`);
    next();
};

// Example middleware to validate API requests
export const validateTradeRequest = (req, res, next) => {
    const { tradeType, amount } = req.body;
    if (!tradeType || !['buy', 'sell'].includes(tradeType)) {
        return res.status(400).json({ success: false, message: 'Invalid trade type' });
    }
    if (!amount || amount <= 0) {
        return res.status(400).json({ success: false, message: 'Invalid trade amount' });
    }
    next();
};
