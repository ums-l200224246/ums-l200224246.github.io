import React from 'react';
import { BlogPost } from '../types';
import { Clock, ChevronRight } from 'lucide-react';

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    description: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
    date: '2024-03-15',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Building Accessible Web Applications',
    description: 'Explore techniques and tools for creating web applications that are accessible to everyone.',
    date: '2024-03-10',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Modern CSS Techniques',
    description: 'Discover modern CSS features and how to use them effectively in your projects.',
    date: '2024-03-05',
    readTime: '6 min read'
  }
];

export default function Blog() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Latest Blog Posts
        </h2>
        <div className="space-y-6">
          {SAMPLE_POSTS.map((post) => (
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
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.description}
                </p>
                <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                  Read More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}