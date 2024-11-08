import { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { ThemeProps } from '../context/types';

const Navbar: React.FC<ThemeProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full p-5 px-[10%] items-center justify-between border-b-2 border-gray-200 dark:border-gray-800 flex gap-10 fixed top-0 z-10 dark:bg-gray-900">
      <div className="text-black dark:text-white">
        <img src="pricefl.webp" alt="Logo" className="hidden md:block w-[max(10vw,100px)] h-20 rounded-sm" />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden text-black dark:text-white cursor-pointer ml-auto" onClick={toggleMenu}>
        {isOpen ? (
          <IoCloseSharp className="w-8 h-8 p-1" />
        ) : (
          <HiMenuAlt3 className="w-8 h-8 p-1" />
        )}
      </div>

      
      <div className={`flex-col md:flex md:flex-row md:items-center md:gap-4 ${isOpen ? 'flex' : 'hidden'} w-full`}>
        <ul className="flex-col md:flex-row flex gap-4 list-none font-semibold cursor-pointer text-lg md:flex-1 justify-center text-black dark:text-white">
          <li className="hover:text-primary">Home</li>
          <li className="hover:text-primary">Blog</li>
          <li className="hover:text-primary">Pricing</li>
          <li className="hover:text-primary">Features</li>
        </ul>

       
        <div className="flex items-center gap-3 mt-4 md:mt-0 md:ml-auto">
          <select 
            className="px-2 py-2 rounded-sm border-2 border-gray-500 bg-transparent text-black dark:text-white dark:bg-gray-700"
            aria-label="Currency Selector"
            defaultValue="usd"
          >
            <option className="bg-gray-200 dark:bg-gray-800" value="usd">USD</option>
            <option className="bg-gray-200 dark:bg-gray-800" value="ngr">NGR</option>
            <option className="bg-gray-200 dark:bg-gray-800" value="eur">EUR</option>
          </select>

          <button className="flex items-center gap-2 px-2 py-2 rounded-lg font-semibold bg-gray-300 dark:bg-gray-700 text-black dark:text-white">
            Sign Up
          </button>

          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-700 dark:bg-gray-300 text-white dark:text-gray-900">
            {isDarkMode ? <IoSunnyOutline /> : <FaMoon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
