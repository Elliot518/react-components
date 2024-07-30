import React, { useState } from 'react';
import CardCarouselLoader from './CardCarouselLoader';

const CardCarouselLoaderDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  const handleClose = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Loader</button>
      <CardCarouselLoader isLoading={isLoading} onClose={handleClose} />
    </div>
  );
};

export default CardCarouselLoaderDemo;

