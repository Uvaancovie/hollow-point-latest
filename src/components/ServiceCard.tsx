import React from 'react';
import * as LucideIcons from 'lucide-react';

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
  description: string;
};

const ServiceCard = ({ index, title, icon, description }: ServiceCardProps) => {
  const Icon = LucideIcons[icon as keyof typeof LucideIcons];
  
  return (
    <div className='bg-zinc-900 p-6 rounded-2xl w-full transition-all duration-300 hover:shadow-xl hover:shadow-white/20 flex flex-col h-full'>
      <div className='flex justify-start items-center mb-4'>
        <div className='w-12 h-12 rounded-full flex justify-center items-center bg-white bg-opacity-20'>
          {Icon && <Icon className='w-7 h-7 text-white' />}
        </div>
        <h3 className='text-white font-bold text-xl ml-3'>{title}</h3>
      </div>

      <p className='text-gray-300 mt-2 grow'>{description}</p>
      
      <div className='mt-6'>
        <a href="#contact" className='text-white inline-flex items-center font-medium hover:text-gray-300 transition-colors duration-300'>
          Learn More
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;