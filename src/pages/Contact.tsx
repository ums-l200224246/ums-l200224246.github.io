import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  contact@example.com
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  San Francisco, CA
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}