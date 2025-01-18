import React from 'react';
import MarketPlaceCard from './MarketPlaceCard';

function NetProfitCalculator({ marketData }) {
  return (
    <div className="net-profit-calculator">
      {marketData.map((data, index) => (
        <MarketPlaceCard
          key={index}
          market={data.market}
          netProfit={data.netProfit}
          transportCost={data.transportCost}
        />
      ))}
    </div>
  );
}

export default NetProfitCalculator;
