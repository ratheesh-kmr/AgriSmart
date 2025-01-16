import { useState } from 'react';

function InputForm({ setCropDetails }) {
  const [cropName, setCropName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCropDetails({
      cropName,
      quantity,
      location,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Crop Name:
        <input
          type="text"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
        />
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
