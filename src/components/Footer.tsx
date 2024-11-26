import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechSolutions</h3>
            <p className="text-gray-400">
              Fornecendo soluções inovadoras de TI para empresas em todo o mundo.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Desenvolvimento de Software</li>
              <li>Desenvolvimento Web</li>
              <li>Soluções em Nuvem</li>
              <li>Cibersegurança</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sobre Nós</li>
              <li>Nosso Time</li>
              <li>Carreiras</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Conecte-se</h4>
            <ul className="space-y-2 text-gray-400">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TechSolutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
