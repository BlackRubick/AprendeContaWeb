// src/context/ContabilidadContext.jsx
import { createContext, useState, useEffect } from 'react';
import temasContabilidad from '../data/temasContabilidad';

export const ContabilidadContext = createContext();

export const ContabilidadProvider = ({ children }) => {
  const [temas, setTemas] = useState(temasContabilidad);
  const [temaActual, setTemaActual] = useState(null);
  const [dinamicas, setDinamicas] = useState([]);
  
  // Obtener dinámicas relacionadas con los temas
  useEffect(() => {
    // Aquí podrías cargar dinámicas desde una API o archivo
    const dinamicasData = [
      {
        id: 1,
        titulo: 'Clasificación de Cuentas',
        descripcion: 'Aprende a identificar y clasificar cuentas contables',
        nivel: 'Básico',
        tiempo: '20 minutos',
        temaId: 1
      },
      {
        id: 2,
        titulo: 'Registro de Operaciones',
        descripcion: 'Practica el registro de asientos de diario',
        nivel: 'Intermedio',
        tiempo: '30 minutos',
        temaId: 2
      },
      {
        id: 3,
        titulo: 'Simulador Contable',
        descripcion: 'Crea estados financieros a partir de transacciones',
        nivel: 'Avanzado',
        tiempo: '45 minutos',
        temaId: 3
      },
      {
        id: 4,
        titulo: 'Ejercicio de Balanza de Comprobación',
        descripcion: 'Elabora una balanza de comprobación a partir de movimientos',
        nivel: 'Intermedio',
        tiempo: '25 minutos',
        temaId: 1
      },
      {
        id: 5,
        titulo: 'Identificación de Naturaleza de Cuentas',
        descripcion: 'Practica la identificación de naturaleza deudora o acreedora',
        nivel: 'Básico',
        tiempo: '15 minutos',
        temaId: 1
      }
    ];

    setDinamicas(dinamicasData);
  }, []);

  // Obtener tema por ID
  const getTemaById = (id) => {
    return temas.find(tema => tema.id === parseInt(id));
  };

  // Obtener dinámicas por tema ID
  const getDinamicasByTemaId = (temaId) => {
    return dinamicas.filter(dinamica => dinamica.temaId === parseInt(temaId));
  };

  // Obtener todas las dinámicas
  const getAllDinamicas = () => {
    return dinamicas;
  };

  return (
    <ContabilidadContext.Provider
      value={{
        temas,
        temaActual,
        setTemaActual,
        getTemaById,
        dinamicas,
        getDinamicasByTemaId,
        getAllDinamicas
      }}
    >
      {children}
    </ContabilidadContext.Provider>
  );
};