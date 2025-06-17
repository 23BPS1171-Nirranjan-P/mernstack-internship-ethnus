import React, { useState } from 'react';

function App() {
  const [dollar, setDollar] = useState(10);
  const rate = 73.66;

  const handleChange = (e) => {
    setDollar(e.target.value);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'serif' }}>
      <h3><b>{rate} Indian Rupee</b></h3>
      <div style={{ margin: '10px 0' }}>
        <input 
          type="number" 
          value={dollar} 
          onChange={handleChange}
          style={{ padding: '5px' }}
        /> 
        &nbsp;Dollar
      </div>
      <div>
        <input 
          type="text" 
          value={(dollar * rate).toFixed(2)} 
          readOnly 
          style={{ padding: '5px' }}
        /> 
        &nbsp;Rupee
      </div>
    </div>
  );
}

export default App;
