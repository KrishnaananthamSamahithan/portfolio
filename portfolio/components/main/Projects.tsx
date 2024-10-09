import React from 'react';
import ProjectCard from '../sub/ProjectCard';

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20' id='projects'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
        
      </h1>
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
          src='/movie-app.png'
          title='Modern Next.js Portfolio'
          description='A portfolio website built with Next.js, showcasing modern design and functionality.'
          link='https://example.com/portfolio'
        />
        <ProjectCard
          src='/CardImage.png'
          title='Interactive Website Cards'
          description='A collection of interactive cards designed with CSS and JavaScript for web interfaces.'
          link='https://example.com/interactive-cards'
        />
        <ProjectCard
          src='/SpaceWebsite.png'
          title='Space Themed Website'
          description='A space-themed website designed with stunning visuals and interactive animations.'
          link='https://example.com/space-website'
        />
      </div>
    </div>
  );
};

export default Projects;
