import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Sobre = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            data-aos="fade-up"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Sobre Nós"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div 
            data-aos="fade-up" 
            data-aos-delay="300" // Delay para animar com tempo
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Por Que Nos Escolher?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Com mais de 10 anos de experiência em entregar soluções de TI, ajudamos centenas 
              de empresas a alcançar seus objetivos de transformação digital.
            </p>
            <div className="space-y-4">
              {[
                'Equipe especializada de profissionais certificados',
                'Histórico comprovado de projetos bem-sucedidos',
                'Soluções tecnológicas de ponta',
                'Suporte e manutenção 24/7',
                'Soluções custo-efetivas',
                'Práticas de segurança líderes no setor'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3" data-aos="fade-up" data-aos-delay={index * 200}>
                  <Check className="text-black flex-shrink-0" /> {/* Updated color to black */}
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
