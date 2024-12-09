// pages/index.tsx
import { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRightIcon } from "lucide-react";
import AOS from "aos";
import lottie from "lottie-web";
import "aos/dist/aos.css";

import animationData from "../assets/animacao.json";

const Hero = () => {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
    }

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen pt-20 sm:pt-32 pb-12 flex items-center bg-white"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1
            className="text-4xl mt-12 sm:text-5xl md:text-6xl font-extrabold text-black leading-tight"
            data-aos="fade-up"
          >
            Transforme ideias em sites incríveis em menos de 48 horas
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto"
            data-aos="fade-up"
          >
            Criação, otimização SEO
            e insights impulsionados por IA. 
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            data-aos="fade-up"
          >
            <a href="#portfolio" className=" px-5 py-3 flex hover:scale-110 transform transition ease-in-out duration-300  justify-between gap-3 items-center hover:text-zinc-900 hover:bg-white hover:border hover:border-zinc-700 bg-black text-white text-center rounded-full text-lg font-semibold">
            Saiba Mais <ArrowUpRightIcon className="w-5 h-6 font-extrabold"/>
            </a>
          </div>
          <div
            className="pt-12 sm:pt-16 flex justify-center"
            data-aos="fade-up"
          >
            {/* Animation Container */}
            <div
              ref={animationContainer}
              className="w-64 sm:w-[400px] md:w-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
