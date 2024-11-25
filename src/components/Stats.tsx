import React from 'react';

const stats = [
  { number: '500+', label: 'Clients Worldwide' },
  { number: '1000+', label: 'Projects Completed' },
  { number: '50+', label: 'Expert Team Members' },
  { number: '99%', label: 'Client Satisfaction' }
];

const Stats = () => {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;