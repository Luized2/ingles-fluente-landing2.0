
import React from 'react';
import { Linkedin, Instagram, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-landing-text text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Guilherme Santiago</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Professor de inglês há mais de 10 anos, especializado em ajudar brasileiros a conquistarem 
            a fluência através de métodos práticos e eficazes.
          </p>
          
          <div className="flex justify-center items-center gap-2 mb-8">
            <Mail className="w-5 h-5 text-gray-300" />
            <a href="mailto:contato@guilhermesantiago.com" className="text-gray-300 hover:text-white transition-colors">
              contato@guilhermesantiago.com
            </a>
          </div>
          
          <div className="flex justify-center gap-4 mb-8">
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors group">
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors group">
              <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
            </a>
          </div>
          
          <div className="border-t border-gray-600 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 Guilherme Santiago. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
