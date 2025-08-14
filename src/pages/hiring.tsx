import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hiring from '../components/sections/Hiring';

const HiringPage: React.FC = () => {
  return (
    <>
      <Header activeNav="hiring" />
  <main id="main-content" className="pt-16 md:pt-20" tabIndex={-1} role="main">
        <Hiring />
      </main>
      <Footer />
    </>
  );
};

export default HiringPage;
