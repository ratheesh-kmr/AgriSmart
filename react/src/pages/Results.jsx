import React from 'react';
import NetProfitCalculator from '../components/NetProfitCalculator';
import MapView from '../components/MapView';

function Results({ marketData }) {
  return (
    <div className="results">
      <h1>Results</h1>
      <NetProfitCalculator marketData={marketData} />
      <MapView markets={marketData.map((data) => data.market)} />
    </div>
  );
}

export default Results;
