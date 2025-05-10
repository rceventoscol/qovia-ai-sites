
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="text-2xl font-bold mb-4 gradient-text">QOVIA</div>
            <p className="text-gray-400 max-w-sm">
              Sitios web con Inteligencia Artificial para negocios locales que quieren automatizar su operación y aumentar su eficiencia.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li><a href="#que-hacemos" className="text-gray-400 hover:text-white transition-colors">¿Qué hacemos?</a></li>
                <li><a href="#ia-negocio" className="text-gray-400 hover:text-white transition-colors">IA para tu negocio</a></li>
                <li><a href="#proceso" className="text-gray-400 hover:text-white transition-colors">Proceso QOVIA</a></li>
                <li><a href="#portafolio" className="text-gray-400 hover:text-white transition-colors">Casos de éxito</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Planes</h3>
              <ul className="space-y-2">
                <li><a href="#planes" className="text-gray-400 hover:text-white transition-colors">Starter AI</a></li>
                <li><a href="#planes" className="text-gray-400 hover:text-white transition-colors">Pro IA</a></li>
                <li><a href="#planes" className="text-gray-400 hover:text-white transition-colors">Full Automatizado</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 hover:text-white transition-colors">
                  <a href="https://wa.me/573165875372" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </li>
                <li className="text-gray-400 hover:text-white transition-colors">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </li>
                <li className="text-gray-400 hover:text-white transition-colors">
                  <a href="mailto:info@qovia.com">info@qovia.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} QOVIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
