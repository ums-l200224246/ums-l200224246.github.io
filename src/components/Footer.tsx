import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Raka Rendra Fayanto</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              IT Specialist & AI Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-sm">Quick Links</h4>
            <div className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/projects', label: 'Projects' },
                { to: '/blog', label: 'Blog' },
                { to: '/contact', label: 'Contact' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 text-sm">Connect</h4>
            <div className="flex space-x-3">
              <a href="https://github.com/ums-l200224246" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
                <Github className="h-5 w-5" />
              </a>
              {/* TODO: Ganti URL LinkedIn ke profil kamu */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/rxndrxx" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700/50 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Raka Rendra Fayanto. Made with
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}