import {useState} from 'react';
import { useTheme } from '../wrappers/darktheme/ThemeContext'
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const {dark , setDark} =useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-light-bg1 dark:bg-dark-bg1 border-b-2 border-light-bg2 dark:border-dark-bg2 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-golddark dark:text-gold font-bold">Allwyn Joseph</h1>

        <button
          className="md:hidden text-2xl bg-golddark dark:bg-gold text-white dark:text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <li><a href="#projects" className="text-golddark dark:text-gold hover:text-black dark:hover:text-white">Projects</a></li>
          <li><a href="#about" className="text-golddark dark:text-gold hover:text-black dark:hover:text-white">About</a></li>
          <li><a href="#contact" className="text-golddark dark:text-gold hover:text-black dark:hover:text-white">Contact</a></li>
          <li className="flex items-center">    <button
      onClick={() => setDark(!dark)}
      className="text-lg p-2 rounded transition hover:bg-black dark:hover:bg-white"
      aria-label="Toggle Theme"
    >
      {dark? <FaSun className="text-gold" /> : <FaMoon className="text-golddark" />}
    </button></li>
        </ul>
        {menuOpen && (
          <ul className="absolute top-16 right-4 bg-light-bg1 dark:bg-dark-bg1 border border-light-bg2 dark:border-dark-bg2 rounded p-4 flex flex-col gap-4 text-sm font-medium shadow-lg md:hidden">
            <li><a href="#projects" onClick={() => setMenuOpen(false)} className="text-golddark dark:text-gold hover:text-black dark:hover:text-white">Projects</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="text-golddark dark:text-gold hover:text-black dark:hover:text-white">About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="text-golddark dark:text-gold hover:text-black dark:hover:text-white">Contact</a></li>
            <li className="flex items-center justify-center h-full">
              <button
                onClick={() => {
                  setDark(!dark);
                  setMenuOpen(false);
                }}
                className="text-lg  rounded transition "
                aria-label="Toggle Theme"
              >
                {dark ? <FaSun className="text-gold hover:text-black dark:hover:text-white" /> : <FaMoon className="text-golddark hover:text-black dark:hover:text-white" />}
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}