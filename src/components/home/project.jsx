'use client';

import React from 'react';

export default function Project() {
  const projects = [
    {
      title: 'Table',
      description:
        'A brief description of Project One, highlighting its core features and technologies used.',
      image: 'pfp.jpg',
      link: 'tabu.html',
    },
    {
      title: 'Registration Form',
      description:
        'A brief description of Project Two, highlighting its core features and technologies used.',
      image: 'images.jpg',
      link: 'tp.html',
    },
    {
      title: 'Timeless Elegance',
      description:
        'A brief description of Project Three, highlighting its core features and technologies used.',
      image: 'download.png',
      link: 'elegent.html',
    },
    {
      title: 'Advanced Card',
      description:
        'A brief description of Project Four, highlighting its core features and technologies used.',
      image: 'pfp.jpg',
      link: 'card.html',
    },
    {
      title: 'Basic Form',
      description:
        'A brief description of Project Five, highlighting its core features and technologies used.',
      image: 'pfp.jpg',
      link: 'hw.html',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-600">
          My Projects
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
