import React, { useState } from 'react';
import BootScreen from './components/BootScreen';
import Desktop from './components/Desktop';

function App() {
  const [isBooted, setIsBooted] = useState(false);

  return (
    <div className="App">
      {!isBooted ? (
        <BootScreen onBootComplete={() => setIsBooted(true)} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}

export default App;