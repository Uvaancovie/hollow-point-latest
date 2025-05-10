import React, { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form
      action="mailto:sohanmaharajh@hollowpointsecurity.co.za"
      method="POST"
      encType="text/plain"
      className='flex flex-col gap-6 w-full'
    >
      <div>
        <label htmlFor="name" className="block text-white mb-2">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-white mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="Your phone number"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-white mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
          placeholder="How can we help you?"
        />
      </div>
      
      <Button type="submit" title="Send Message" styles="mt-2" />
    </form>
  );
};

export default ContactForm;