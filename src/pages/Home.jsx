// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import { Link } from 'react-router-dom';
import { useContabilidad } from '../hooks/useContabilidad';

const Home = () => {
  const { temas } = useContabilidad();
  const temaDestacado = temas.find(tema => tema.destacado);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <Hero />

      {/* Tema destacado */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Tema destacado</h2>
          <Link 
            to="/temas"
            className="text-blue-600 hover:text-blue-800"
          >
            Ver todos los temas →
          </Link>
        </div>
        
        {temaDestacado && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{temaDestacado.icono}</span>
                <h3 className="text-xl font-bold text-blue-800">{temaDestacado.titulo}</h3>
              </div>
              <p className="text-gray-600 mb-4">
                {temaDestacado.descripcion}
              </p>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-blue-800 italic">
                  "La cuenta es el elemento básico y central en la contabilidad y en los sistemas de información contable." — Elías Lara Flores
                </p>
              </div>
              <Link 
                to={`/temas/${temaDestacado.id}`}
                className="w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors block"
              >
                Estudiar este tema
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Características */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">¿Cómo aprendes con nosotros?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <div className="bg-blue-100 text-blue-800 p-3 inline-block rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Contenido teórico</h3>
            <p className="text-gray-600">
              Explicaciones claras y concisas basadas en el libro "Contabilidad 1" de Elías Lara Flores.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <div className="bg-green-100 text-green-800 p-3 inline-block rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Ejemplos prácticos</h3>
            <p className="text-gray-600">
              Casos reales y aplicaciones de la contabilidad en el mundo empresarial.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
            <div className="bg-purple-100 text-purple-800 p-3 inline-block rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Dinámicas interactivas</h3>
            <p className="text-gray-600">
              Ejercicios y actividades para poner en práctica lo aprendido de forma divertida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;