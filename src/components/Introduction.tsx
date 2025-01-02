import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Introduction() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Profile"
            className="mx-auto h-32 w-32 rounded-full"
          />
          <h1 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
            Raka Rendra Fayanto <br /> Universitas Muhammadiyah Surakarta
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
            Passionate about building beautiful and functional web applications.
            I love working with React, Node.js, and exploring new technologies.
          </p>
          
          <div className="mt-6 flex justify-center space-x-6">
            <a href="https://github.com" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}