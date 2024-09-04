import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed z-10 left-0 top-0 h-screen w-64 bg-black bg-opacity-30 backdrop-blur-md flex flex-col border-r border-white shadow-2xl shadow-white/20 shadow-left">
      <div className="flex-grow flex flex-col justify-center p-4">
        <h2 className="text-white text-xl font-bold mb-4 text-center">Navigation</h2>
        <ul className="flex flex-col items-center space-y-4">
          <li><Link href="/home" className="text-white hover:text-silver hover:scale-110 transition-all duration-200">Home</Link></li>
          <li><Link href="/home/bringtolife" className="text-white hover:text-silver hover:scale-110 transition-all duration-200">Bring To Life</Link></li>
          <li><Link href="/contact" className="text-white hover:text-silver hover:scale-110 transition-all duration-200">Contact</Link></li>
        </ul>
      </div>
      <div className="w-full h-px bg-white relative">
        <div className="absolute right-0 top-1/2 w-4 h-4 bg-orange-500 transform -translate-y-1/2 translate-x-1/2"></div>
      </div>
      <div className="flex-grow flex flex-col justify-center p-4">
        <h2 className="text-white text-xl font-bold mb-4 text-center">Social Media</h2>
        <ul className="flex flex-col items-center space-y-4">
          <li><a href="#" className="text-white hover:text-silver hover:scale-110 transition-all duration-200">Facebook</a></li>
          <li><a href="#" className="text-white hover:text-silver hover:scale-110 transition-all duration-200">Twitter</a></li>
          <li><a href="#" className="text-white hover:text-silver hover:scale-110 transition-all duration-200">Instagram</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;