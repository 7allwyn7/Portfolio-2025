export default function About() {
  return (
    <section id="about" className="bg-light-bg2 dark:bg-dark-bg2 py-20 text-center">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-golddark dark:text-gold text-3xl font-bold mb-6">About Me</h3>
        <p className="text-black dark:text-white mb-4 max-w-2xl mx-auto">
        I'm a backend-focused developer with 6 years of experience in SQL and PL/SQL, and the last 3 years expanding into Node.js backend development.
        At the core, I love problem solving. There's just something satisfying about figuring things out and making stuff work.
        What drives me is the opportunity to bring real, meaningful change through technology.
        </p>
        <p className="text-black dark:text-white mb-4 max-w-2xl mx-auto">
        When I’m not doing development work, you’ll probably find me out playing football/cycling/trekking or deep into a video game complaining about lag.
        </p>
      </div>
    </section>
  );
}