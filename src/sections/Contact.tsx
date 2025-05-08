import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const whatsappNumber = "+27123456789"; // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your security services.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white font-bold text-3xl mb-12 text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-300 mb-8">
              Whether you need a security consultation or want to learn more about our services, our team is ready to assist you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-white" />
                <div className="ml-4">
                  <h4 className="text-white font-bold">Phone</h4>
                  <p className="text-gray-300">+27 (123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-white" />
                <div className="ml-4">
                  <h4 className="text-white font-bold">Email</h4>
                  <p className="text-gray-300">sohanmaharajh@hollowpointsecurity.co.za</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-white" />
                <div className="ml-4">
                  <h4 className="text-white font-bold">Address</h4>
                  <p className="text-gray-300">KwaZulu-Natal, South Africa</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-white" />
                <div className="ml-4">
                  <h4 className="text-white font-bold">Hours</h4>
                  <p className="text-gray-300">24/7 Emergency Response Available</p>
                </div>
              </div>

              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#128C7E] transition-colors duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-black p-8 rounded-xl border border-zinc-800">
            <h3 className="text-white text-2xl font-bold mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;