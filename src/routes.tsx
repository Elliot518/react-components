// src/routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoveHeartDemo from './Animation/ecommerce/loveHeart/loveHeartDemo';
import FiveStarRatingDemo from './Animation/ecommerce/fiveStarPraise/FiveStarRatingDemo';
import RainbowLoaderDemo from './Animation/generic/rainbowLoader/RainbowLoaderDemo';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/love-heart-demo" element={<LoveHeartDemo />} />
      <Route path="/five-star-rating-demo" element={<FiveStarRatingDemo />} />
      <Route path="/rainbow-loader-demo" element={<RainbowLoaderDemo />} />
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;

