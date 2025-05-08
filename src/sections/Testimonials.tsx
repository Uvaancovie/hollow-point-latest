import React from 'react';
import TestimonialCard from '../components/TestimonialCard';

const testimonials = [
  {
    text: "Hollow Point Security transformed our company's approach to safety. Their professional team designed a comprehensive security system that gives us peace of mind 24/7.",
    name: "Michael Roberts",
    position: "Business Owner"
  },
  {
    text: "After experiencing a break-in, we hired Hollow Point for our home security. Their response time and attention to detail are exceptional. I couldn't recommend them more highly.",
    name: "Sarah Jenkins",
    position: "Homeowner"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white font-bold text-3xl mb-12 text-center">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              {...testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;