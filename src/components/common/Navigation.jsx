// src/components/common/Navigation.jsx
import { Link } from 'react-router-dom';
import { useContabilidad } from '../../hooks/useContabilidad';

const Navigation = () => {
  const { temas } = useContabilidad();
  
  return (
    <nav className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Navegación</h3>
      <ul className="space-y-2">
        <li>
          <Link 
            to="/"
            className="block px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link 
            to="/temas"
            className="block px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            Todos los temas
          </Link>
        </li>
        {temas.map(tema => (
          <li key={tema.id}>
            <Link 
              to={`/temas/${tema.id}`}
              className="block px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              {tema.icono} {tema.titulo}
            </Link>
          </li>
        ))}
        <li>
          <Link 
            to="/dinamicas"
            className="block px-3 py-2 rounded-lg transition-colors text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            Dinámicas educativas
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;