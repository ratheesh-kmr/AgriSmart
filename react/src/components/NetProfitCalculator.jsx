import React, { useState } from 'react';

const NetProfitCalculator = ({ cropDetails, marketplace }) => {
  const [netProfit, setNetProfit] = useState(null);

  const calculateNetProfit = () => {
    const { cropName, quantity, location } = cropDetails;
    const { crop_price, transportation_cost } = marketplace;

    // Simple calculation: Net profit = (crop price * quantity) - transportation cost
    const profit = (crop_price * quantity) - transportation_cost;
    setNetProfit(profit);
  };

  return (
    <div className="profit-calculator">
      <h4>Net Profit Calculation</h4>
      <button onClick={calculateNetProfit}>Calculate Net Profit</button>
      {netProfit !== null && <p>Net Profit: ₹{netProfit}</p>}
    </div>
  );
};

export default NetProfitCalculator;
