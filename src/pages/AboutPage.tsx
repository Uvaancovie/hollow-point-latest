import React from 'react';
import About from '../sections/About';
import DurbanInfo from '../sections/DurbanInfo';

const AboutPage = () => {
  return (
    <div className="pt-20">
    <div
        className="relative bg-cover bg-center py-16"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/4646677/pexels-photo-4646677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
    >
        <div className="absolute inset-0 bg-black opacity-50" />
        <h1 className="relative text-white text-4xl font-bold text-center">
            About Us
        </h1>
    </div>
      <About />
      <DurbanInfo />
    </div>
  );
};

export default AboutPage;