// src/components/common/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-4xl font-bold mr-2">📚</div>
            <div>
              <h1 className="text-2xl font-bold">ContabilidadFácil</h1>
              <p className="text-blue-200 text-sm">Basado en Elías Lara Flores</p>
            </div>
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link 
                  to="/"
                  className={`px-3 py-2 rounded-lg transition-colors ${isActive('/') ? 'bg-white text-blue-800' : 'text-white hover:bg-blue-700'}`}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/temas"
                  className={`px-3 py-2 rounded-lg transition-colors ${isActive('/temas') ? 'bg-white text-blue-800' : 'text-white hover:bg-blue-700'}`}
                >
                  Temas
                </Link>
              </li>
              <li>
                <Link 
                  to="/dinamicas"
                  className={`px-3 py-2 rounded-lg transition-colors ${isActive('/dinamicas') ? 'bg-white text-blue-800' : 'text-white hover:bg-blue-700'}`}
                >
                  Dinámicas
                </Link>
              </li>
            </ul>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className={`block px-3 py-2 rounded-lg transition-colors ${isActive('/') ? 'bg-white text-blue-800' : 'text-white hover:bg-blue-700'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/temas"
                  className={`block px-3 py-2 rounded-lg transition-colors ${isActive('/temas') ? 'bg-white text-blue-800' : 'text-white hover:bg-blue-700'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Temas
                </Link>
              </li>
              <li>
                <Link 
                  to="/dinamicas"
                  className={`block px-3 py-2 rounded-lg transition-colors ${isActive('/dinamicas') ? 'bg-white text-blue-800' : 'text-white hover:bg-blue-700'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Dinámicas
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;