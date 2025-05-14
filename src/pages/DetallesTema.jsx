// src/pages/DetallesTema.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContabilidad } from '../hooks/useContabilidad';
import Navigation from '../components/common/Navigation';
import CuentasContables from '../components/temas/CuentasContables';
import LibroDiario from '../components/temas/LibroDiario';
import EstadosFinancieros from '../components/temas/EstadosFinancieros';
import EjercicioPractico from '../components/temas/Dinamicas/EjercicioPractico';

const DetallesTema = () => {
  const { id } = useParams();
  const { getTemaById, setTemaActual, getDinamicasByTemaId } = useContabilidad();
  
  const tema = getTemaById(id);
  const dinamicas = getDinamicasByTemaId(Number(id));
  
  useEffect(() => {
    if (tema) {
      setTemaActual(tema);
    }
  }, [tema, setTemaActual]);
  
  const renderContenidoTema = () => {
    switch (Number(id)) {
      case 1:
        return <CuentasContables />;
      case 2:
        return <LibroDiario />;
      case 3:
        return <EstadosFinancieros />;
      default:
        return <div dangerouslySetInnerHTML={{ __html: tema.contenido }} />;
    }
  };
  
  if (!tema) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-300">
          <p className="text-yellow-800">El tema solicitado no existe.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <Navigation />
        </div>
        
        <div className="md:w-3/4">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl mb-8">
            <div className="flex items-center mb-4">
              <span className="text-5xl mr-4">{tema.icono}</span>
              <h1 className="text-3xl font-bold text-blue-800">{tema.titulo}</h1>
            </div>
            <p className="text-gray-700 text-lg">
              {tema.descripcion}
            </p>
          </div>
          
          {renderContenidoTema()}
          
          {dinamicas.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Ejercicios Prácticos</h2>
              <EjercicioPractico temaId={Number(id)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetallesTema;