import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen mx-auto bg-black bg-cover bg-center"
    >
      {/* Logo background with reduced opacity */}
      <div className="absolute inset-0 flex items-center justify-center opacity-15">
        <img
          src="/images/hollow-point-logo.jpeg"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-85"></div>

      <div className="relative inset-0 max-w-7xl mx-auto flex flex-col items-start justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <img
              src="/images/hollow-point-logo.jpeg"
              alt="Hollow Point Logo"
              className="w-20 h-auto object-contain"
            />
            <h1 className="text-white font-bold text-4xl">
              Welcome to Hollow Point Security Solutions and Consulting
            </h1>
          </div>

          <div className="mb-12">
            <p className="text-gray-300 text-xl leading-relaxed">
              Welcome to Hollow Point Security Solutions, a proudly Black-owned
              company based in KwaZulu-Natal. We specialize in delivering top-tier
              security services tailored to meet the unique needs of each client.
              In addition to our core focus on safety and protection, we offer
              specialized consulting designed to provide strategic solutions that
              align with our clients' goals.
            </p>
            <p className="text-gray-300 text-xl mt-6 leading-relaxed">
              As a newly established company, we bring fresh energy,
              professionalism, and a client-first approach to every project we
              take on. Our commitment extends beyond KwaZulu-Natal—we are ready to
              serve and support clients across South Africa with integrity,
              reliability, and excellence.
            </p>
          </div>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl mb-12">
          <h2 className="text-white text-2xl font-bold mb-6">South African Crime Statistics 2023/24</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-black p-6 rounded-lg border border-zinc-800">
              <p className="text-white text-3xl font-bold mb-2">22,000+</p>
              <p className="text-gray-400">Reported carjacking incidents</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-zinc-800">
              <p className="text-white text-3xl font-bold mb-2">4,000+</p>
              <p className="text-gray-400">Kidnapping cases</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-zinc-800">
              <p className="text-white text-3xl font-bold mb-2">500,000+</p>
              <p className="text-gray-400">Reported household crimes</p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-zinc-800">
              <p className="text-white text-3xl font-bold mb-2">18,000+</p>
              <p className="text-gray-400">Business robberies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;