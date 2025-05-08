import React from 'react';
import { services } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section id="services" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-white font-bold text-4xl mt-2 mb-12 text-center">
            Comprehensive Security Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              index={index} 
              {...service} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;