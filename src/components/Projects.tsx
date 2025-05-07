import { useState } from "react";

interface projectData {
  title: string;
  description: string;
  link: string;
  techStack: string[];
  wip: boolean;
}

const projects :projectData[] = [
  {
    title: "(LSWTRI) Let's See Who This Really Is",
    description: "A community-driven platform created to track, report, and expose individuals who send inappropriate or unsolicited direct messages. As online harassment becomes more common, the goal here is to build a transparent and searchable database that helps people stay safe and hold harassers accountable",
    link: "https://lswtri.netlify.app/about",
    techStack: ["Typescript","ExpressJS","React","MaterialUI","Postgres"],
    wip: false
  },
  {
    title: "Don't forget you",
    description: "A Selfcare Mobile app",
    link: "",
    techStack: ["Still researching"],
    wip: true
  },
    {
    title: "Still Thinking of a good name",
    description: "A Multiplayer Game combining Battleships and wordle",
    link: "",
    techStack: ["React","ExpressJS","Kaplay"],
    wip: true
  },
  {
    title: "Still Thinking of a good name",
    description: "A Multiplayer catapult game, im just putting it here dont know if i'll start",
    link: "",
    techStack: ["React","ExpressJS","Kaplay"],
    wip: true
  },
];

export default function Projects() {
  const [openStack, setOpenStack] = useState<number|null>(null);

  return (
    <section id="projects" className="bg-light-bg1 dark:bg-dark-bg1 py-20 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-golddark dark:text-gold text-3xl font-bold mb-8 text-center">My work</h3>
        <div className="grid md:grid-cols-2 justify-between gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative bg-light-bg2 dark:bg-dark-bg2 p-6 rounded-lg shadow flex flex-col">
              {project.wip ? (
    <span className="relative flex h-5 w-10">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
      <span className="relative inline-flex items-center justify-center w-full h-full rounded-full bg-yellow-500 text-white text-xs font-semibold">
        WIP
      </span>
    </span>
  ) : (
    <span className="relative flex h-5 w-10">
    <span className="relative inline-flex items-center justify-center w-full h-full rounded-full bg-green-500 text-white text-xs font-semibold">
    Live
    </span>
  </span>
  )}
              <h4 className="text-golddark dark:text-gold text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-black dark:text-white mb-4">{project.description}</p>
              <div className="mt-auto">
              <div className="grid justify-center">
            <button 
              onClick={() => setOpenStack(openStack === index ? null : index)}
              className="text-golddark dark:text-gold px-4 py-2  hover:underline"
            >
              Tech Stack
            </button>
            {openStack === index && (
              <div className="relative left-1/2 transform -translate-x-1/2 z-10 animate-slide-in">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 bg-light-bg2 dark:bg-dark-bg2 shadow-lg rounded p-3 border-2 border-light-bg1 dark:border-dark-bg1">
                  {project.techStack.map((tech, i) => (
                    <div key={i} className="text-sm text-black dark:text-white px-2 py-1">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {project.link.length>0 ?<a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 text-golddark dark:text-gold hover:underline">
                View Project
              </a>:<></>
            }

</div>
          </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}