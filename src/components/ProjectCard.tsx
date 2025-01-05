import React from 'react';
import { ExternalLink, Star, Code } from 'lucide-react';
import { Repository } from '../types';

interface ProjectCardProps {
  repo: Repository;
}

export default function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <div
      className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 
                 transform transition duration-300 hover:scale-105 hover:shadow-xl"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {repo.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 h-20">
        {repo.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Star className="h-4 w-4 mr-1" />
            <span>{repo.stargazers_count}</span>
          </div>
          {repo.language && (
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <Code className="h-4 w-4 mr-1" />
              <span>{repo.language}</span>
            </div>
          )}
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 
                     transform transition-transform duration-300 hover:scale-110"
        >
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}