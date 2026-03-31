import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const socialLinks = [
    { 
      label: 'LinkedIn', 
      url: 'https://linkedin.com/in/avinash-patel-4487b5252',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.25-.129.599-.129.949v5.418h-3.554s.047-8.733 0-9.637h3.554v1.365c.425-.655 1.185-1.586 2.882-1.586 2.105 0 3.682 1.376 3.682 4.336v5.522zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.709 0-.955.771-1.708 1.96-1.708 1.188 0 1.915.754 1.948 1.708 0 .95-.76 1.709-1.993 1.709zm1.581 11.597H3.635V9.815h3.283v10.637zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>'
    },
    { 
      label: 'GitHub', 
      url: 'https://github.com/avinash7739',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
    },
    { 
      label: 'LeetCode', 
      url: 'https://leetcode.com/u/avinash7739',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.102 17.993h-3.546v-5.973h3.546V17.993z"/><path d="M12.308 6.612a1.694 1.694 0 1 1 0 3.388 1.694 1.694 0 0 1 0-3.388z"/><path d="M20.938 12a8.938 8.938 0 1 1-17.876 0 8.938 8.938 0 0 1 17.876 0z" fill="none" stroke="currentColor" stroke-width="0.5"/></svg>'
    },
    { 
      label: 'HackerEarth', 
      url: 'https://www.hackerearth.com/@avinash7739',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/><path d="M8 8h3v8h-3zm5 0h3v8h-3z" fill="white"/></svg>'
    },
    { 
      label: 'Email', 
      url: 'mailto:avinashpatel773911@gmail.com',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-black text-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you. Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-lg opacity-30"></div>
            <form onSubmit={handleSubmit} className="relative bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-4 sm:space-y-6">
              {/* Success Message */}
              {submitted && (
                <div className="p-3 sm:p-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-lg font-semibold text-sm sm:text-base animate-bounce">
                  ✅ Thanks! Your message has been sent successfully!
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                  Full Name *
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white font-medium transition-all duration-300 focus:outline-none text-sm ${
                    errors.name 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1 font-semibold">ℹ️ {errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="avinashpatel773911@gmail.com" 
                  name="avinash kumar patel" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white font-medium transition-all duration-300 focus:outline-none text-sm ${
                    errors.email 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1 font-semibold">ℹ️ {errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <div className="flex justify-between items-center mb-1 sm:mb-2">
                  <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {formData.message.length}/500
                  </span>
                </div>
                <textarea 
                  id="message" 
                  name="message" 
                  rows=\"4\"
                  maxLength=\"500\"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-black dark:text-white font-medium transition-all duration-300 focus:outline-none resize-none text-sm ${
                    errors.message 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-500' 
                      : 'border-gray-300 dark:border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/50'
                  }`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1 font-semibold">ℹ️ {errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm sm:text-base rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message 🚀
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 transform hover:translate-x-2">
                <h3 className="text-lg font-bold mb-1">📧 Email</h3>
                <p className="text-gray-700 dark:text-gray-300">avinashpatel773911@gmail.com.com</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-all duration-300 transform hover:translate-x-2">
                <h3 className="text-lg font-bold mb-1">📍 Location</h3>
                <p className="text-gray-700 dark:text-gray-300">India</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300 transform hover:translate-x-2">
                <h3 className="text-lg font-bold mb-1">⏰ Response Time</h3>
                <p className="text-gray-700 dark:text-gray-300">Usually within 24 hours</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-center font-bold text-lg border-2 border-gray-300 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 text-gray-800 dark:text-white"
                  >
                    <div className="w-8 h-8 mx-auto mb-1" dangerouslySetInnerHTML={{ __html: social.svg }} />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;