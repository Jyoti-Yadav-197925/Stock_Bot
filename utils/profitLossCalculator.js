export const calculateProfitLoss = (balance, stock, currentPrice) => {
    const totalValue = balance + (stock * currentPrice);
    const initialBalance = 10000; // Initial balance set for the bot
    const profitLoss = totalValue - initialBalance;  // P/L based on initial balance
    return profitLoss;
};
