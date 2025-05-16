export default function Hero() {
  return (
    <section className="bg-light-bg2 dark:bg-dark-bg2 py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-golddark dark:text-gold text-4xl font-bold mb-4">Hi, I'm Allwyn Joseph</h2>
        <p className="text-black dark:text-white text-lg mb-6">A passionate developer who loves making cool things for the web</p>
        <div className="flex mx-auto px-4 justify-center gap-2 items-baseline">
        <a href="#projects" className="inline-block bg-golddark text-white dark:text-black px-6 py-3 rounded shadow hover:bg-black dark:hover:bg-white transition">
          My Work 
        </a>
        <a href="#about" className="inline-block bg-golddark text-white dark:text-black px-6 py-3 rounded shadow hover:bg-black dark:hover:bg-white transition">
          About me
        </a>
        </div>
      </div>
    </section>
  );
}