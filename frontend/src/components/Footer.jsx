// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#b7b7b7] mb-12 border-t py-4 px-4 flex flex-col items-center justify-center text-center sm:mb-0">
//       <h2 className="text-lg font-semibold text-gray-800">DEV - SAURAV DUTTA</h2>
//       <p className="text-sm text-gray-700 mt-1">
//         Developed with ❤️ to help students find opportunities.
//       </p>
//       <p className="text-xs text-gray-600 mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { VscCode } from "react-icons/vsc";
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#b7b7b7] py-6 px-4 border-t text-center flex flex-col items-center justify-center gap-2 sm:gap-3 mb-16 sm:mb-0 font-mono">
      <div className="flex items-center gap-2 text-gray-800 text-xl font-bold tracking-wide ">
        <VscCode size={24} />
        <span>DEV - SAURAV DUTTA</span>
         <div className="flex gap-4">
        <a
          href="https://sauravdutta.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          title="Portfolio"
          className="text-gray-800 hover:text-blue-600 transition"
        >
          <FaGlobe size={20} />
        </a>
        
        
      </div>
      </div>

      <p className="text-sm text-gray-700 max-w-md">
        Developed with ❤️ to help students discover and grab the right opportunities.
      </p>

     

      <p className="text-xs text-gray-600 mt-3">
        © {new Date().getFullYear()} Saurav Dutta. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
