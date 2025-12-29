import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FaFacebook, FaInstagram } from 'react-icons/fa6';
import { HiDownload } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 px-4 sm:px-8 flex flex-col items-center gap-4">

      {/* Resume Button */}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#00df72] text-gray-900 px-5 py-2 rounded-md text-base sm:text-lg hover:bg-[#00c45f] transition-colors duration-300"
      >
        <HiDownload className="text-lg sm:text-xl" /> Resume
      </a>

      {/* Social Links */}
      <div className="flex gap-6 mt-2">
        <a href="https://github.com/sunilpaudyal18/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00df72] transition-colors duration-300 text-2xl">
          <FaGithub />
        </a>
        <a href="https://au.linkedin.com/in/sunil-paudyal18/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00df72] transition-colors duration-300 text-2xl">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/sunil.paudyal.12" target="_blank" rel="noopener noreferrer" className="hover:text-[#00df72] transition-colors duration-300 text-2xl">
          <FaFacebook />
        </a>
         <a href="https://www.instagram.com/sunil_18_paudyal/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00df72] transition-colors duration-300 text-2xl">
          <FaInstagram />
        </a>
        
      </div>

      {/* Footer Text */}
      <p className="text-sm sm:text-base mt-4 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Sunil Paudyal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
