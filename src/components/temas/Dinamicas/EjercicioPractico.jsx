// src/components/temas/Dinamicas/EjercicioPractico.jsx
import React, { useState } from 'react';

const EjercicioPractico = ({ temaId }) => {
  // Ejercicios para el tema "Cuentas Contables" (ID: 1)
  const ejerciciosCuentasContables = [
    {
      id: 1,
      titulo: 'Clasificación de Cuentas',
      descripcion: 'Identifica a qué grupo pertenece cada una de las siguientes cuentas (Activo, Pasivo, Capital, Ingreso o Gasto).',
      cuentas: [
        { nombre: 'Caja', respuestaCorrecta: 'activo' },
        { nombre: 'Proveedores', respuestaCorrecta: 'pasivo' },
        { nombre: 'Ventas', respuestaCorrecta: 'ingreso' },
        { nombre: 'Gastos de publicidad', respuestaCorrecta: 'gasto' },
        { nombre: 'Préstamos bancarios', respuestaCorrecta: 'pasivo' },
        { nombre: 'Mobiliario y equipo', respuestaCorrecta: 'activo' },
        { nombre: 'Capital social', respuestaCorrecta: 'capital' },
        { nombre: 'Comisiones ganadas', respuestaCorrecta: 'ingreso' }
      ]
    },
    {
      id: 2,
      titulo: 'Reglas de Cargo y Abono',
      descripcion: 'Indica si las siguientes cuentas aumentan con cargo o con abono.',
      cuentas: [
        { nombre: 'Bancos', respuestaCorrecta: 'cargo' },
        { nombre: 'Proveedores', respuestaCorrecta: 'abono' },
        { nombre: 'Capital social', respuestaCorrecta: 'abono' },
        { nombre: 'Ventas', respuestaCorrecta: 'abono' },
        { nombre: 'Gastos de administración', respuestaCorrecta: 'cargo' },
        { nombre: 'Documentos por pagar', respuestaCorrecta: 'abono' }
      ]
    }
  ];

  // Ejercicios para el tema "Libro Diario" (ID: 2)
  const ejerciciosLibroDiario = [
    {
      id: 1,
      titulo: 'Registro de Asientos',
      descripcion: 'Registra los siguientes asientos en el libro diario.',
      transacciones: [
        {
          descripcion: 'Se inician operaciones con un capital de $100,000 en efectivo.',
          solucion: [
            { cuenta: 'Caja', debe: 100000, haber: 0 },
            { cuenta: 'Capital Social', debe: 0, haber: 100000 }
          ]
        },
        {
          descripcion: 'Se compra mercancía por $30,000, pagando el 50% en efectivo y el resto a crédito.',
          solucion: [
            { cuenta: 'Mercancías (Inventario)', debe: 30000, haber: 0 },
            { cuenta: 'Caja', debe: 0, haber: 15000 },
            { cuenta: 'Proveedores', debe: 0, haber: 15000 }
          ]
        }
      ]
    }
  ];

  // Ejercicios para el tema "Estados Financieros" (ID: 3)
  const ejerciciosEstadosFinancieros = [
    {
      id: 1,
      titulo: 'Elaboración de Balance General',
      descripcion: 'Con las siguientes cuentas y saldos, elabora un balance general.',
      cuentas: [
        { nombre: 'Caja', saldo: 15000, tipo: 'activo' },
        { nombre: 'Bancos', saldo: 85000, tipo: 'activo' },
        { nombre: 'Clientes', saldo: 35000, tipo: 'activo' },
        { nombre: 'Inventarios', saldo: 55000, tipo: 'activo' },
        { nombre: 'Mobiliario y Equipo', saldo: 120000, tipo: 'activo' },
        { nombre: 'Proveedores', saldo: 45000, tipo: 'pasivo' },
        { nombre: 'Documentos por pagar', saldo: 35000, tipo: 'pasivo' },
        { nombre: 'Capital Social', saldo: 200000, tipo: 'capital' },
        { nombre: 'Utilidades Retenidas', saldo: 30000, tipo: 'capital' }
      ]
    }
  ];

  // Seleccionar el ejercicio basado en el temaId
  const getEjerciciosPorTema = () => {
    switch (temaId) {
      case 1:
        return ejerciciosCuentasContables;
      case 2:
        return ejerciciosLibroDiario;
      case 3:
        return ejerciciosEstadosFinancieros;
      default:
        return ejerciciosCuentasContables;
    }
  };

  const ejercicios = getEjerciciosPorTema();
  const [ejercicioActual, setEjercicioActual] = useState(ejercicios[0]);
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const handleRespuesta = (cuentaNombre, respuesta) => {
    setRespuestas({
      ...respuestas,
      [cuentaNombre]: respuesta
    });
  };

  const verificarRespuestas = () => {
    setMostrarResultados(true);
  };

  const esRespuestaCorrecta = (cuenta) => {
    return respuestas[cuenta.nombre] === cuenta.respuestaCorrecta;
  };

  const renderEjercicioClasificacion = () => {
    return (
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-4">{ejercicioActual.titulo}</h3>
        <p className="mb-6 text-gray-700">{ejercicioActual.descripcion}</p>
        
        <div className="space-y-4 mb-6">
          {ejercicioActual.cuentas.map((cuenta, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="font-medium text-gray-800 mb-2">{cuenta.nombre}</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleRespuesta(cuenta.nombre, 'activo')}
                  className={`px-3 py-1 rounded text-sm ${
                    respuestas[cuenta.nombre] === 'activo' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Activo
                </button>
                <button
                  onClick={() => handleRespuesta(cuenta.nombre, 'pasivo')}
                  className={`px-3 py-1 rounded text-sm ${
                    respuestas[cuenta.nombre] === 'pasivo' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Pasivo
                </button>
                <button
                  onClick={() => handleRespuesta(cuenta.nombre, 'capital')}
                  className={`px-3 py-1 rounded text-sm ${
                    respuestas[cuenta.nombre] === 'capital' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Capital
                </button>
                <button
                  onClick={() => handleRespuesta(cuenta.nombre, 'ingreso')}
                  className={`px-3 py-1 rounded text-sm ${
                    respuestas[cuenta.nombre] === 'ingreso' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Ingreso
                </button>
                <button
                  onClick={() => handleRespuesta(cuenta.nombre, 'gasto')}
                  className={`px-3 py-1 rounded text-sm ${
                    respuestas[cuenta.nombre] === 'gasto' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Gasto
                </button>
              </div>
              
              {mostrarResultados && (
                <div className={`mt-2 ${esRespuestaCorrecta(cuenta) ? 'text-green-500' : 'text-red-500'}`}>
                  {esRespuestaCorrecta(cuenta) 
                    ? '✓ ¡Correcto!' 
                    : `✗ Incorrecto. La respuesta correcta es: ${cuenta.respuestaCorrecta.charAt(0).toUpperCase() + cuenta.respuestaCorrecta.slice(1)}`
                  }
                </div>
              )}
            </div>
          ))}
        </div>
        
        <button
          onClick={verificarRespuestas}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Verificar respuestas
        </button>
      </div>
    );
  };

  const renderEjercicioCargoAbono = () => {
    return (
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-4">{ejercicioActual.titulo}</h3>
        <p className="mb-6 text-gray-700">{ejercicioActual.descripcion}</p>
        
        <div className="space-y-4 mb-6">
          {ejercicioActual.cuentas.map((cuenta, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="font-medium text-gray-800 mb-2">{cuenta.nombre}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleRespuesta(cuenta.nombre, 'cargo')}
                  className={`px-4 py-1 rounded ${
                    respuestas[cuenta.nombre] === 'cargo' 
                      ? 'bg-red-500 text-white' 
                      : 'bg-red-100 text-red-800 hover:bg-red-200'
                  }`}
                >
                  Cargo (Debe)
                </button>
                <button
                  onClick={() => handleRespuesta(cuenta.nombre, 'abono')}
                  className={`px-4 py-1 rounded ${
                    respuestas[cuenta.nombre] === 'abono' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-green-100 text-green-800 hover:bg-green-200'
                  }`}
                >
                  Abono (Haber)
                </button>
              </div>
              
              {mostrarResultados && (
                <div className={`mt-2 ${esRespuestaCorrecta(cuenta) ? 'text-green-500' : 'text-red-500'}`}>
                  {esRespuestaCorrecta(cuenta) 
                    ? '✓ ¡Correcto!' 
                    : `✗ Incorrecto. La cuenta aumenta con ${cuenta.respuestaCorrecta}.`
                  }
                </div>
              )}
            </div>
          ))}
        </div>
        
        <button
          onClick={verificarRespuestas}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Verificar respuestas
        </button>
      </div>
    );
  };

  const renderEjercicio = () => {
    // ID 1 corresponde a ejercicios de Cuentas Contables
    if (temaId === 1) {
      if (ejercicioActual.id === 1) {
        return renderEjercicioClasificacion();
      } else if (ejercicioActual.id === 2) {
        return renderEjercicioCargoAbono();
      }
    }
    
    // Por defecto, retornar algún ejercicio genérico o mensaje
    return <p>Ejercicio no disponible.</p>;
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Ejercicio Práctico</h2>
      
      {/* Selector de ejercicios si hay más de uno */}
      {ejercicios.length > 1 && (
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Selecciona un ejercicio:</label>
          <div className="flex flex-wrap gap-2">
            {ejercicios.map(ejercicio => (
              <button
                key={ejercicio.id}
                onClick={() => {
                  setEjercicioActual(ejercicio);
                  setRespuestas({});
                  setMostrarResultados(false);
                }}
                className={`px-4 py-2 rounded-lg ${
                  ejercicioActual.id === ejercicio.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-blue-600 border border-blue-300 hover:bg-blue-50'
                }`}
              >
                {ejercicio.titulo}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {renderEjercicio()}
    </div>
  );
};

export default EjercicioPractico;