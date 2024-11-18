import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Globe } from 'lucide-react';

export function Header() {
  return (
    <div className="border-b border-gray-200 pb-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">John Doe</h1>
          <h2 className="text-2xl text-blue-600 mt-2">Senior Software Engineer</h2>
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600">
              <MapPin size={18} className="mr-2 flex-shrink-0" />
              San Francisco, CA
            </div>
            <div className="flex items-center text-gray-600">
              <Mail size={18} className="mr-2 flex-shrink-0" />
              john.doe@example.com
            </div>
            <div className="flex items-center text-gray-600">
              <Phone size={18} className="mr-2 flex-shrink-0" />
              (555) 123-4567
            </div>
            <div className="flex items-center text-gray-600">
              <Globe size={18} className="mr-2 flex-shrink-0" />
              portfolio.johndoe.dev
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}