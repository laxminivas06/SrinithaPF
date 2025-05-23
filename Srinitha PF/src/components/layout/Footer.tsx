import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Srinita
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              AI Engineer & Data Scientist
            </p>
          </div>
          
          <div className="flex space-x-6">
            <SocialLink href="https://github.com" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
            <SocialLink href="mailto:contact@example.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {year} Srinita. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;