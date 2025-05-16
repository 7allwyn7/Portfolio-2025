import { useState } from "react";

interface projectData {
  img: string;
  title: string;
  role: string;
  description: string;
  link: string;
  features?: string[];
  techStack: string[];
  wip: boolean;
  demo?: string;
}

const projects: projectData[] = [
  {
    img: "/lswtri.jpg",
    title: "(LSWTRI) Let's See Who This Really Is",
    role: "Full Stack Development (solo)",
    description: "A community-driven platform created to track, report, and expose individuals who send inappropriate or unsolicited direct messages through Reddit. As online harassment becomes more common, the goal here is to build a transparent and searchable database that helps people stay safe and hold harassers accountable",
    link: "https://lswtri.netlify.app/about",
    techStack: ["Typescript", "ExpressJS", "React", "MaterialUI", "Postgres"],
    features: [
      "Instantly see if someone has been reported",
      "Anyone can quickly create a report with details of the incident along with Screenshot evidence",
      "Secure Admin Console for authenticated Moderators only, where they can review, validate, and publish reports",
      "Works well on both mobile and desktop devices"
    ],
    wip: false
  },
  //   {
  //   img : "/JPBS.jpg",
  //   title: "JP Business Solutions Landing page",
  //   role: "Front End Development (solo)",
  //   description: "A responsive landing page for a professional accounting and tax advisory firm. The site highlights the organization's services, expertise, and credibility through a clean, trustworthy design and intuitive layout. Emphasis was placed on clarity, legibility, and responsiveness to serve both desktop and mobile users.",
  //   link: " ",//link: "https://jpbs.netlify.app",
  //   techStack: ["Typescript","React","Tailwind","react-hook-form"],
  //   features: [
  //     "Modern, serif-based typography (Montserrat) for a premium, authoritative look",
  //     "Tailwind CSS utility classes for rapid styling and responsive layout",
  //     "Custom brand-aligned color palette and minimal UI for trust and simplicity",
  //     "Mobile-first design ensuring usability across devices"
  //   ],
  //   wip: true
  // },

];

export default function Projects() {
  const [openStack, setOpenStack] = useState<number | null>(null);
  const [openFeatures, setOpenFeatures] = useState<number | null>(null);
  return (
    <section id="projects" className="bg-light-bg1 dark:bg-dark-bg1 py-20 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-golddark dark:text-gold text-3xl font-bold mb-8 text-center">My work</h3>
        <div className="grid md:grid-cols-1 md:px-35 justify-between gap-8 ">
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
              <div className="flex justify-center mb-4">
                <img
                  src={project.img}
                  alt="Logo"
                  className="w-full max-w-[600px] h-auto object-contain px-20"
                />
              </div>
              <div>
                {(openFeatures != index) && <>

                  <p className="text-black dark:text-white mb-4 text-left">{project.description}</p>
                  <h4 className="text-golddark dark:text-gold text-xl font-semibold mb-2">Role : {project.role}</h4>
                </>}

                {openFeatures === index && project.features && project.features.length > 0 ?
                  <>
                    <h3 className="ext-golddark dark:text-gold text-left font-semibold mb-1">Features:</h3>
                    <ul className="text-black dark:text-white list-disc pl-6 text-left space-y-1">
                      {project.features.map((feature, ind) => {

                        return (<li key={index + ',' + ind}>{feature}</li>)


                      })}
                    </ul>
                  </>
                  : <></>
                }
              </div>
              <div className="mt-auto">
                <div className="grid justify-center">
                  {project.features && project.features.length > 0 && <button
                    onClick={() => setOpenFeatures(openFeatures === index ? null : index)}
                    className="text-golddark dark:text-gold px-4 py-2  hover:underline"
                  >
                    {openFeatures === index ? "Back" : "Features"}
                  </button>}

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
                  {project.link.length > 0 ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 text-golddark dark:text-gold hover:underline">
                    View Project
                  </a> : <></>
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