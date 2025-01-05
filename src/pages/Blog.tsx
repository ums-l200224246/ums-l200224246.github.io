import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from 'lucide-react';
import Pagination from '../components/Pagination';
import { BlogPost } from '../types';

const POSTS_PER_PAGE = 5;

// This would typically come from an API
const SAMPLE_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    description: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
    date: '2024-03-15',
    readTime: '5 min read',
    content: '...' // Full content would be here
  },
  // ... more posts
];

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(SAMPLE_POSTS.length / POSTS_PER_PAGE);
  
  const currentPosts = SAMPLE_POSTS.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Blog Posts
        </h1>
        
        <div className="space-y-6">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
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