import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-gray-600 uppercase tracking-wider font-medium">Web Design Agency</span>
          <h1 className="text-6xl md:text-7xl font-bold text-black leading-tight">
            We craft digital experiences that matter
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vertex is a creative web design agency that transforms ideas into exceptional websites. 
            We blend aesthetics with functionality to create memorable digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full flex items-center justify-center hover:bg-gray-900">
              View Our Work <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="w-full sm:w-auto border-2 border-black text-black px-8 py-4 rounded-full hover:bg-gray-50">
              Get in Touch
            </button>
          </div>
          <div className="pt-16">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80"
              alt="Web Design"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;