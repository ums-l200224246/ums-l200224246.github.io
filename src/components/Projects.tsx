import React, { useEffect, useState } from 'react';
import { Repository } from '../types';
import { ExternalLink, Star, Code } from 'lucide-react';

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ums-l200224246/repos?sort=stars&per_page=6');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading repositories...</div>;
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
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
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}