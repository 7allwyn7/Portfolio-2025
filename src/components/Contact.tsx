import { useState } from "react";
import { FiCopy, FiCheck,FiMail  } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "se7encoding@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error("Copy failed", err);
    }
  };
  return (
    <footer id="contact" className="bg-light-bg1 dark:bg-dark-bg1 py-20 text-center border-t border-light-bg2 dark:border-dark-bg2">
      <div  className="container mx-auto px-4 text-center">
      <h3 className="text-golddark dark:text-gold text-2xl font-bold mb-4">Get in Touch</h3>
        <div className="flex gap-4 justify-center" >
        <div className="flex gap-2 justify-center" >
        <a href="mailto:se7encoding@gmail.com" className="text-black dark:text-white hover:underline hover:text-golddark dark:hover:text-gold transition">
        <FiMail className="w-7 h-7"/>
  </a>
  <button
        onClick={handleCopy}
        className="cursor-pointer text-black dark:text-white hover:text-golddark dark:hover:text-gold transition"
      >
        {copied ? <FiCheck className="w-7 h-7" /> : <FiCopy className="w-7 h-7" />}
      </button>
      </div>
    <a href="https://www.instagram.com/allwyn_joseph7" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:underline hover:text-golddark dark:hover:text-gold transition">
    <FaInstagram className="w-7 h-7"/>
    </a>
    <a href="https://www.linkedin.com/in/allwyn7joseph" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:underline hover:text-golddark dark:hover:text-gold transition">
    <FaLinkedin className="w-7 h-7"/>
    </a>
  </div>
  <br></br>
        <p  className="text-black dark:text-white text-sm gap-4">&copy; {new Date().getFullYear()} Allwyn Joseph</p>

      </div>

    </footer>
  );
}