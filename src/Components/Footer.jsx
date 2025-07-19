import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6 ">
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <div>
          📧 silicainfoteeh.bd@gmail.com<br />
          📞 01731806348
        </div>
        <div className="flex space-x-4 text-xl">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
