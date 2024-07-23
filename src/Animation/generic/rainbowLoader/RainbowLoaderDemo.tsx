import React, { useState } from 'react';
import RainbowLoader from './RainbowLoader';

const RainbowLoaderDemo: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleShowLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Hide loader after 3 seconds, adjust as needed
  };

  return (
    <div>
      <button onClick={handleShowLoader}>Show Rainbow Loader</button>
      <RainbowLoader show={loading} />
    </div>
  );
};

export default RainbowLoaderDemo;
