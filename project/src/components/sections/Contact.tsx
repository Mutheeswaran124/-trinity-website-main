import React, { useRef } from 'react';
import Section from '../ui /Section';
import Button from '../ui /Button';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import contact from '../../animations/contact.lottie?url'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value || '';
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || '';
    const company = (form.elements.namedItem('company') as HTMLInputElement)?.value || '';
    const subject = (form.elements.namedItem('subject') as HTMLInputElement)?.value || '';
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '';

    const mailto = `mailto:agil.george@trintech?subject=${encodeURIComponent(subject || 'Contact Form Submission')}&body=${encodeURIComponent(
      `Full Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <Section 
      id="contact" 
      title="Get in Touch"
      className="relative overflow-hidden"
    >
      {/* Blurred animated background blobs */}
     <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
    <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000"></div>
</div>

      {/* Animation after the heading */}
      <div className="flex justify-center mb-8 relative z-10">
        <DotLottieReact
          src={contact}
          loop
          autoplay
          style={{ width: 210, height: 210 }}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-12 relative z-10">
        {/* Contact Form */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
          <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input 
                type="text" 
                id="company" 
                name="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea 
                id="message" 
                name="message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Please describe how we can assist you..."
              />
            </div>
            <Button variant="primary" className="w-full" type="submit">
              Send Message
            </Button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Mail size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                <p className="text-gray-600 mb-1">General Inquiries</p>
                <a href="mailto:info@trinitytechsolutions.com" className="text-blue-600 hover:text-blue-700">
                  hello@trinitetech.com
                </a>
                <p className="text-gray-600 mt-2 mb-1">Business Development</p>
                <a href="mailto:sales@trinitytechsolutions.com" className="text-blue-600 hover:text-blue-700">
                  sales@trinitytechsolutions.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Phone size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                <p className="text-gray-600 mb-1">USA Office</p>
                <a href="tel:+12345678901" className="text-blue-600 hover:text-blue-700">
                  +1 (234) 567-8901
                </a>
                <p className="text-gray-600 mt-2 mb-1">Global Support</p>
                <a href="tel:+31234567890" className="text-blue-600 hover:text-blue-700">
                  +31 (234) 567-890
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MessageSquare size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">Live Chat</h4>
                <p className="text-gray-600 mb-4">
                  Our support team is available Monday through Friday from 9:00 AM to 6:00 PM CET.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Schedule a Consultation</h4>
            <p className="text-gray-600 mb-4">
              Book a free 30-minute consultation with one of our data experts to discuss your project requirements.
            </p>
            <Button variant="primary">
              Book a Meeting
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;