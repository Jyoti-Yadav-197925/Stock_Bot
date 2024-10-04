// Custom logger utility for trade events or errors
export const logger = (message) => {
    console.log(`[LOG - ${new Date().toISOString()}]: ${message}`);
  };
  