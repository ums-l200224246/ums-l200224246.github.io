import React, { useState } from 'react';
import { Moon, Sun, Github } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Theme } from '../types';
import MobileMenu from './MobileMenu';

interface NavbarProps extends Theme {}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];
  
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-gray-900 dark:text-white">
              <Github className="h-8 w-8" />
            </NavLink>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8 ml-auto mr-4">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `
                  ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}
                  hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium
                `}
              >
                {label}
              </NavLink>
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
            <MobileMenu
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen(!isMenuOpen)}
              navItems={navItems}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}