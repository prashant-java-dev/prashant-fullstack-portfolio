import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-50 dark:bg-secondary-light rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary transition-all duration-300 group">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-xs font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium hover:text-primary transition-colors">
            <Github size={18} className="mr-1" /> Code
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-medium hover:text-primary transition-colors">
              <ExternalLink size={18} className="mr-1" /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

