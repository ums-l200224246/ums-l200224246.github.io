import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Repository } from '../types';

interface ProjectsProps {
  repos: Repository[];
  loading: boolean;
  showAll?: boolean;
}

export default function Projects({ repos, loading, showAll = false }: ProjectsProps) {
  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600 dark:text-gray-400">
        Loading projects...
      </div>
    );
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {showAll ? 'All Projects' : 'Featured Projects'}
          </h2>
          {!showAll && (
            <Link
              to="/projects"
              className="group flex items-center text-blue-600 dark:text-blue-400 
                        hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
            >
              <span>See All Projects</span>
              <ChevronRight className="h-4 w-4 ml-1 transform transition-transform duration-300 
                                     group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </section>
  );
}