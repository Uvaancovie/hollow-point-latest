import React from 'react';
import { teamMembers } from '../constants';
import TeamMemberCard from '../components/TeamMemberCard';

const Team = () => {
  return (
    <section id="team" className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-white font-bold text-4xl mt-2 text-center">
            Meet Our Security Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              {...member} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;