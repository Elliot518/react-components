import React, { useState } from 'react';
import './RainbowLoader.css';

interface RainbowLoaderProps {
  show: boolean;
}

const RainbowLoader: React.FC<RainbowLoaderProps> = ({ show }) => {
  return (
    <>
      {show && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default RainbowLoader;
