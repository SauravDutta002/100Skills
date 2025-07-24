import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#b7b7b7] mb-12 border-t py-4 px-4 flex flex-col items-center justify-center text-center sm:mb-0">
      <h2 className="text-lg font-semibold text-gray-800">DEV - SAURAV DUTTA</h2>
      <p className="text-sm text-gray-700 mt-1">
        Developed with ❤️ to help students find opportunities.
      </p>
      <p className="text-xs text-gray-600 mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

