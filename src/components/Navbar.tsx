import React from 'react';
import { Moon, Sun, Github } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps extends Theme {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Navbar({ isDark, toggleTheme, activeSection, onSectionChange }: NavbarProps) {
  const navItems = ['Home', 'Projects', 'Blog', 'Contact'];
  
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Github className="h-8 w-8 text-gray-900 dark:text-white" />
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onSectionChange(item)}
                className={`${
                  activeSection === item
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                } hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}