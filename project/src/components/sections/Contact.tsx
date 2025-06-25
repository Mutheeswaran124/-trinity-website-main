import React, { useRef } from 'react';
import { Mail, Phone, MessageSquare, Calendar, Send } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import contact from '../../animations/contact.lottie?url';



// Section Component
const Section: React.FC<{ id: string; title: string; children: React.ReactNode; className?: string }> = ({
  id,
  title,
  children,
  className = '',
}) => (
  <section id={id} className={`py-16 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

// Button Component
const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}> = ({ children, variant = 'primary', className = '', type = 'button', ...props }) => {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5',
    secondary:
      'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
  };

  return (
    <button type={type} className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Contact: React.FC = () => {
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

    const mailto = `mailto:agil.george@trintech?subject=${encodeURIComponent(
      subject || 'Contact Form Submission'
    )}&body=${encodeURIComponent(
      `Full Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-4000" />
      </div>

      <Section id="contact" title="Get in Touch" className="relative z-10">
        {/* Lottie Animation */}
        <div className="flex justify-center mb-12">
          <DotLottieReact src={contact} loop autoplay style={{ width: 210, height: 210 }} />
        </div>

   <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">


          {/* Contact Information Side */}
          <div className="space-y-8">
            {/* Email Section */}
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl mr-4 shadow-lg group-hover:scale-105 transition-transform">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600 mb-2">General Inquiries</p>
                    <a href="mailto:hello@trinitetech.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      hello@trinitetech.com
                    </a>
                    <p className="text-gray-600 mt-3 mb-1">Business Development</p>
                    <a
                      href="mailto:sales@trinitytechsolutions.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      sales@trinitytechsolutions.com
                    </a>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl mr-4 shadow-lg group-hover:scale-105 transition-transform">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600 mb-2">USA Office</p>
                    <a href="tel:+12345678901" className="text-blue-600 hover:text-blue-700 font-medium">
                      +1 (234) 567-8901
                    </a>
                    <p className="text-gray-600 mt-3 mb-1">Global Support</p>
                    <a href="tel:+31234567890" className="text-blue-600 hover:text-blue-700 font-medium">
                      +31 (234) 567-890
                    </a>
                  </div>
                </div>

                {/* Chat Section */}
                <div className="flex items-start group">
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-3 rounded-xl mr-4 shadow-lg group-hover:scale-105 transition-transform">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Live Chat</h4>
                    <p className="text-gray-600">
                      Our support team is available Monday through Friday from 9:00 AM to 6:00 PM CET.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Meeting Booking */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-orange-500 to-pink-500 p-3 rounded-xl mr-4 shadow-lg">
                  <Calendar size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Schedule a Consultation</h4>
              </div>
              <p className="text-gray-600 mb-6">
                Book a free 30-minute consultation with one of our data experts to discuss your project.
              </p>
              <Button variant="primary" className="w-full">
                <Calendar size={18} className="mr-2" />
                Book a Meeting
              </Button>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Please describe how we can assist you..."
                />
              </div>

              <Button variant="primary" className="w-full text-lg py-4" type="submit">
                <Send size={20} className="mr-2" />
                Send Message
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                We'll respond within 24 hours with a custom growth plan for your business.
              </p>
            </form>
          </div>
        </div>
      </Section>

      {/* Keyframe Animation */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

// App Entry
const App: React.FC = () => <Contact />;

export default App;
