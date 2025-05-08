import React from 'react';
import About from '../sections/About';
import DurbanInfo from '../sections/DurbanInfo';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-black py-16">
        <h1 className="text-white text-4xl font-bold text-center">About Us</h1>
      </div>
      <About />
      <DurbanInfo />
    </div>
  );
};

export default AboutPage;