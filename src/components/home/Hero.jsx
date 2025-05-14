// src/components/home/Hero.jsx
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-10 shadow-md">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Aprende Contabilidad de Manera Práctica y Divertida</h2>
          <p className="text-lg text-gray-700 mb-6">
            Domina los conceptos fundamentales de contabilidad con explicaciones claras, 
            ejemplos prácticos y ejercicios interactivos.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/temas" 
              className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              Explorar temas
            </Link>
            <Link 
              to="/temas/1"
              className="bg-white text-blue-600 font-medium py-2 px-6 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors shadow-md"
            >
              Cuentas contables
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
            <div className="text-center text-6xl mb-4">💼📊📈</div>
            <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">¿Por qué aprender contabilidad?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Fundamental para la toma de decisiones empresariales</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Habilidad altamente valorada en el mercado laboral</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Esencial para emprendedores y profesionales</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Te ayuda a entender y mejorar las finanzas personales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;