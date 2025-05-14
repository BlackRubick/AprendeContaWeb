// src/components/temas/Dinamicas/EjercicioPractico.jsx
import React, { useState, useEffect } from 'react';

const EjercicioPractico = ({ temaId }) => {
  // Asegurarnos de que temaId sea un número
  const temaIdNum = Number(temaId);
  
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
    console.log("Tema ID recibido:", temaIdNum);
    
    switch (temaIdNum) {
      case 1:
        return ejerciciosCuentasContables;
      case 2:
        return ejerciciosLibroDiario;
      case 3:
        return ejerciciosEstadosFinancieros;
      default:
        console.log("No se encontraron ejercicios para el tema ID:", temaIdNum);
        return ejerciciosCuentasContables; // Por defecto, mostrar ejercicios de cuentas contables
    }
  };

  const [ejercicios, setEjercicios] = useState([]);
  const [ejercicioActual, setEjercicioActual] = useState(null);
  const [respuestas, setRespuestas] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [cargando, setCargando] = useState(true);

  // Inicializar ejercicios y ejercicio actual
  useEffect(() => {
    try {
      setCargando(true);
      const nuevosEjercicios = getEjerciciosPorTema();
      setEjercicios(nuevosEjercicios || []);
      
      if (nuevosEjercicios && nuevosEjercicios.length > 0) {
        setEjercicioActual(nuevosEjercicios[0]);
      } else {
        setEjercicioActual(null);
      }
      
      setRespuestas({});
      setMostrarResultados(false);
    } catch (error) {
      console.error("Error al cargar ejercicios:", error);
    } finally {
      setCargando(false);
    }
  }, [temaIdNum]);

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
    // Verificación defensiva
    if (!ejercicioActual || !ejercicioActual.cuentas || !Array.isArray(ejercicioActual.cuentas)) {
      return (
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-yellow-800">
            Los datos del ejercicio no están disponibles en este momento.
          </p>
        </div>
      );
    }

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
    // Verificación defensiva
    if (!ejercicioActual || !ejercicioActual.cuentas || !Array.isArray(ejercicioActual.cuentas)) {
      return (
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-yellow-800">
            Los datos del ejercicio no están disponibles en este momento.
          </p>
        </div>
      );
    }

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

  const renderEjercicioLibroDiario = () => {
    // Verificación defensiva
    if (!ejercicioActual || !ejercicioActual.transacciones || !Array.isArray(ejercicioActual.transacciones)) {
      return (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Ejercicio de Libro Diario</h3>
          <p className="text-blue-700 mb-4">
            Este ejercicio te permitirá practicar el registro de operaciones en el libro diario.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="text-yellow-800">
              <strong>Próximamente:</strong> Estamos trabajando en implementar este ejercicio de forma interactiva.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-4">{ejercicioActual.titulo}</h3>
        <p className="mb-6 text-gray-700">{ejercicioActual.descripcion}</p>
        
        <div className="space-y-6 mb-6">
          {ejercicioActual.transacciones.map((transaccion, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="font-medium text-gray-800 mb-4">{transaccion.descripcion}</p>
              
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 mb-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Solución:</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-left">Cuenta</th>
                        <th className="py-2 px-4 border-b text-right">Debe</th>
                        <th className="py-2 px-4 border-b text-right">Haber</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transaccion.solucion && transaccion.solucion.map((cuenta, i) => (
                        <tr key={i}>
                          <td className="py-2 px-4 border-b">
                            {cuenta.haber > 0 && <span className="ml-8">  </span>}
                            {cuenta.nombre}
                          </td>
                          <td className="py-2 px-4 border-b text-right">
                            {cuenta.debe > 0 ? `$${cuenta.debe.toLocaleString()}` : ''}
                          </td>
                          <td className="py-2 px-4 border-b text-right">
                            {cuenta.haber > 0 ? `$${cuenta.haber.toLocaleString()}` : ''}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-blue-800">
            <strong>Nota:</strong> Este ejercicio es demostrativo. Pronto implementaremos una versión interactiva para que puedas practicar el registro de asientos.
          </p>
        </div>
      </div>
    );
  };

  const renderEjercicioBalanceGeneral = () => {
    // Verificación defensiva
    if (!ejercicioActual || !ejercicioActual.cuentas || !Array.isArray(ejercicioActual.cuentas)) {
      return (
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Ejercicio de Balance General</h3>
          <p className="text-blue-700 mb-4">
            Este ejercicio te permitirá practicar la elaboración de un balance general.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="text-yellow-800">
              <strong>Próximamente:</strong> Estamos trabajando en implementar este ejercicio de forma interactiva.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-4">{ejercicioActual.titulo}</h3>
        <p className="mb-6 text-gray-700">{ejercicioActual.descripcion}</p>
        
        <div className="bg-white border border-gray-300 rounded-lg p-6 mb-6">
          <h4 className="font-bold text-center mb-4">Cuentas disponibles:</h4>
          
          <div className="grid md:grid-cols-3 gap-4">
            {ejercicioActual.cuentas.map((cuenta, index) => (
              <div key={index} className={`p-3 rounded-lg border ${
                cuenta.tipo === 'activo' ? 'bg-blue-50 border-blue-200' :
                cuenta.tipo === 'pasivo' ? 'bg-red-50 border-red-200' :
                'bg-green-50 border-green-200'
              }`}>
                <p className="font-medium">{cuenta.nombre}</p>
                <p className="text-gray-700">${cuenta.saldo.toLocaleString()}</p>
                <p className="text-xs capitalize">{cuenta.tipo}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-blue-800">
            <strong>Nota:</strong> Este ejercicio es demostrativo. Pronto implementaremos una versión interactiva para que puedas practicar la elaboración de estados financieros.
          </p>
        </div>
      </div>
    );
  };

  const renderEjercicio = () => {
    // Si estamos cargando, mostrar indicador
    if (cargando) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-600">Cargando ejercicio...</p>
        </div>
      );
    }
    
    // Si no hay ejercicio actual, mostrar mensaje
    if (!ejercicioActual) {
      return (
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-yellow-800">
            No se encontró un ejercicio para este tema (ID: {temaIdNum}).
            Por favor, selecciona otro tema o ejercicio.
          </p>
        </div>
      );
    }
    
    console.log("Renderizando ejercicio para tema:", temaIdNum);
    console.log("Ejercicio actual ID:", ejercicioActual?.id);
    
    try {
      // Tema 1: Cuentas Contables
      if (temaIdNum === 1) {
        if (ejercicioActual.id === 1) {
          return renderEjercicioClasificacion();
        } else if (ejercicioActual.id === 2) {
          return renderEjercicioCargoAbono();
        }
      }
      
      // Tema 2: Libro Diario
      if (temaIdNum === 2) {
        return renderEjercicioLibroDiario();
      }
      
      // Tema 3: Estados Financieros
      if (temaIdNum === 3) {
        return renderEjercicioBalanceGeneral();
      }
      
      // Si llegamos aquí, mostrar mensaje genérico
      return (
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-yellow-800">
            No se encontró un ejercicio específico para este tema (ID: {temaIdNum}) y ejercicio (ID: {ejercicioActual?.id}).
          </p>
        </div>
      );
    } catch (error) {
      console.error("Error al renderizar ejercicio:", error);
      return (
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <p className="text-red-800">
            Ocurrió un error al cargar el ejercicio. Por favor, intenta nuevamente.
          </p>
        </div>
      );
    }
  };

  // Si no hay ejercicios disponibles para este tema
  if (ejercicios.length === 0 && !cargando) {
    return (
      <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
        <h2 className="text-xl font-semibold text-yellow-800 mb-3">Sin ejercicios disponibles</h2>
        <p className="text-yellow-700">
          Actualmente no hay ejercicios disponibles para este tema. Estamos trabajando para añadir más contenido pronto.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Ejercicio Práctico</h2>
      
      {/* Selector de ejercicios si hay más de uno */}
      {ejercicios.length > 1 && !cargando && (
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
                  ejercicioActual?.id === ejercicio.id
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