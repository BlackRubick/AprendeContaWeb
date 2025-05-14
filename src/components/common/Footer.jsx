// src/components/common/Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ContabilidadFácil</h3>
            <p className="text-gray-300 mb-4">
              Plataforma educativa para el aprendizaje de contabilidad básica y avanzada. 
              Basada en los conceptos de Elías Lara Flores.
              Esta pagina fue realizada por Cesar Gomez Aguilera :)
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/temas" className="text-blue-300 hover:text-white transition-colors">
                  Temas de contabilidad
                </Link>
              </li>
              <li>
                <Link to="/dinamicas" className="text-blue-300 hover:text-white transition-colors">
                  Dinámicas educativas
                </Link>
              </li>
              <li>
                <Link to="/temas/1" className="text-blue-300 hover:text-white transition-colors">
                  Cuentas Contables
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <p className="text-gray-300 mb-2">
              ¿Tienes alguna pregunta o sugerencia?
            </p>
            <a 
              href="mailto:info@contabilidadfacil.com" 
              className="text-blue-300 hover:text-white transition-colors"
            >
              BlackRubick14@gmail.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ContabilidadFácil. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;