import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="About Us"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              With over 10 years of experience in delivering IT solutions, we've helped hundreds 
              of businesses achieve their digital transformation goals.
            </p>
            <div className="space-y-4">
              {[
                'Expert team of certified professionals',
                'Proven track record of successful projects',
                'Cutting-edge technology solutions',
                '24/7 support and maintenance',
                'Cost-effective solutions',
                'Industry-leading security practices'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="text-green-500 flex-shrink-0" />
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

export default About;