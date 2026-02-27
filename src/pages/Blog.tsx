import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from 'lucide-react';
import Pagination from '../components/Pagination';
import { SAMPLE_POSTS } from '../data/posts';

const POSTS_PER_PAGE = 5;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(SAMPLE_POSTS.length / POSTS_PER_PAGE);

  const currentPosts = SAMPLE_POSTS.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50 min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          <span className="text-gradient">Blog</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Tulisan tentang teknologi, pengalaman, dan hal-hal menarik lainnya.
        </p>

        <div className="space-y-6">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="group p-6 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {post.description}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 group/link"
              >
                Baca Selengkapnya
                <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
}