
import React from 'react';
import { Link } from 'react-router-dom';
import { useContabilidad } from '../hooks/useContabilidad';
import Navigation from '../components/common/Navigation';

const Temas = () => {
  const { temas } = useContabilidad();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <Navigation />
        </div>
        
        <div className="md:w-3/4">
          <h1 className="text-3xl font-bold text-blue-800 mb-8">Temas de Contabilidad</h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            {temas.map(tema => (
              <div 
                key={tema.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-3">{tema.icono}</span>
                    <h3 className="text-xl font-bold text-blue-800">{tema.titulo}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {tema.descripcion}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Subtemas:</h4>
                    <ul className="space-y-1">
                      {tema.subtemas.map(subtema => (
                        <li key={subtema.id} className="flex items-center">
                          <svg className="h-4 w-4 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{subtema.titulo}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to={`/temas/${tema.id}`}
                    className="w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors block"
                  >
                    Estudiar este tema
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temas;