import React from 'react';
import { Camera, Shield, Bell, Flame } from 'lucide-react';

const products = [
  {
    icon: Camera,
    title: 'CCTV Camera',
    description: 'State-of-the-art surveillance systems for comprehensive security monitoring.',
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    icon: Shield,
    title: 'Uniform Orders',
    description: 'Professional security uniforms and equipment for your security personnel.',
    image: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    icon: Bell,
    title: 'Alarms',
    description: 'Advanced alarm systems with 24/7 monitoring and rapid response capabilities.',
    image: 'https://images.pexels.com/photos/371949/pexels-photo-371949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    icon: Flame,
    title: 'Fire Extinguishers',
    description: 'High-quality fire safety equipment and emergency response solutions.',
    image: 'https://images.pexels.com/photos/6120166/pexels-photo-6120166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Products = () => {
  return (
    <section className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white font-bold text-3xl mb-12 text-center">Our Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div key={product.title} className="bg-black rounded-xl border border-zinc-800 hover:border-white transition-all duration-300 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute top-4 left-4 flex items-center justify-center w-12 h-12 bg-black bg-opacity-60 rounded-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-xl mb-3">{product.title}</h3>
                  <p className="text-gray-400">{product.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;