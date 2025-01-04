import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ isOpen, onToggle, navItems }: MobileMenuProps) {
  return (
    <div className="sm:hidden">
      <button
        onClick={onToggle}
        className="p-2 rounded-md text-gray-700 dark:text-gray-300"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={onToggle}
                className={({ isActive }) => `
                  ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'}
                  block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800
                `}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}