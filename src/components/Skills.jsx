import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiAxios,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiCodecrafters,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { FaJava, FaServer, FaPalette } from "react-icons/fa";

const skills = [
  // frontend
  {
    name: "HTML5",
    level: 90,
    category: "Frontend",
    icon: SiHtml5,
  },
  {
    name: "CSS3",
    level: 88,
    category: "Frontend",
    icon: SiCss,
  },
  {
    name: "JavaScript",
    level: 78,
    category: "Frontend",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    level: 72,
    category: "Frontend",
    icon: SiTypescript,
  },
  {
    name: "React.js",
    level: 80,
    category: "Frontend",
    icon: SiReact,
  },
  {
    name: "Redux Toolkit",
    level: 70,
    category: "Frontend",
    icon: SiRedux,
  },
  {
    name: "Tailwind CSS",
    level: 75,
    category: "Frontend",
    icon: SiTailwindcss,
  },
  {
    name: "Material UI",
    level: 65,
    category: "Frontend",
    icon: SiMui,
  },
  {
    name: "REST APIs",
    level: 72,
    category: "Frontend",
    icon: FaServer,
  },
  {
    name: "Axios",
    level: 72,
    category: "Frontend",
    icon: SiAxios,
  },

  // backend
  {
    name: "Node.js",
    level: 70,
    category: "Backend",
    icon: SiNodedotjs,
  },
  {
    name: "Express.js",
    level: 70,
    category: "Backend",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    level: 70,
    category: "Backend",
    icon: SiMongodb,
  },
  {
    name: "Mongoose",
    level: 68,
    category: "Backend",
    icon: SiMongoose,
  },
  {
    name: "MySQL",
    level: 65,
    category: "Backend",
    icon: SiMysql,
  },
  {
    name: "Java",
    level: 75,
    category: "Backend",
    icon: FaJava,
  },

  // tools
  {
    name: "Git",
    level: 70,
    category: "Tools",
    icon: SiGit,
  },
  {
    name: "GitHub",
    level: 75,
    category: "Tools",
    icon: SiGithub,
  },
  {
    name: "Vite",
    level: 70,
    category: "Tools",
    icon: SiVite,
  },
  {
    name: "VS Code",
    level: 90,
    category: "Tools",
    icon: SiCodecrafters,
  },
  {
    name: "Postman",
    level: 65,
    category: "Tools",
    icon: SiPostman,
  },
  {
    name: "Figma",
    level: 65,
    category: "Tools",
    icon: SiFigma,
  },
  {
    name: "Design Tools",
    level: 70,
    category: "Tools",
    icon: FaPalette,
  },
];

const categories = ["All", "Frontend", "Backend", "Tools"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My
          <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="min-w-0 rounded-lg bg-card p-5 shadow-xs card-hover sm:p-6"
            >
              <div className="flex items-center gap-3 text-left mb-4">
                <skill.icon className="text-primary text-2xl" />

                <h3 className="min-w-0 break-words font-semibold text-lg">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
