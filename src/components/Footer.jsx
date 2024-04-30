import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold">Find Us Here:</h1>
          <div className="flex justify-center md:justify-start mt-2">
            <a href='https://facebook.com' target='_blank' className="mr-4"><img src="/facebook_logo.jpg" alt="Facebook" className="w-12 h-auto" /></a>
            <a href="https://discord.gg/mdqKYHWpXB" target='_blank' className="mr-4"><img src="/discord.jpg" alt="Discord" className="w-12 h-auto" /></a>
            <a href="https://linkedin.com" target='_blank' className="mr-4"><img src="/linkedIn.webp" alt="LinkedIn" className="w-12 h-auto" /></a>
            <a href="https://twitter.com" target='_blank'><img src="/twitter_logo.png" alt="Twitter" className="w-12 h-auto" /></a>
          </div>
        </div>
        <div className="text-white text-center md:text-right">
          <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
