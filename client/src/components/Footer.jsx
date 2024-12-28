import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Xenon Estate. All Rights Reserved.
        </p>
        <p className="text-xs mt-2">
          Developed by <strong>Divyansh Kumar Singh</strong> | College: UIET, Chandigarh, Punjab University | Batch: 2021-2025
        </p>

        {/* Social Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/singhdivyanshdishu" // Replace with your GitHub username
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/singh-divyansh-dishu/" // Replace with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
