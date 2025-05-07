import { useTheme } from '../wrappers/darktheme/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';
export default function Navbar() {
  const {dark , setDark} =useTheme();
  return (
    <header className="bg-light-bg1 dark:bg-dark-bg1 border-b-2 border-light-bg2 dark:border-dark-bg2 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-golddark dark:text-gold font-bold">Allwyn Joseph</h1>
        <ul className="flex space-x-6 text-sm font-medium items-center">
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
      </nav>
    </header>
  );
}