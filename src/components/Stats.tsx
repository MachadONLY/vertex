import React from 'react';

const services = [
  'Descoberta e Planejamento',
  'Design Personalizado',
  'Desenvolvimento e Testes',
  'Lançamento e Otimização',
  'Manutenção Contínua',
  'Consultoria Digital',
];

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-black overflow-hidden">
      <div className="relative w-full  overflow-hidden">
        {/* Loop contínuo de texto */}
        <div className="flex w-[130%] animate-marquee">
          {services.map((service, index) => (
            <span
              key={index}
              className="text-2xl text-white font-bold uppercase whitespace-nowrap mx-6"
            >
              {service}
            </span>
          ))}

          {/* Duplicação do conteúdo para o loop contínuo */}
          {services.map((service, index) => (
            <span
              key={`duplicate-${index}`}
              className="text-2xl text-white font-bold uppercase whitespace-nowrap mx-6"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
