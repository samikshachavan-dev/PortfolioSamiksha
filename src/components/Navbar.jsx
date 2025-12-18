import React from 'react';

const Navbar = () => {
  return (
    // 'sticky top-0' keeps the nav visible. 'z-50' ensures it stays above other elements.
    <nav className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md flex justify-between items-center px-8 lg:px-20 py-5 transition-all">
      
      {/* Brand Name - Matches the Hero H1 font weight */}
      <span className="text-2xl font-extrabold tracking-tighter text-slate-900">
        Portfolio<span className="text-blue-600">.</span>
      </span>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-slate-600">
        <a href="#About">
        <li className="hover:text-blue-600 cursor-pointer transition-colors">About</li></a>
        <a href="#Projects">
        <li className="hover:text-blue-600 cursor-pointer transition-colors">Projects</li>
        </a>
         <a href="#Skills">
        <li className="hover:text-blue-600 cursor-pointer transition-colors">Skills</li>
        </a>
        {/* Contact as a stylized button to match Hero buttons */}
        <a href="#ContactMe">
        <li className="hover:text-blue-600 cursor-pointer transition-colors">Contact
        </li>
        </a>
      </ul>

      {/* Mobile Menu Icon (Simple version) */}
      <div className="md:hidden text-slate-900 font-bold">
        Menu
      </div>
    </nav>
  );
};

export default Navbar;