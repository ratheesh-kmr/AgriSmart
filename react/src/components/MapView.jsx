import React from 'react';
import '../assets/styles/styles.css';

function MapView({ markets }) {
  return (
    <div className="map-view">
      <h3>Marketplace Locations</h3>
      {/* Mock map display */}
      <ul>
        {markets.map((market, index) => (
          <li key={index}>
            {market.name} - {market.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MapView;
