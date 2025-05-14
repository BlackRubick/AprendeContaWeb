// src/pages/Dinamicas.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useContabilidad } from '../hooks/useContabilidad';
import Navigation from '../components/common/Navigation';
import SimuladorContable from '../components/temas/Dinamicas/SimuladorContable';

const Dinamicas = () => {
  const { getAllDinamicas } = useContabilidad();
  const dinamicas = getAllDinamicas();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <Navigation />
        </div>
        
        <div className="md:w-3/4">
          <h1 className="text-3xl font-bold text-blue-800 mb-8">Dinámicas Educativas</h1>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Simulador Contable</h2>
            <p className="text-gray-700 mb-4">
              Practica el ciclo contable completo con nuestro simulador. Registra transacciones, elabora asientos contables y genera estados financieros.
            </p>
            <button 
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => document.getElementById('simulador').scrollIntoView({ behavior: 'smooth' })}
            >
              Ir al simulador
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {dinamicas.map(dinamica => (
              <div 
                key={dinamica.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{dinamica.titulo}</h3>
                  <p className="text-gray-600 mb-4">
                    {dinamica.descripcion}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Nivel: {dinamica.nivel}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Tiempo: {dinamica.tiempo}
                    </span>
                  </div>
                  <Link 
                    to={`/temas/${dinamica.temaId}`}
                    className="w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors block"
                  >
                    Realizar ejercicio
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div id="simulador" className="scroll-mt-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Simulador Contable Interactivo</h2>
            <SimuladorContable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dinamicas;