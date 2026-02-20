import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-black p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-primary transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-500 font-medium">{project.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-red-100 dark:bg-red-900/30 text-primary px-3 py-1 rounded-full text-xs font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.demo}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
