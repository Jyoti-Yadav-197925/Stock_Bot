import mongoose from 'mongoose';

const tradeSchema = new mongoose.Schema({
    tradeType: { type: String, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

const Trade = mongoose.model('Trade', tradeSchema);
export default Trade;
