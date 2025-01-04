import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../types';

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

export default function BlogPostPage() {
  const { id } = useParams();
  const post = SAMPLE_POSTS.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="py-16 text-center">
        <p className="text-xl text-gray-600 dark:text-gray-400">Post not found</p>
        <Link
          to="/blog"
          className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
1
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            {post.readTime}
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          {post.content}
        </div>
      </div>
    </article>
  );
}