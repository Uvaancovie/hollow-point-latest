import React from 'react';

type TestimonialCardProps = {
  text: string;
  name: string;
  position: string;
};

const TestimonialCard = ({ text, name, position }: TestimonialCardProps) => {
  return (
    <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-white transition-colors duration-300">
      <div className="text-white mb-6">
        <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 4.5L9 16.5H13.5C14.6935 16.5 15.8381 16.9741 16.682 17.818C17.5259 18.6619 18 19.8065 18 21C18 22.1935 17.5259 23.3381 16.682 24.182C15.8381 25.0259 14.6935 25.5 13.5 25.5C11.5109 25.5 9.60322 24.7098 8.1967 23.3033C6.79018 21.8968 6 19.9891 6 18V4.5C6 3.70435 6.31607 2.94129 6.87868 2.37868C7.44129 1.81607 8.20435 1.5 9 1.5H15C15.7956 1.5 16.5587 1.81607 17.1213 2.37868C17.6839 2.94129 18 3.70435 18 4.5C18 5.29565 17.6839 6.05871 17.1213 6.62132C16.5587 7.18393 15.7956 7.5 15 7.5V4.5Z" fill="currentColor"/>
        </svg>
      </div>
      <p className="text-gray-300 text-lg mb-8">{text}</p>
      <div>
        <h4 className="text-white font-bold text-xl">{name}</h4>
        <p className="text-gray-400 mt-1">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;