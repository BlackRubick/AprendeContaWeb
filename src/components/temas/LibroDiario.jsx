// src/components/temas/LibroDiario.jsx
import React, { useState } from 'react';

const LibroDiario = () => {
  const [asientos, setAsientos] = useState([
    { id: 1, fecha: '01/01/2025', descripcion: 'Inicio de operaciones', cuentas: [
      { nombre: 'Caja', debe: 50000, haber: 0 },
      { nombre: 'Bancos', debe: 100000, haber: 0 },
      { nombre: 'Capital Social', debe: 0, haber: 150000 }
    ]},
    { id: 2, fecha: '05/01/2025', descripcion: 'Compra de mercancía', cuentas: [
      { nombre: 'Inventarios', debe: 30000, haber: 0 },
      { nombre: 'Bancos', debe: 0, haber: 30000 }
    ]},
    { id: 3, fecha: '10/01/2025', descripcion: 'Venta de mercancía', cuentas: [
      { nombre: 'Bancos', debe: 40000, haber: 0 },
      { nombre: 'Ventas', debe: 0, haber: 40000 }
    ]}
  ]);

  const [nuevoAsiento, setNuevoAsiento] = useState({
    fecha: '',
    descripcion: '',
    cuentas: [
      { nombre: '', debe: 0, haber: 0 },
      { nombre: '', debe: 0, haber: 0 }
    ]
  });

  const handleFechaChange = (e) => {
    setNuevoAsiento({ ...nuevoAsiento, fecha: e.target.value });
  };

  const handleDescripcionChange = (e) => {
    setNuevoAsiento({ ...nuevoAsiento, descripcion: e.target.value });
  };

  const handleCuentaChange = (index, campo, valor) => {
    const nuevasCuentas = [...nuevoAsiento.cuentas];
    nuevasCuentas[index] = { ...nuevasCuentas[index], [campo]: valor };
    setNuevoAsiento({ ...nuevoAsiento, cuentas: nuevasCuentas });
  };

  const agregarCuenta = () => {
    setNuevoAsiento({
      ...nuevoAsiento,
      cuentas: [...nuevoAsiento.cuentas, { nombre: '', debe: 0, haber: 0 }]
    });
  };

  const quitarCuenta = (index) => {
    if (nuevoAsiento.cuentas.length <= 2) return; // Mínimo 2 cuentas
    const nuevasCuentas = nuevoAsiento.cuentas.filter((_, i) => i !== index);
    setNuevoAsiento({ ...nuevoAsiento, cuentas: nuevasCuentas });
  };

  const agregarAsiento = () => {
    // Validar que el asiento esté equilibrado
    const totalDebe = nuevoAsiento.cuentas.reduce((sum, cuenta) => sum + Number(cuenta.debe), 0);
    const totalHaber = nuevoAsiento.cuentas.reduce((sum, cuenta) => sum + Number(cuenta.haber), 0);
    
    if (totalDebe !== totalHaber) {
      alert('El asiento no está equilibrado. El total del DEBE debe ser igual al total del HABER.');
      return;
    }
    
    // Validar que todos los campos estén completos
    if (!nuevoAsiento.fecha || !nuevoAsiento.descripcion) {
      alert('Por favor complete todos los campos.');
      return;
    }
    
    for (const cuenta of nuevoAsiento.cuentas) {
      if (!cuenta.nombre || (cuenta.debe === 0 && cuenta.haber === 0)) {
        alert('Por favor complete todas las cuentas.');
        return;
      }
    }
    
    // Agregar el nuevo asiento
    setAsientos([
      ...asientos,
      {
        id: asientos.length + 1,
        ...nuevoAsiento
      }
    ]);
    
    // Reiniciar el formulario
    setNuevoAsiento({
      fecha: '',
      descripcion: '',
      cuentas: [
        { nombre: '', debe: 0, haber: 0 },
        { nombre: '', debe: 0, haber: 0 }
      ]
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Libro Diario</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Definición</h3>
        <p className="text-gray-700 mb-4">
          El libro diario es un documento contable donde se registran, día a día y en orden cronológico, todas las operaciones resultantes de los hechos económicos ocurridos en un período determinado. La anotación de un hecho económico en el libro diario se denomina "asiento".
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
          <p className="italic text-blue-800">
            "El diario general es un libro o registro que contiene todas las operaciones que realiza una empresa, en orden cronológico." — Elías Lara Flores
          </p>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Asientos del Libro Diario</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-2 px-4 border-b text-left">Fecha</th>
                <th className="py-2 px-4 border-b text-left">Descripción</th>
                <th className="py-2 px-4 border-b text-left">Cuenta</th>
                <th className="py-2 px-4 border-b text-right">Debe</th>
                <th className="py-2 px-4 border-b text-right">Haber</th>
              </tr>
            </thead>
            <tbody>
              {asientos.map(asiento => (
                <React.Fragment key={asiento.id}>
                  <tr className="bg-gray-100 font-semibold">
                    <td className="py-2 px-4 border-b">{asiento.fecha}</td>
                    <td className="py-2 px-4 border-b" colSpan="3">{asiento.descripcion}</td>
                    <td className="py-2 px-4 border-b"></td>
                  </tr>
                  {asiento.cuentas.map((cuenta, index) => (
                    <tr key={`${asiento.id}-${index}`} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b"></td>
                      <td className="py-2 px-4 border-b"></td>
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
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">Registrar nuevo asiento</h3>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="fecha">
                Fecha
              </label>
              <input
                type="date"
                id="fecha"
                className="w-full p-2 border border-gray-300 rounded"
                value={nuevoAsiento.fecha}
                onChange={handleFechaChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="descripcion">
                Descripción
              </label>
              <input
                type="text"
                id="descripcion"
                className="w-full p-2 border border-gray-300 rounded"
                value={nuevoAsiento.descripcion}
                onChange={handleDescripcionChange}
                placeholder="Ej. Compra de mercancía"
              />
            </div>
          </div>
          
          <h4 className="font-semibold mb-2">Cuentas</h4>
          {nuevoAsiento.cuentas.map((cuenta, index) => (
            <div key={index} className="grid grid-cols-5 gap-4 mb-2">
              <div className="col-span-3">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={cuenta.nombre}
                  onChange={(e) => handleCuentaChange(index, 'nombre', e.target.value)}
                  placeholder="Nombre de la cuenta"
                />
              </div>
              <div>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={cuenta.debe || ''}
                  onChange={(e) => handleCuentaChange(index, 'debe', parseFloat(e.target.value) || 0)}
                  placeholder="Debe"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={cuenta.haber || ''}
                  onChange={(e) => handleCuentaChange(index, 'haber', parseFloat(e.target.value) || 0)}
                  placeholder="Haber"
                />
                {index >= 2 && (
                  <button
                    type="button"
                    className="ml-2 text-red-500"
                    onClick={() => quitarCuenta(index)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
          
          <div className="mt-4 flex space-x-4">
            <button
              type="button"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              onClick={agregarCuenta}
            >
              + Agregar cuenta
            </button>
            <button
              type="button"
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
              onClick={agregarAsiento}
            >
              Registrar asiento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibroDiario;