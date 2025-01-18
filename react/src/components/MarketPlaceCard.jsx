import React from 'react';
import '../assets/styles/styles.css';

function MarketPlaceCard({ market, netProfit, transportCost }) {
  return (
    <div className="marketplace-card">
      <h3>{market}</h3>
      <p>Net Profit: ₹{netProfit.toFixed(2)}</p>
      <p>Transport Cost: ₹{transportCost.totalCost.toFixed(2)}</p>
      <p>Distance: {transportCost.distance} km</p>
    </div>
  );
}

export default MarketPlaceCard;
