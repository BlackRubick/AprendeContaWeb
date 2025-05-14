// src/components/temas/CuentasContables.jsx
import { useState } from 'react';

const CuentasContables = () => {
  const [respuestas, setRespuestas] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  });
  const [mostrarResultados, setMostrarResultados] = useState(false);

  const handleRespuesta = (pregunta, respuesta) => {
    setRespuestas(prev => ({
      ...prev,
      [pregunta]: respuesta
    }));
  };

  const verificarRespuestas = () => {
    setMostrarResultados(true);
  };

  // Respuestas correctas
  const respuestasCorrectas = {
    1: 'activo',
    2: 'pasivo',
    3: 'ingreso',
    4: 'gasto'
  };

  // Verificar si una respuesta es correcta
  const esRespuestaCorrecta = (pregunta) => {
    return respuestas[pregunta] === respuestasCorrectas[pregunta];
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Cuentas Contables</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Definición</h3>
        <p className="text-gray-700 mb-4">
          Las cuentas contables son registros donde se anotan, de forma clara, ordenada y comprensible, los aumentos y disminuciones que sufre un valor o concepto del activo, pasivo o capital, como consecuencia de las operaciones realizadas por la entidad.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
          <p className="italic text-blue-800">
            "La cuenta es el instrumento que permite llevar a cabo la clasificación de los elementos que intervienen en una transacción financiera en atención a su naturaleza." — Elías Lara Flores
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Estructura de una cuenta</h3>
        <div className="flex justify-center mb-4">
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden w-full max-w-md">
            <div className="text-center font-bold bg-gray-100 p-2 border-b-2 border-gray-300">
              NOMBRE DE LA CUENTA
            </div>
            <div className="flex">
              <div className="w-1/2 p-2 border-r-2 border-gray-300">
                <div className="text-center font-bold mb-2">DEBE</div>
                <div className="text-center">(Cargos)</div>
              </div>
              <div className="w-1/2 p-2">
                <div className="text-center font-bold mb-2">HABER</div>
                <div className="text-center">(Abonos)</div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-gray-700">
          Esta representación gráfica es conocida como "cuenta T" por su forma. El lado izquierdo (debe) registra los cargos y el lado derecho (haber) registra los abonos.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Clasificación de las cuentas</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-2 px-4 border-b text-left">Grupo</th>
                <th className="py-2 px-4 border-b text-left">Naturaleza</th>
                <th className="py-2 px-4 border-b text-left">Ejemplos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b font-medium">Activo</td>
                <td className="py-2 px-4 border-b">Deudora</td>
                <td className="py-2 px-4 border-b">Caja, Bancos, Inventarios, Equipo</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b font-medium">Pasivo</td>
                <td className="py-2 px-4 border-b">Acreedora</td>
                <td className="py-2 px-4 border-b">Proveedores, Acreedores, Préstamos</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b font-medium">Capital</td>
                <td className="py-2 px-4 border-b">Acreedora</td>
                <td className="py-2 px-4 border-b">Capital Social, Utilidades Retenidas</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b font-medium">Ingresos</td>
                <td className="py-2 px-4 border-b">Acreedora</td>
                <td className="py-2 px-4 border-b">Ventas, Intereses Ganados</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b font-medium">Gastos</td>
                <td className="py-2 px-4 border-b">Deudora</td>
                <td className="py-2 px-4 border-b">Sueldos, Renta, Publicidad</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Reglas de cargo y abono</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-700 mb-2">Regla para Activos:</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Aumentan con un cargo (debe)</li>
              <li>Disminuyen con un abono (haber)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-700 mb-2">Regla para Pasivos y Capital:</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Aumentan con un abono (haber)</li>
              <li>Disminuyen con un cargo (debe)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Ejemplo práctico en la vida real</h3>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="font-medium mb-2">Transacción: Un negocio compra mercancía por $10,000 pagando el 50% en efectivo y el resto a crédito.</p>
          <p className="font-bold mb-2">Registro contable:</p>
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
                <tr>
                  <td className="py-2 px-4 border-b">Mercancías (Inventario)</td>
                  <td className="py-2 px-4 border-b text-right">$10,000</td>
                  <td className="py-2 px-4 border-b text-right"></td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Caja/Bancos</td>
                  <td className="py-2 px-4 border-b text-right"></td>
                  <td className="py-2 px-4 border-b text-right">$5,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Proveedores</td>
                  <td className="py-2 px-4 border-b text-right"></td>
                  <td className="py-2 px-4 border-b text-right">$5,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            Explicación: Se incrementa el inventario (activo) con un cargo, se disminuye el efectivo (activo) con un abono, y se incrementa la cuenta de proveedores (pasivo) con un abono.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Dinámica educativa</h3>
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
          <h4 className="font-bold text-indigo-700 mb-3">Clasificación de Cuentas</h4>
          <p className="mb-4">Clasifica las siguientes cuentas según su naturaleza (Activo, Pasivo, Capital, Ingreso o Gasto):</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="font-medium">1. Equipo de cómputo</p>
              <div className="mt-2">
                <button 
                  onClick={() => handleRespuesta(1, 'activo')}
                  className={`px-2 py-1 rounded mr-2 text-sm ${
                    respuestas[1] === 'activo' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                  }`}
                >
                  Activo
                </button>
                <button 
                  onClick={() => handleRespuesta(1, 'pasivo')}
                  className={`px-2 py-1 rounded text-sm ${
                    respuestas[1] === 'pasivo' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Pasivo
                </button>
                {mostrarResultados && (
                  <div className={`mt-2 ${esRespuestaCorrecta(1) ? 'text-green-500' : 'text-red-500'}`}>
                    {esRespuestaCorrecta(1) ? '✓ ¡Correcto!' : '✗ Incorrecto. Es un Activo.'}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="font-medium">2. Proveedores</p>
              <div className="mt-2">
                <button 
                  onClick={() => handleRespuesta(2, 'activo')}
                  className={`px-2 py-1 rounded mr-2 text-sm ${
                    respuestas[2] === 'activo' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Activo
                </button>
                <button 
                  onClick={() => handleRespuesta(2, 'pasivo')}
                  className={`px-2 py-1 rounded text-sm ${
                    respuestas[2] === 'pasivo' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Pasivo
                </button>
                {mostrarResultados && (
                  <div className={`mt-2 ${esRespuestaCorrecta(2) ? 'text-green-500' : 'text-red-500'}`}>
                    {esRespuestaCorrecta(2) ? '✓ ¡Correcto!' : '✗ Incorrecto. Es un Pasivo.'}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="font-medium">3. Ventas</p>
              <div className="mt-2">
                <button 
                  onClick={() => handleRespuesta(3, 'gasto')}
                  className={`px-2 py-1 rounded mr-2 text-sm ${
                    respuestas[3] === 'gasto' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Gasto
                </button>
                <button 
                  onClick={() => handleRespuesta(3, 'ingreso')}
                  className={`px-2 py-1 rounded text-sm ${
                    respuestas[3] === 'ingreso' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Ingreso
                </button>
                {mostrarResultados && (
                  <div className={`mt-2 ${esRespuestaCorrecta(3) ? 'text-green-500' : 'text-red-500'}`}>
                    {esRespuestaCorrecta(3) ? '✓ ¡Correcto!' : '✗ Incorrecto. Es un Ingreso.'}
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="font-medium">4. Gastos de publicidad</p>
              <div className="mt-2">
                <button 
                  onClick={() => handleRespuesta(4, 'gasto')}
                  className={`px-2 py-1 rounded mr-2 text-sm ${
                    respuestas[4] === 'gasto' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Gasto
                </button>
                <button 
                  onClick={() => handleRespuesta(4, 'ingreso')}
                  className={`px-2 py-1 rounded text-sm ${
                    respuestas[4] === 'ingreso' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Ingreso
                </button>
                {mostrarResultados && (
                  <div className={`mt-2 ${esRespuestaCorrecta(4) ? 'text-green-500' : 'text-red-500'}`}>
                    {esRespuestaCorrecta(4) ? '✓ ¡Correcto!' : '✗ Incorrecto. Es un Gasto.'}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <button 
            onClick={verificarRespuestas}
            className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors"
          >
            Verificar respuestas
          </button>
        </div>
      </div>
    </div>
  );
};

export default CuentasContables;