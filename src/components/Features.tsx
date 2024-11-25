import React from 'react';
import { Settings, Users, Layout, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: 'Advanced Technology',
    description: 'Leverage the latest technologies and frameworks to build robust solutions.'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'Dedicated Support',
    description: 'Our team is available 24/7 to help you with any technical issues.'
  },
  {
    icon: <Layout className="w-12 h-12 text-blue-600" />,
    title: 'Modern Design',
    description: 'Create beautiful, responsive, and user-friendly interfaces.'
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
    title: 'Clear Communication',
    description: 'Regular updates and transparent communication throughout the project.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our IT solutions stand out from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
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