import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-serifHeading text-green-800">Aman Khan</h1>
        <ul className="flex space-x-6 text-gray-700 font-body">
          <li>
            <a href="#hero" className="hover:text-gold">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gold">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gold">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-gold">
              Education
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gold">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
