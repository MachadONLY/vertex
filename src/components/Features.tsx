import React from 'react';
import { Settings, Users, Layout, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Settings className="w-10 h-10 text-gray-700" />,
    title: 'Tecnologia Avançada',
    description: 'Aproveite as tecnologias e frameworks mais recentes para construir soluções robustas.'
  },
  {
    icon: <Users className="w-10 h-10 text-gray-700" />,
    title: 'Suporte Dedicado',
    description: 'Nossa equipe está disponível 24/7 para ajudar com qualquer problema técnico.'
  },
  {
    icon: <Layout className="w-10 h-10 text-gray-700" />,
    title: 'Design Moderno',
    description: 'Crie interfaces bonitas, responsivas e fáceis de usar.'
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-gray-700" />,
    title: 'Comunicação Clara',
    description: 'Atualizações regulares e comunicação transparente durante todo o projeto.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Principais Funcionalidades
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra o que faz nossas soluções de TI se destacarem da concorrência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              {/* Fundo Menor */}
              <div className="inline-block p-6 bg-gray-200 rounded-full mb-4">
                {feature.icon}
              </div>
              {/* Títulos e Descrições Monocromáticos */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
