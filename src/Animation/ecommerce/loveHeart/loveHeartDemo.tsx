import React from 'react';
import LoveHeart from './LoveHeart';

const LoveHeartDemo: React.FC = () => {
  return (
    <div>
      <h1>Love Heart Animation</h1>
      <LoveHeart width={100} height={100} />
      <LoveHeart width={150} height={150} />
      <LoveHeart width={200} height={200} />
    </div>
  );
};

export default LoveHeartDemo;
