import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MarketPlaceCard from '../components/MarketPlaceCard';
import NetProfitCalculator from '../components/NetProfitCalculator';
import MapView from '../components/MapView';

function Results({ cropDetails }) {
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    // Fetch market data using cropDetails
    axios
      .post('/api/market-data', cropDetails)
      .then((response) => {
        setMarketData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching market data', error);
      });
  }, [cropDetails]);

  return (
    <div className="results-container">
      <h2>Market Data for {cropDetails.cropName}</h2>
      {marketData ? (
        <>
          <MarketPlaceCard data={marketData} />
          <NetProfitCalculator data={marketData} />
          <MapView location={cropDetails.location} />
        </>
      ) : (
        <p>Loading market data...</p>
      )}
    </div>
  );
}

export default Results;
