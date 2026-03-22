import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800 mt-16">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-orange-400">
            WDMTech Labs
          </h2>
          <p className="text-sm mt-3">
            Advanced E-commerce Simulation Platform built for modern developers 
            and scalable business solutions.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-2 text-sm">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <a href="#" className="hover:text-orange-400 transition">Home</a>
          <a href="#" className="hover:text-orange-400 transition">Products</a>
          <a href="#" className="hover:text-orange-400 transition">About</a>
          <a href="#" className="hover:text-orange-400 transition">Contact</a>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-orange-400 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs border-t border-gray-800 py-4">
        © {new Date().getFullYear()} 
        <span className="text-orange-400 font-semibold"> WDMTech Labs</span>. 
        All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;