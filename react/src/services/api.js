import React, { useState } from 'react';
import InputForm from './components/InputForm';
import Results from './pages/Results';

const App = () => {
  const [cropDetails, setCropDetails] = useState(null);

  return (
    <div className="app">
      <h1>AgriSmart - Crop Market Price Analysis</h1>
      
      {!cropDetails ? (
        <InputForm setCropDetails={setCropDetails} />
      ) : (
        <Results cropDetails={cropDetails} />
      )}
    </div>
  );
};

export default App;
