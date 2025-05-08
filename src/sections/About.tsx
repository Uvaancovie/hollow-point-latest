import React from 'react';
import { Shield, Users, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white font-bold text-3xl mb-12 text-center">About Us</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-lg mb-6">
              Welcome to Hollow Point Security Solutions, a proudly Black-owned company based in KwaZulu-Natal. We specialize in delivering top-tier security services tailored to meet the unique needs of each client.
            </p>
            
            <p className="text-gray-300 text-lg mb-6">
              In addition to our core focus on safety and protection, we offer specialized consulting designed to provide strategic solutions that align with our clients' goals. As a newly established company, we bring fresh energy, professionalism, and a client-first approach to every project we take on.
            </p>
            
            <p className="text-gray-300 text-lg mb-10">
              Our commitment extends beyond KwaZulu-Natal—we are ready to serve and support clients across South Africa with integrity, reliability, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black p-6 rounded-xl border border-zinc-800">
              <Shield className="text-white w-12 h-12 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Expert Protection</h3>
              <p className="text-gray-400">Highly trained security professionals with extensive experience.</p>
            </div>
            
            <div className="bg-black p-6 rounded-xl border border-zinc-800">
              <Users className="text-white w-12 h-12 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Client-Focused</h3>
              <p className="text-gray-400">Customized security solutions tailored to your needs.</p>
            </div>
            
            <div className="bg-black p-6 rounded-xl border border-zinc-800">
              <Clock className="text-white w-12 h-12 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">24/7 Service</h3>
              <p className="text-gray-400">Round-the-clock security teams and monitoring.</p>
            </div>
            
            <div className="bg-black p-6 rounded-xl border border-zinc-800">
              <TrendingUp className="text-white w-12 h-12 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">Growing Fast</h3>
              <p className="text-gray-400">Expanding our services across South Africa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;