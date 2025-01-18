import { useState, useEffect } from 'react';
import '../assets/styles/styles.css';

function InputForm({ setCropDetails }) {
  const [cropName, setCropName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [responseData, setResponseData] = useState(null); // State for the response

  useEffect(() => {
    // Fetch crop suggestions from the backend when the cropName changes
    const fetchSuggestions = async () => {
      if (cropName.length > 2) {
        const response = await fetch(`/api/search-crops?name=${cropName}`);
        const data = await response.json();
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [cropName]); // This runs every time the cropName changes

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare data for submission
    const cropData = {
      cropName,
      quantity,
      location,
    };

    // Set the crop details
    setCropDetails(cropData);

    try {
      // Send the data to the backend
      const response = await fetch('/api/submit-crop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cropData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseData(data); // Store the result in state
      } else {
        console.error('Error submitting crop data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Crop Name:
          <input
            type="text"
            value={cropName}
            onChange={(e) => setCropName(e.target.value)}
          />
        </label>
        {suggestions.length > 0 && (
          <ul>
            {suggestions.map((crop, index) => (
              <li key={index}>{crop.name}</li>
            ))}
          </ul>
        )}
        <label>
          Quantity:
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Display response data after submission */}
      {responseData && (
        <div>
          <h3>Results</h3>
          <p>Marketplace: {responseData.marketplace}</p>
          <p>Transportation Cost: {responseData.transportationCost}</p>
          <p>Net Profit: {responseData.netProfit}</p>
        </div>
      )}
    </div>
  );
}

export default InputForm;
