import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      label: 'LinkedIn', 
      url: 'https://linkedin.com/in/avinash-patel-4487b5252', 
      color: 'from-blue-600 to-blue-700',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.25-.129.599-.129.949v5.418h-3.554s.047-8.733 0-9.637h3.554v1.365c.425-.655 1.185-1.586 2.882-1.586 2.105 0 3.682 1.376 3.682 4.336v5.522zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.709 0-.955.771-1.708 1.96-1.708 1.188 0 1.915.754 1.948 1.708 0 .95-.76 1.709-1.993 1.709zm1.581 11.597H3.635V9.815h3.283v10.637zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>'
    },
    { 
      label: 'GitHub', 
      url: 'https://github.com/avinash7739', 
      color: 'from-gray-800 to-gray-900',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'
    },
    { 
      label: 'LeetCode', 
      url: 'https://leetcode.com/u/avinash7739', 
      color: 'from-yellow-500 to-orange-600',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.102 17.993h-3.546v-5.973h3.546V17.993z"/><path d="M12.308 6.612a1.694 1.694 0 1 1 0 3.388 1.694 1.694 0 0 1 0-3.388z"/><path d="M20.938 12a8.938 8.938 0 1 1-17.876 0 8.938 8.938 0 0 1 17.876 0z" fill="none" stroke="currentColor" stroke-width="0.5"/></svg>'
    },
    { 
      label: 'HackerEarth', 
      url: 'https://www.hackerearth.com/@avinash7739', 
      color: 'from-blue-600 to-purple-600',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/><path d="M8 8h3v8h-3zm5 0h3v8h-3z" fill="white"/></svg>'
    },
    { 
      label: 'Email', 
      url: 'mailto:avinashpatel773911@gmail.com', 
      color: 'from-red-500 to-yellow-500',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-950 dark:to-black text-white transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="text-4xl font-bold tracking-widest mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Avinash
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Full-stack developer crafting beautiful and scalable digital solutions. Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 inline-block"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Contact CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></span>
              Get In Touch
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Have a project in mind? Let's connect and create something incredible!
            </p>
            <a
              href="mailto:avinashpatel773911@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              📧 Send Email
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-12"></div>

        {/* Social Links Section */}
        <div className="mb-12">
          <h4 className="text-center text-lg font-bold mb-8 flex items-center justify-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span>
            Connect With Me
            <span className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
          </h4>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl bg-gradient-to-br ${social.color} hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 group text-white`}
                title={social.label}
              >
                <div className="w-6 h-6 group-hover:scale-125 transition-transform duration-300" dangerouslySetInnerHTML={{ __html: social.svg }} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} <span className="text-white font-semibold">Avinash</span>. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed & Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS
          </p>
          <a
            href="#hero"
            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1 text-sm font-semibold"
          >
            Back to Top ⬆️
          </a>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
    </footer>
  );
};

export default Footer;
