import React from 'react';
import Contact from '../sections/Contact';

const ContactPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-black py-16">
        <h1 className="text-white text-4xl font-bold text-center">Contact Us</h1>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;