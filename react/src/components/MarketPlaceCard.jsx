function MarketPlaceCard({ data }) {
    return (
      <div className="marketplace-card">
        <h3>{data.marketplaceName}</h3>
        <p>Price: {data.price}</p>
        <p>Location: {data.location}</p>
        <p>Transportation Cost: {data.transportationCost}</p>
      </div>
    );
  }
  
  export default MarketPlaceCard;
  