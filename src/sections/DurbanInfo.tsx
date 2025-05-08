import React from 'react';
import { Shield, TrendingUp, Clock, Users } from 'lucide-react';

const DurbanInfo = () => {
  return (
    <section className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-white font-bold text-3xl mb-6">
              Private Security in Durban: Essential for Modern Safety
            </h2>
            
            <p className="text-gray-300 text-lg mb-6">
              Private security has become essential in Durban, South Africa, where our services often exceed standard police capabilities. We provide proactive crime prevention, rapid response times, and state-of-the-art equipment to ensure your safety.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-black p-6 rounded-xl">
                <Clock className="text-red-600 w-8 h-8 mb-4" />
                <h3 className="text-white font-bold text-xl mb-3">Faster Response</h3>
                <p className="text-gray-400">Our strategic positioning allows for quicker incident response compared to traditional law enforcement.</p>
              </div>

              <div className="bg-black p-6 rounded-xl">
                <Shield className="text-red-600 w-8 h-8 mb-4" />
                <h3 className="text-white font-bold text-xl mb-3">Better Equipment</h3>
                <p className="text-gray-400">Advanced technology and modern security systems for superior protection and monitoring.</p>
              </div>
            </div>

            <div className="bg-black p-6 rounded-xl mb-6">
              <TrendingUp className="text-red-600 w-8 h-8 mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">Economic Impact</h3>
              <p className="text-gray-400">The private security industry is a major employer in South Africa and attracts significant foreign investment, contributing to economic growth.</p>
            </div>
          </div>

          <div className="bg-black p-8 rounded-xl">
            <h3 className="text-white font-bold text-2xl mb-6">Why Choose Private Security?</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-bold text-lg mb-2 flex items-center">
                  <Users className="text-red-600 w-5 h-5 mr-2" />
                  Proactive Crime Prevention
                </h4>
                <p className="text-gray-400">We employ advanced technology and strategic patrols to deter criminal activity before it occurs.</p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2 flex items-center">
                  <Users className="text-red-600 w-5 h-5 mr-2" />
                  Collaboration with Law Enforcement
                </h4>
                <p className="text-gray-400">We maintain strong partnerships with SAPS and other agencies to enhance security effectiveness.</p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2 flex items-center">
                  <Users className="text-red-600 w-5 h-5 mr-2" />
                  Comprehensive Coverage
                </h4>
                <p className="text-gray-400">From residential to commercial security, we provide tailored solutions for all protection needs.</p>
              </div>

              <div>
                <h4 className="text-white font-bold text-lg mb-2 flex items-center">
                  <Users className="text-red-600 w-5 h-5 mr-2" />
                  Industry Leadership
                </h4>
                <p className="text-gray-400">Part of South Africa's well-established private security sector, known for excellence and reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DurbanInfo;