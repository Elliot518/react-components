import React from 'react';
import styles from './FiveStarRating.module.css';

interface FiveStarRatingProps {
  onRatingChange?: (rating: number) => void;
}

const FiveStarRating: React.FC<FiveStarRatingProps> = ({ onRatingChange }) => {
  const handleRatingChange = (rating: number) => {
    if (onRatingChange) {
      onRatingChange(rating);
    }
  };

  return (
    <div className={styles.rating}>
      {[...Array(5)].map((_, index) => (
        <React.Fragment key={index}>
          <input
            type="radio"
            id={`star-${5 - index}`}
            name="star-radio"
            value={5 - index}
            onChange={() => handleRatingChange(5 - index)}
          />
          <label htmlFor={`star-${5 - index}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                pathLength="360"
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              ></path>
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FiveStarRating;
