import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1 - Informações de Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-primary" />
                <a href="https://wa.me/5511999999999" className="hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <a href="mailto:contato@milenamachado.com.br" className="hover:text-primary transition-colors">
                  contato@milenamachado.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Redes Sociais e CRP */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://instagram.com/dra.milenamachado" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400">CRP: XX/XXXXX</p>
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Dra. Milena Machado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}; 