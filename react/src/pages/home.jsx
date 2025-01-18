import React, { useState } from 'react';
import InputForm from '../components/InputForm';

function Home({ setCropDetails }) {
  return (
    <div className="home">
      <h1>AgriSmart</h1>
      <InputForm onSubmit={setCropDetails} />
    </div>
  );
}

export default Home;
