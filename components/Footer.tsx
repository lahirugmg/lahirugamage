"use client";

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaBlog } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lahiru Gamage</h3>
            <p className="text-gray-300 mb-4">Solution Architect specializing in enterprise software architecture and cloud-native architecture.</p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/lahirugmg" target="_blank" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </Link>
              <Link href="https://github.com/lahirugmg" target="_blank" aria-label="GitHub" className="text-gray-300 hover:text-white transition-colors">
                <FaGithub className="h-6 w-6" />
              </Link>
              <Link href="/blog" aria-label="Blog" className="text-gray-300 hover:text-white transition-colors">
                <FaBlog className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <p className="text-gray-300 mb-4">
              Feel free to connect with me on <Link href="https://www.linkedin.com/in/lahirugmg" target="_blank" className="text-primary hover:text-white transition-colors">LinkedIn</Link> or <Link href="https://github.com/lahirugmg" target="_blank" className="text-primary hover:text-white transition-colors">GitHub</Link> for professional inquiries.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Lahiru Gamage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 