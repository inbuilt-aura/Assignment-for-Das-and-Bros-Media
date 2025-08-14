import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
const HiringPage = React.lazy(() => import('./pages/hiring'));

export default function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hiring" element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <HiringPage />
          </React.Suspense>
        } />
      </Routes>
    </BrowserRouter>
  );
}
