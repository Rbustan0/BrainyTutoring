import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold">Find Us Here:</h1>
          <div className="flex justify-center md:justify-start mt-2">
            <a href="https://discord.gg/2BZSDZZMYg" target='_blank' className="mr-4"><i className="fab fa-discord text-white text-2xl hover:text-blue-500 transition duration-300"></i></a>
            <a href="https://www.linkedin.com/company/brainey-tutoring/" target='_blank' className="mr-4"><i className="fab fa-linkedin-in text-white text-2xl hover:text-blue-500 transition duration-300"></i></a>
          </div>
        </div>
        <div className="text-white text-center md:text-right">
          <p className="text-sm">&copy; 2024 Brainey Tutoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
