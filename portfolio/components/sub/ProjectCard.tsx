import React from 'react';

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;  // Added link prop for the website URL
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg border border-[#2A0E61] shadow-lg'>
      <img
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full h-64 object-cover rounded-t-lg'
      />

      <div className='relative p-4 bg-[#1A1A2E] rounded-b-lg'>
        <h1 className='text-2xl font-semibold text-white'>{title}</h1>
        <p className='mt-2 text-gray-300'>{description}</p>

        {/* Visit Website Button */}
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block mt-4 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300'
        >
          Visit Website
          

            
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
