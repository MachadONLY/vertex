import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fique à vontade para entrar em contato conosco para dúvidas ou qualquer pergunta. Estamos prontos para ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-gray-600" />
                  <span className="text-gray-800">contato@solucoesdigitais.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-gray-600" />
                  <span className="text-gray-800">+55 (11) 1234-5678</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-gray-600" />
                  <span className="text-gray-800">Rua Tecnológica, 123, Vale do Silício, SP 94025</span>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-zinc-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
