import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const STOCK_API_URL = process.env.STOCK_API_URL || 'https://example.com/stock-price';
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/trading_bot';
