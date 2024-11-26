// pages/index.tsx
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import lottie from 'lottie-web';
import 'aos/dist/aos.css';

// Import the animation JSON file
import animationData from '../assets/animacao.json';

const Hero = () => {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  // Initialize AOS and Lottie
  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current, // Element to render the animation in
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData, // Use the imported animation data
      });
    }

    // Cleanup function
    return () => {
      lottie.destroy(); // Destroy animation on component unmount
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex items-center bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1
            className="text-6xl md:text-7xl font-bold text-black leading-tight"
            data-aos="fade-up"
          >
            Criamos experiências digitais que importam
          </h1>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            A Vertex é uma agência criativa de design web que transforma ideias em sites excepcionais. 
            Combinamos estética e funcionalidade para criar experiências digitais memoráveis.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            data-aos="fade-up"
          >
            <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full flex items-center justify-center hover:bg-white hover:text-zinc-800 hover:border-2 hover:border-zinc-900">
              Ver Nosso Trabalho <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="w-full sm:w-auto border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-zinc-50">
              Entre em Contato
            </button>
          </div>
          <div
            className="pt-16 flex justify-center"
            data-aos="fade-up"
          >
            {/* Animation Container */}
            <div
              ref={animationContainer}
              className="w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
