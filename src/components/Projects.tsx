import React, { useEffect, useRef } from 'react';
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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loading, repos]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block w-8 h-8 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
      </div>
    );
  }

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10 reveal">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              {showAll ? 'All' : 'Featured'} <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {showAll ? 'Semua repository GitHub saya' : 'Project terbaru dari GitHub'}
            </p>
          </div>
          {!showAll && (
            <Link
              to="/projects"
              className="group hidden sm:flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Lihat Semua
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal" style={{ transitionDelay: '200ms' }}>
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400"
            >
              Lihat Semua Project
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}