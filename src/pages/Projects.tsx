import { useState } from 'react';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { ExternalLink, Star, GitFork, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: 'bg-blue-400',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-green-400',
  HTML: 'bg-orange-400',
  CSS: 'bg-purple-400',
  Java: 'bg-red-400',
  'Jupyter Notebook': 'bg-orange-500',
  Shell: 'bg-emerald-400',
  PHP: 'bg-violet-400',
};

const ITEMS_PER_PAGE = 9;

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const { repos, loading, error, totalCount } = useGitHubRepos(
    'ums-l200224246',
    currentPage,
    ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Home
          </Link>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl">
            Semua repository publik dari GitHub saya. Total {totalCount > 0 ? `${totalCount} repositories` : '...'}.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm">Memuat repositories...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-20">
            <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>
            <button
              onClick={() => setCurrentPage(1)}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors text-sm"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {/* Project Grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-5 sm:p-6 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    {/* Repo name + link */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all leading-tight pr-2">
                        {repo.name}
                      </h3>
                      <ExternalLink className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-blue-500 transition-colors mt-0.5" />
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 min-h-[2.5rem]">
                      {repo.description || 'No description available'}
                    </p>

                    {/* Meta: language, stars, forks */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-gray-500 dark:text-gray-400">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2.5 h-2.5 rounded-full ${LANGUAGE_COLORS[repo.language] || 'bg-gray-400'}`} />
                          <span>{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      {repo.forks_count > 0 && (
                        <div className="flex items-center gap-1">
                          <GitFork className="h-3.5 w-3.5" />
                          <span>{repo.forks_count}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10 sm:mt-12">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1)
                    .map((p, idx, arr) => (
                      <div key={p} className="flex items-center">
                        {idx > 0 && arr[idx - 1] !== p - 1 && (
                          <span className="px-1 text-gray-400 text-sm">...</span>
                        )}
                        <button
                          onClick={() => setCurrentPage(p)}
                          className={`min-w-[36px] h-9 rounded-lg text-sm font-medium transition-all ${
                            currentPage === p
                              ? 'bg-blue-500 text-white shadow-md shadow-blue-500/25'
                              : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          {p}
                        </button>
                      </div>
                    ))}
                </div>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
