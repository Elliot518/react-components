// src/routes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoveHeartDemo from './Animation/ecommerce/loveHeart/loveHeartDemo';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/love-heart-demo" element={<LoveHeartDemo />} />
      <Route path="/" element={<div>Home Page</div>} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;

