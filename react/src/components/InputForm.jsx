import { useState, useEffect } from 'react';
import '../assets/styles/styles.css';

function InputForm({ onSubmit }) {
  const [cropName, setCropName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');
  const [crops, setCrops] = useState([]);  // Store fetched crops
  const [isLoading, setIsLoading] = useState(false);  // Loading state for fetching crops

  // Fetch crops from the backend on component mount
  useEffect(() => {
    const fetchCrops = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/crops');  // Call the crops API
        const data = await response.json();
        setCrops(data);  // Set the crops data
      } catch (error) {
        console.error('Error fetching crops:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCrops();  // Fetch crops on mount
  }, []);  // Empty dependency array to only fetch once

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ cropName, quantity, location });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Crop Name:
        <select
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}  // Update cropName on selection
        >
          <option value="">Select a crop</option>
          {isLoading ? (
            <option value="">Loading...</option>
          ) : (
            crops.map((crop) => (
              <option key={crop.id} value={crop.name}>
                {crop.name}
              </option>
            ))
          )}
        </select>
      </label>

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
  );
}

export default InputForm;
