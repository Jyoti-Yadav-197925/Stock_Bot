import { generateReport } from '../services/tradingService.js';

export const getReport = (req, res) => {
    try {
        const report = generateReport();
        res.status(200).json({ success: true, report });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
