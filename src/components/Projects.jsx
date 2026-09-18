import { ArrowRight, ExternalLink } from "lucide-react";
import { LuGithub } from "react-icons/lu";
const projects = [
  {
    id: 1,
    title: "Blog App",
    description:
      "a social media simulation app, use this account to test : email: test@gmail.com password: Testuser29@",
    image: "/projectspics/blogApp-website.png",
    tags: ["React", "Css", "Node Js", "Express Js", "MongoDB", "Redux"],
    demoUrl: "https://blog-app-frontend-699o.onrender.com/",
    githubUrl: "https://github.com/Mohammedknd123/blog-app",
  },
  {
    id: 2,
    title: "E-commerce Website 1",
    description: "a modern personal e-commerce website for men clothes.",
    image: "/projectspics/e-commerce-website-1.png",
    tags: ["React", "Css"],
    demoUrl: "https://got-it-clothing.netlify.app/",
    githubUrl: "https://github.com/Mohammedknd123/e-commerce-website-1",
  },
  {
    id: 3,
    title: "E-commerce Website 2",
    description: "a modern e-commerce web site for clothes.",
    image: "/projectspics/e-commerce-website-2.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://e-commmerce-2.netlify.app/",
    githubUrl: "https://github.com/Mohammedknd123/e-commerce-website-2",
  },
  {
    id: 4,
    title: "Coffee & Food",
    description: "a coffee & fast food web site .",
    image: "/projectspics/coffee-website.png",
    tags: ["Html", "Css", "Java Script"],
    demoUrl: "https://mohammedknd123.github.io/Coffee/",
    githubUrl: "https://github.com/Mohammedknd123/Coffee",
  },
  {
    id: 5,
    title: "Weather App",
    description:
      "A simple website made with react shows the current weather in any city in the World.",
    image: "/projectspics/weather-app-website.png",
    tags: ["React", "Css"],
    demoUrl: "https://mascara-weather.netlify.app/",
    githubUrl: "https://github.com/Mohammedknd123/weather-app",
  },
  {
    id: 6,
    title: "Parfume Website",
    description: "a modern parfume website.",
    image: "/projectspics/perfum-website.png",
    tags: ["Html", "Css", "Java Script"],
    demoUrl: "https://mohammedknd123.github.io/Mohi-Parfum/",
    githubUrl: "https://github.com/Mohammedknd123/Mohi-Parfum",
  },
  {
    id: 7,
    title: "Todo List App",
    description: "a simple Todo List made with react .",
    image: "/projectspics/todo-list-app.png",
    tags: ["React", "Css"],
    demoUrl: "https://todo-list292005.netlify.app/",
    githubUrl: "https://github.com/Mohammedknd123/MyTodoList",
  },
  {
    id: 8,
    title: "Animals Adoption App",
    description: "a huge animal protection and adoption plateform.",
    image: "/projectspics/animals-pro-ado-website.png",
    tags: [
      "html",
      "Css",
      "Java Script",
      "Node Js",
      "Express Js",
      "MySQL",
      "Prisma",
    ],
    demoUrl: "https://spontaneous-torte-fcaa43.netlify.app/",
    githubUrl: "https://github.com/moumene-sOrg/just_test",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 rlative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          created with attention to details, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col"
              key={key}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 border text-secondary-foregrounf"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 break-words">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-3">
                    <a
                      className="flex h-8 w-8 shrink-0 items-center justify-center text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noreferrer"
                      href={project.demoUrl}
                      aria-label={`Open demo for ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      className="flex h-8 w-8 shrink-0 items-center justify-center text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noreferrer"
                      href={project.githubUrl}
                      aria-label={`Open GitHub repository for ${project.title}`}
                    >
                      <LuGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Mohammedknd123"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
