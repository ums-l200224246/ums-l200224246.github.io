import React, { useState } from "react";
import { useGitHubRepos } from "../hooks/useGitHubRepos";
import Pagination from "../components/Pagination";
import { ExternalLink, Star, Code } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Ensure you are using react-router-dom for navigation

const ITEMS_PER_PAGE = 10;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate(); // Initialize the navigate function
  const { repos, loading, error, totalCount } = useGitHubRepos(
    "github",
    currentPage,
    ITEMS_PER_PAGE,
  );
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  if (loading) {
    return <div className="text-center py-20">Loading repositories...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-600">Error: {error}</div>;
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="mb-8 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Back
        </button>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          My Projects
        </h1>

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

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
