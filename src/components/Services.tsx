import React, { useEffect, useState } from 'react';
import { Palette, Code, Layout, Megaphone, Smartphone, Gauge } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicos = [
  {
    icone: <Layout size={40} className="text-black" />,
    titulo: 'Design de Sites',
    descricao: 'Designs bonitos e intuitivos que envolvem seu público e elevam sua marca.'
  },
  {
    icone: <Code size={40} className="text-black" />,
    titulo: 'Desenvolvimento',
    descricao: 'Código limpo e eficiente que traz seu design à vida com funcionalidade sem falhas.'
  },
  {
    icone: <Palette size={40} className="text-black" />,
    titulo: 'Design UI/UX',
    descricao: 'Design centrado no usuário que cria experiências digitais significativas e envolventes.'
  },
  {
    icone: <Smartphone size={40} className="text-black" />,
    titulo: 'Design Responsivo',
    descricao: 'Sites que ficam e funcionam perfeitamente em todos os dispositivos e tamanhos de tela.'
  },
  {
    icone: <Megaphone size={40} className="text-black" />,
    titulo: 'Estratégia Digital',
    descricao: 'Planejamento estratégico para garantir que seu site atinja seus objetivos de negócios.'
  },
  {
    icone: <Gauge size={40} className="text-black" />,
    titulo: 'Desempenho',
    descricao: 'Otimização para velocidade, segurança e visibilidade nos motores de busca.'
  }
];

const Servicos = () => {
  const [rolandoParaCima, setRolandoParaCima] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Ouvir o evento de rolagem para detectar a direção da rolagem
    let ultimaPosicaoScroll = window.scrollY;
    const lidarComScroll = () => {
      if (window.scrollY < ultimaPosicaoScroll) {
        setRolandoParaCima(true);
      } else {
        setRolandoParaCima(false);
      }
      ultimaPosicaoScroll = window.scrollY;
    };

    window.addEventListener('scroll', lidarComScroll);

    // Limpeza ao desmontar
    return () => {
      window.removeEventListener('scroll', lidarComScroll);
      AOS.refresh();
    };
  }, []);

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos serviços completos de design e desenvolvimento de sites para dar vida à sua visão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow duration-300"
              data-aos={rolandoParaCima ? 'fade-up' : 'fade-down'} // Mudar animação com base na direção da rolagem
              data-aos-delay={index * 100} // Estabelecer o atraso de animação
            >
              <div className="mb-4">{servico.icone}</div>
              <h3 className="text-xl font-semibold text-black mb-3">{servico.titulo}</h3>
              <p className="text-gray-600">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;
