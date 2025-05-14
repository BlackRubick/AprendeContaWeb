// src/hooks/useContabilidad.js
import { useContext } from 'react';
import { ContabilidadContext } from '../context/ContabilidadContext';

export const useContabilidad = () => {
  const context = useContext(ContabilidadContext);
  
  if (!context) {
    throw new Error('useContabilidad debe ser usado dentro de un ContabilidadProvider');
  }
  
  return context;
};

export default useContabilidad;