import { useState } from 'react';
import InputForm from './components/InputForm';
import Results from './pages/results';
import './App.css';

function App() {
  const [cropDetails, setCropDetails] = useState(null);

  return (
    <div className="app">
      <h1>AgriSmart - Crop Market Price Analysis</h1>

      {/* If crop details are entered, show the results */}
      {!cropDetails ? (
        <InputForm setCropDetails={setCropDetails} />
      ) : (
        <results cropDetails={cropDetails} /> 
      )}
    </div>
  );
}

export default App;
