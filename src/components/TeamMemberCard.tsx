import React from 'react';

type TeamMemberCardProps = {
  name: string;
  position: string;
  description: string;
  image: string;
};

const TeamMemberCard = ({ name, position, description, image }: TeamMemberCardProps) => {
  return (
    <div className='flex flex-col sm:flex-row bg-zinc-900 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/20'>
      <div className='sm:w-1/3 h-64 sm:h-auto'>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className='sm:w-2/3 p-6 flex flex-col'>
        <h3 className='text-white text-xl font-bold mb-1'>{name}</h3>
        <p className='text-white font-medium mb-4'>{position}</p>
        <p className='text-gray-300 grow'>{description}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;