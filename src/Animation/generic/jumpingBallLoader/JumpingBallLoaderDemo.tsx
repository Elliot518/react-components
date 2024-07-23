import React, { useState } from 'react';
import JumpingBallLoader from './JumpingBallLoader';

const JumpingBallLoaderDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Loader</button>
      <JumpingBallLoader isLoading={isLoading} onClose={() => setIsLoading(false)} />
    </div>
  );
};

export default JumpingBallLoaderDemo;

