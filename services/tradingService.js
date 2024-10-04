import axios from 'axios';
import { STOCK_API_URL } from '../config/env.js';
import { calculateProfitLoss } from '../utils/profitLossCalculator.js';

let balance = 10000;
let stock = 0;
let lastPrice = 0;
let trades = [];

// Fetch stock prices
export const fetchStockPrices = async () => {
    try {
        const response = await axios.get(STOCK_API_URL);
        return response.data.price;
    } catch (error) {
        console.error('Error fetching stock data', error);
    }
};

// Trading logic
export const executeTrade = async () => {
    const price = await fetchStockPrices();
    if (!lastPrice) lastPrice = price;

    // Buy if price drops by 2%
    if (price < lastPrice * 0.98 && balance > 0) {
        stock = balance / price;
        balance = 0;
        trades.push({ type: 'buy', price, stock, timestamp: new Date() });
        console.log(`Bought stock at ${price}`);
    }

    // Sell if price rises by 3%
    if (price > lastPrice * 1.03 && stock > 0) {
        balance = stock * price;
        trades.push({ type: 'sell', price, stock, timestamp: new Date() });
        stock = 0;
        console.log(`Sold stock at ${price}`);
    }

    lastPrice = price;
};

// Generate report
export const generateReport = () => {
    const profitLoss = calculateProfitLoss(balance, stock, lastPrice);
    return {
        initialBalance: 10000,
        finalBalance: balance + (stock * lastPrice),
        profitLoss,
        trades,
    };
};
