import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import profile from '/images/profile.jpg';

export default function Introduction() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src= {profile}
            alt="Profile"
            className="mx-auto h-32 w-32 rounded-full"
          />
          <h1 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
            Raka Rendra Fayanto
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Full Stack Prompt Enginer
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            99% content is made by AI.
          </p>
          
          <div className="mt-6 flex justify-center space-x-6">
            <a href="https://github.com/ums-l200224246" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/rxndrxx" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}