import React from 'react';
import { ExternalLink, Star, Code } from 'lucide-react';
import { Repository } from '../types';

interface ProjectCardProps {
  repo: Repository;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-400',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-400',
  HTML: 'bg-orange-400',
  CSS: 'bg-purple-400',
  'Jupyter Notebook': 'bg-orange-500',
};

export default function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <div className="group relative p-6 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
      {/* Subtle gradient on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {repo.name}
          </h3>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-200"
            aria-label={`Open ${repo.name} on GitHub`}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 min-h-[2.5rem]">
          {repo.description || 'No description available'}
        </p>

        <div className="flex items-center gap-4 text-xs">
          {repo.language && (
            <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
              <span className={`w-2.5 h-2.5 rounded-full ${LANGUAGE_COLORS[repo.language] || 'bg-gray-400'}`} />
              <span>{repo.language}</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <Star className="h-3.5 w-3.5" />
            <span>{repo.stargazers_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}