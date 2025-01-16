import { useState } from 'react';
import InputForm from '../components/InputForm';

function Home() {
  const [cropDetails, setCropDetails] = useState(null);

  return (
    <div className="home-container">
      <h1>AgriSmart - Crop Market Price Analysis</h1>
      <InputForm setCropDetails={setCropDetails} />
      {cropDetails && <p>Crop details entered, proceed to see results!</p>}
    </div>
  );
}

export default Home;
