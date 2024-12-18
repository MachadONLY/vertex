import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center gap-6">
            <img src={logo} alt="logo da agency" width={45} className='rounded-xl' />
            <span className="text-2xl font-bold text-black">Vertex</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-black">Início</a>
            <a href="#services" className="text-gray-600 hover:text-black">Serviços</a>
            <a href="#about" className="text-gray-600 hover:text-black">Sobre</a>
            <a href="#portfolio" className="text-gray-600 hover:text-black">Portfólio</a>
            <a href="#contact" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900">
              Iniciar Projeto
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-black">Início</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-black">Serviços</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-black">Sobre</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-600 hover:text-black">Portfólio</a>
            <a href="#contact" className="block px-3 py-2 bg-black text-white text-center rounded-full">
              Iniciar Projeto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
