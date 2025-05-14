// src/components/temas/EstadosFinancieros.jsx
import React, { useState } from 'react';

const EstadosFinancieros = () => {
  const [tipoEstado, setTipoEstado] = useState('balance');
  
  const dataBalanceGeneral = {
    activo: [
      { nombre: 'Caja', valor: 25000 },
      { nombre: 'Bancos', valor: 120000 },
      { nombre: 'Inventarios', valor: 85000 },
      { nombre: 'Clientes', valor: 45000 },
      { nombre: 'Terrenos', valor: 200000 },
      { nombre: 'Edificios', valor: 350000 },
      { nombre: 'Equipos de Cómputo', valor: 75000 },
      { nombre: 'Depreciación Acumulada', valor: -50000 }
    ],
    pasivo: [
      { nombre: 'Proveedores', valor: 65000 },
      { nombre: 'Documentos por Pagar', valor: 40000 },
      { nombre: 'Impuestos por Pagar', valor: 30000 },
      { nombre: 'Préstamos Bancarios', valor: 150000 }
    ],
    capital: [
      { nombre: 'Capital Social', valor: 500000 },
      { nombre: 'Utilidades Retenidas', valor: 45000 },
      { nombre: 'Utilidad del Ejercicio', valor: 20000 }
    ]
  };
  
  const dataEstadoResultados = {
    ingresos: [
      { nombre: 'Ventas', valor: 750000 },
      { nombre: 'Otros Ingresos', valor: 15000 }
    ],
    costos: [
      { nombre: 'Costo de Ventas', valor: 450000 }
    ],
    gastos: [
      { nombre: 'Gastos de Venta', valor: 85000 },
      { nombre: 'Gastos de Administración', valor: 120000 },
      { nombre: 'Gastos Financieros', valor: 45000 },
      { nombre: 'Impuestos', valor: 45000 }
    ]
  };
  
  // Calcular totales del balance
  const totalActivo = dataBalanceGeneral.activo.reduce((total, cuenta) => total + cuenta.valor, 0);
  const totalPasivo = dataBalanceGeneral.pasivo.reduce((total, cuenta) => total + cuenta.valor, 0);
  const totalCapital = dataBalanceGeneral.capital.reduce((total, cuenta) => total + cuenta.valor, 0);
  
  // Calcular totales del estado de resultados
  const totalIngresos = dataEstadoResultados.ingresos.reduce((total, cuenta) => total + cuenta.valor, 0);
  const totalCostos = dataEstadoResultados.costos.reduce((total, cuenta) => total + cuenta.valor, 0);
  const totalGastos = dataEstadoResultados.gastos.reduce((total, cuenta) => total + cuenta.valor, 0);
  const utilidadBruta = totalIngresos - totalCostos;
  const utilidadNeta = utilidadBruta - totalGastos;
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Estados Financieros</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Definición</h3>
        <p className="text-gray-700 mb-4">
          Los estados financieros son informes que utilizan las instituciones para dar a conocer la situación económica y financiera y los cambios que experimenta la misma a una fecha o periodo determinado. Esta información resulta útil para la administración, gestores, reguladores y otros tipos de interesados como los accionistas, acreedores o propietarios.
        </p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Tipos de Estados Financieros</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Balance General (Estado de Situación Financiera)</h4>
            <p className="text-gray-700">
              Muestra la situación financiera de una entidad en un momento determinado. Presenta los activos (recursos), pasivos (obligaciones) y capital contable (patrimonio).
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Estado de Resultados (Estado de Pérdidas y Ganancias)</h4>
            <p className="text-gray-700">
              Muestra los ingresos, costos y gastos, así como la utilidad o pérdida resultante en un periodo determinado.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">Estado de Cambios en el Capital Contable</h4>
            <p className="text-gray-700">
              Muestra los cambios en la inversión de los propietarios durante un periodo.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">Estado de Flujos de Efectivo</h4>
            <p className="text-gray-700">
              Muestra las entradas y salidas de efectivo en un periodo determinado.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-blue-700">Ejemplo práctico</h3>
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded ${tipoEstado === 'balance' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setTipoEstado('balance')}
            >
              Balance General
            </button>
            <button
              className={`px-4 py-2 rounded ${tipoEstado === 'resultados' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setTipoEstado('resultados')}
            >
              Estado de Resultados
            </button>
          </div>
        </div>
        
        {tipoEstado === 'balance' ? (
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h3 className="text-center font-bold text-xl mb-6">Comercial XYZ, S.A. de C.V.</h3>
            <h4 className="text-center font-bold mb-6">Balance General al 31 de diciembre de 2025</h4>
            <h4 className="text-center font-bold mb-6">(Expresado en pesos)</h4>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-bold text-blue-800 mb-2 border-b-2 border-blue-800 pb-1">ACTIVO</h5>
                <div className="mb-4">
                  <h6 className="font-bold text-gray-700 mb-1">Activo Circulante</h6>
                  {dataBalanceGeneral.activo.slice(0, 4).map((cuenta, index) => (
                    <div key={index} className="flex justify-between py-1">
                      <span>{cuenta.nombre}</span>
                      <span className="font-medium">${cuenta.valor.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-1 border-t border-gray-300 mt-1">
                    <span className="font-medium">Total Activo Circulante</span>
                    <span className="font-medium">${dataBalanceGeneral.activo.slice(0, 4).reduce((total, cuenta) => total + cuenta.valor, 0).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h6 className="font-bold text-gray-700 mb-1">Activo Fijo</h6>
                  {dataBalanceGeneral.activo.slice(4).map((cuenta, index) => (
                    <div key={index} className="flex justify-between py-1">
                      <span>{cuenta.nombre}</span>
                      <span className="font-medium">${cuenta.valor.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-1 border-t border-gray-300 mt-1">
                    <span className="font-medium">Total Activo Fijo</span>
                    <span className="font-medium">${dataBalanceGeneral.activo.slice(4).reduce((total, cuenta) => total + cuenta.valor, 0).toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex justify-between py-2 border-t-2 border-blue-800 font-bold text-blue-800">
                  <span>TOTAL ACTIVO</span>
                  <span>${totalActivo.toLocaleString()}</span>
                </div>
              </div>
              
              <div>
                <h5 className="font-bold text-blue-800 mb-2 border-b-2 border-blue-800 pb-1">PASIVO Y CAPITAL</h5>
                <div className="mb-4">
                  <h6 className="font-bold text-gray-700 mb-1">Pasivo</h6>
                  {dataBalanceGeneral.pasivo.map((cuenta, index) => (
                    <div key={index} className="flex justify-between py-1">
                      <span>{cuenta.nombre}</span>
                      <span className="font-medium">${cuenta.valor.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-1 border-t border-gray-300 mt-1">
                    <span className="font-medium">Total Pasivo</span>
                    <span className="font-medium">${totalPasivo.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h6 className="font-bold text-gray-700 mb-1">Capital Contable</h6>
                  {dataBalanceGeneral.capital.map((cuenta, index) => (
                    <div key={index} className="flex justify-between py-1">
                      <span>{cuenta.nombre}</span>
                      <span className="font-medium">${cuenta.valor.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-1 border-t border-gray-300 mt-1">
                    <span className="font-medium">Total Capital Contable</span>
                    <span className="font-medium">${totalCapital.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex justify-between py-2 border-t-2 border-blue-800 font-bold text-blue-800">
                  <span>TOTAL PASIVO Y CAPITAL</span>
                  <span>${(totalPasivo + totalCapital).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white border border-gray-300 rounded-lg p-6">
            <h3 className="text-center font-bold text-xl mb-6">Comercial XYZ, S.A. de C.V.</h3>
            <h4 className="text-center font-bold mb-6">Estado de Resultados</h4>
            <h5 className="text-center font-bold mb-6">Del 1 de enero al 31 de diciembre de 2025</h5>
            <h6 className="text-center mb-6">(Expresado en pesos)</h6>
            
            <div className="max-w-2xl mx-auto">
              <div className="mb-4">
                {dataEstadoResultados.ingresos.map((cuenta, index) => (
                  <div key={index} className="flex justify-between py-1">
                    <span className="font-medium">{cuenta.nombre}</span>
                    <span className="font-medium">${cuenta.valor.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between py-1 border-t border-gray-300">
                  <span className="font-bold">Total Ingresos</span>
                  <span className="font-bold">${totalIngresos.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mb-4">
                {dataEstadoResultados.costos.map((cuenta, index) => (
                  <div key={index} className="flex justify-between py-1">
                    <span className="font-medium">{cuenta.nombre}</span>
                    <span className="font-medium">${cuenta.valor.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between py-1 border-t border-gray-300">
                  <span className="font-bold">Total Costos</span>
                  <span className="font-bold">${totalCostos.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="flex justify-between py-2 bg-blue-50 px-2 rounded">
                <span className="font-bold text-blue-800">UTILIDAD BRUTA</span>
                <span className="font-bold text-blue-800">${utilidadBruta.toLocaleString()}</span>
              </div>
              
              <div className="my-4">
                <h6 className="font-bold text-gray-700 mb-1">Gastos de Operación</h6>
                {dataEstadoResultados.gastos.map((cuenta, index) => (
                  <div key={index} className="flex justify-between py-1">
                    <span className="font-medium">{cuenta.nombre}</span>
                    <span className="font-medium">${cuenta.valor.toLocaleString()}</span>
                  </div>
                ))}
                <div className="flex justify-between py-1 border-t border-gray-300">
                  <span className="font-bold">Total Gastos</span>
                  <span className="font-bold">${totalGastos.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="flex justify-between py-2 bg-green-50 px-2 rounded border-t-2 border-green-600">
                <span className="font-bold text-green-800">UTILIDAD NETA</span>
                <span className="font-bold text-green-800">${utilidadNeta.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstadosFinancieros;