import React from 'react';
import { Palette, Code, Layout, Megaphone, Smartphone, Gauge } from 'lucide-react';

const services = [
  {
    icon: <Layout size={40} className="text-black" />,
    title: 'Web Design',
    description: 'Beautiful, intuitive designs that engage your audience and elevate your brand.'
  },
  {
    icon: <Code size={40} className="text-black" />,
    title: 'Development',
    description: 'Clean, efficient code that brings your design to life with seamless functionality.'
  },
  {
    icon: <Palette size={40} className="text-black" />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates meaningful and engaging digital experiences.'
  },
  {
    icon: <Smartphone size={40} className="text-black" />,
    title: 'Responsive Design',
    description: 'Websites that look and perform beautifully across all devices and screen sizes.'
  },
  {
    icon: <Megaphone size={40} className="text-black" />,
    title: 'Digital Strategy',
    description: 'Strategic planning to ensure your website achieves your business objectives.'
  },
  {
    icon: <Gauge size={40} className="text-black" />,
    title: 'Performance',
    description: 'Optimization for speed, security, and search engine visibility.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive web design and development services to bring your vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;