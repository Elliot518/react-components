import React from 'react';
import FiveStarRating from './FiveStarRating';

const FiveStarRatingDemo: React.FC = () => {
  const handleRatingChange = (rating: number) => {
    console.log('Rating selected:', rating);
  };

  return (
    <div>
      <h1>Rate our product</h1>
      <FiveStarRating onRatingChange={handleRatingChange} />
    </div>
  );
};

export default FiveStarRatingDemo;
