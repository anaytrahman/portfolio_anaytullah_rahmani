import { Skill } from "../interfaces/skill.interface";
import { Experience } from "../interfaces/experience.interface";
import { Project } from "../interfaces/project.interface";
import {
  ServiceOffering,
  Achievement,
  SocialLink,
  NavLink,
} from "../interfaces/service.interface";

// Replace every placeholder value below with real content when you personalize the site.

export const NAV_LINKS: NavLink[] = [
  { label: "Home", fragment: "home" },
  { label: "About", fragment: "about" },
  { label: "Skills", fragment: "skills" },
  { label: "Experience", fragment: "experience" },
  { label: "Projects", fragment: "projects" },
  { label: "Services", fragment: "services" },
  { label: "Contact", fragment: "contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/anaytrahman",
    icon: "fa-brands fa-github",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/anaytrahman",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    label: "Email",
    url: "mailto:anaytrahmani1@gmail.com",
    icon: "fa-solid fa-envelope",
  },
];

export const SKILLS123: Skill[] = [
  { name: "Angular", icon: "fa-brands fa-angular", level: 95 },
  { name: "React", icon: "fa-brands fa-angular", level: 85 },
  { name: "TypeScript", icon: "fa-solid fa-code", level: 95 },
  { name: "JavaScript", icon: "fa-brands fa-js", level: 90 },
  { name: "HTML5", icon: "fa-brands fa-html5", level: 95 },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", level: 95 },
  { name: "SCSS", icon: "fa-brands fa-sass", level: 95 },
  { name: "NodeJs", icon: "fa-brands fa-sass", level: 85 },
  { name: "RxJS", icon: "fa-solid fa-diagram-project", level: 85 },
  { name: "Signals", icon: "fa-solid fa-wave-square", level: 95 },
  { name: "NgRx", icon: "fa-solid fa-layer-group", level: 85 },
  
  { name: "SQL", icon: "fa-brands fa-css3-alt", level: 75 },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap", level: 90 },
  { name: "Angular Material", icon: "fa-solid fa-gem", level: 85 },
  { name: "REST API", icon: "fa-solid fa-plug", level: 95 },
  { name: "Git", icon: "fa-brands fa-git-alt", level: 95 },
  { name: "GitHub", icon: "fa-brands fa-github", level: 95 },
  { name: "Responsive Design", icon: "fa-solid fa-mobile-screen", level: 95 },
  { name: ".Net", icon: "fa-solid fa-mobile-screen", level: 70 },
  { name: "GenAi", icon: "fa-solid fa-mobile-screen", level: 95 },
];



export interface MainSkill extends Skill {
  subSkills: Skill[];
}

export const MAIN_SKILLS: MainSkill[] = [
  {
    name: "Angular",
    icon: "fa-brands fa-angular",
    level: 95,
    subSkills: [
      { name: "TypeScript", icon: "fa-solid fa-code", level: 95 },
      { name: "RxJS", icon: "fa-solid fa-diagram-project", level: 85 },
      { name: "Signals", icon: "fa-solid fa-wave-square", level: 95 },
      { name: "NgRx", icon: "fa-solid fa-layer-group", level: 85 },
      { name: "Angular Material", icon: "fa-solid fa-gem", level: 85 },
      { name: "REST API", icon: "fa-solid fa-plug", level: 95 }
    ]
  },

  {
    name: "React",
    icon: "fa-brands fa-react",
    level: 85,
    subSkills: [
      { name: "JSX", icon: "fa-solid fa-code", level: 90 },
      { name: "React Hooks", icon: "fa-solid fa-code", level: 85 },
      { name: "Redux", icon: "fa-solid fa-layer-group", level: 80 },
      { name: "React Router", icon: "fa-solid fa-route", level: 85 },
      { name: "Material UI", icon: "fa-solid fa-route", level: 85 }
    ]
  },

  {
    name: "JavaScript",
    icon: "fa-brands fa-js",
    level: 95,
    subSkills: [
      { name: "ES6+", icon: "fa-solid fa-code", level: 90 },
      { name: "DOM", icon: "fa-solid fa-code", level: 85 },
      { name: "Async / Await", icon: "fa-solid fa-clock", level: 90 },
      { name: "Promises", icon: "fa-solid fa-code", level: 90 },
      { name: "Events", icon: "fa-solid fa-code", level: 85 }
    ]
  },
 {
    name: "Node.js",
    icon: "fa-brands fa-node-js",
    level: 85,
    subSkills: [
      { name: "Express.js", icon: "fa-solid fa-server", level: 90 },
      { name: "REST API", icon: "fa-solid fa-plug", level: 95 },
      { name: "MongoDB", icon: "fa-solid fa-database", level: 85 },
      { name: "Middleware", icon: "fa-solid fa-layer-group", level: 85 },
      { name: "Authentication", icon: "fa-solid fa-lock", level: 80 }
    ]
  },
  {
    name: "SCSS",
    icon: "fa-brands fa-sass",
    level: 95,
    subSkills: [
      { name: "CSS3", icon: "fa-brands fa-css3-alt", level: 95 },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap", level: 90 },
      { name: "Responsive Design", icon: "fa-solid fa-mobile-screen", level: 95 },
       { name: "Variables & Mixins", icon: "fa-solid fa-code", level: 90 },
    ]
  },

 

  {
    name: "SQL",
    icon: "fa-solid fa-database",
    level: 85,
    subSkills: [
      { name: "MySQL", icon: "fa-solid fa-database", level: 80 },
      { name: "Queries", icon: "fa-solid fa-code", level: 90 },
      { name: "Joins", icon: "fa-solid fa-link", level: 85 },
        { name: "Aggregations", icon: "fa-solid fa-chart-column", level: 80 },
         { name: "DB Communication", icon: "fa-solid fa-database", level: 80 }
    ]
  },
  {
    name: "Ai",
    icon: "fa-solid fa-robot",
    level: 90,
    subSkills: [
      { name: "GitHub Copilot", icon: "fa-brands fa-github", level: 90 },
      { name: "ChatGPT", icon: "fa-solid fa-comments", level: 95 },
      { name: "Claude AI", icon: "fa-solid fa-robot", level: 90 },
      { name: "Agentic AI", icon: "fa-solid fa-network-wired", level: 80 },
      { name: "Prompt Engineering", icon: "fa-solid fa-terminal", level: 85 }
    ]
  },


  {
    name: "Git & Project Tools",
    icon: "fa-brands fa-git-alt",
    level: 95,
    subSkills: [
      { name: "Git", icon: "fa-brands fa-git-alt", level: 95 },
      { name: "GitHub", icon: "fa-brands fa-github", level: 95 },
      { name: "Jira", icon: "fa-solid fa-ticket", level: 85 },
       { name: "Figma", icon: "fa-solid fa-ticket", level: 85 },
       { name: "Code Review", icon: "fa-solid fa-code-branch", level: 90 }

    ]
  },
  {
    name: "UI Build Tools",
    icon: "fa-brands fa-git-alt",
    level: 95,
    subSkills: [
      { name: "Webpack", icon: "fa-brands fa-git-alt", level: 95 },
      { name: "NPM", icon: "fa-brands fa-github", level: 95 },

    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Tenarai (formerly known as Infogain)",
    position: "Frontend Developer",
    duration: "Jul-7-2022 — Present",
    location: "Remote",
    responsibilities: [
      "Developed scalable Angular applications with reusable and maintainable components.",
      "Integrated RESTful APIs and implemented state management for complex features.",
      "Worked closely with UI/UX designers and backend developers to deliver high-quality solutions.",
      "Improved application performance, fixed production issues, and optimized existing features.",
      "Participated in code reviews, sprint planning, and mentoring junior team members when needed.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "NgRx",
      "RxJS",
      "SCSS",
      "SQL",
      "GenAi",
      "React",
      ".Net",
    ],
  },
  {
    company: "Infogain India",
    position: "Software Engineer - (Contract)",
    duration: "Jan-7-2022 — Jul-7- 2022",
    location: "Noida (Remote)",
    responsibilities: [
      "Contributed to the development of an internal web application used by 7,000+ active users as part of a cross-functional team.",
      "Integrated REST APIs, resolved UI issues, and optimized application performance under senior guidance.",
      "Collaborated with a team of developers and designers to deliver responsive, pixel-perfect Angular features.",
    ],
    technologies: ["Angular", "React", "Bootstrap", "JavaScript", "REST API"],
  },
  {
    company: "Freelance / Contract Work",
    position: " Web Developer",
    duration: "Jan 2021 — Nov 2021",
    location: "Hybrid",
    responsibilities: [
      "Developed and maintained marketing websites and landing pages.",
      "Fixed cross-browser and responsive layout issues across product lines.",
      "Assisted in migrating legacy jQuery pages to Angular components.",
    ],
    technologies: ["Angular", "React", "HTML", "CSS", "jQuery"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 5,
    name: "Hospozone — A Hospital & Clinic Management System",
    description:
      "A hospital and clinic management platform for patients, appointments, medical records, billing, and role-based operations.",
    image: "./../../assets/projects-img/hospozone/home.png",
    techStack: ["Angular", "nodejs", "TypeScript", "RxJS", "Bootstrap", "SCSS", "Claude AI"],
    liveUrl: "https://hospozone-ui.vercel.app/",
    githubUrl: "https://github.com/anaytrahman/hospozone-ui",
    featured: true,
  },
  {
    id: 1,
    name: "PromptToEdit - Get prompt to edit your photos",
    description:
      "A web application that generates AI-powered prompts for photo editing, allowing users to enhance their images with ease.",
    image: "./../../assets/projects-img/prompttoedit.png",
    techStack: ["Angular", "TypeScript", "RxJS", "Bootstrap", "SCSS"],
    liveUrl: "https://prompto-edit.vercel.app/",
    githubUrl: "https://github.com/anaytrahman/promptoEdit",
    featured: true,
  },
  {
     id: 10,
    name: "Static UI/ UX for Travel Website",
    description:
      "A static UI/UX design for a travel website, showcasing a visually appealing and user-friendly interface for travel-related content.",
    image: "./../../assets/projects-img/olive_travel_boooking.png",
    techStack: ["HTML", "CSS"],
    liveUrl: "https://anaytrahman.github.io/olive-ui/",
    githubUrl: "https://github.com/anaytrahman/olive-ui/settings/pages",

  },
  {
    id: 2,
    name: "Sonam Wanchuk Support DP",
    description:
      "A web application that allows users to generate your picture with I support Sonam  to set profile pictures of Sonam Wanchuk, a popular figure, as their display picture on social media platforms.",
     image: "./../../assets/projects-img/sonamWang.png",
    techStack: ["Angular", "Bootstrap", "SCSS", "RxJS", "TypeScript"],
    liveUrl: "https://sonam-wanchuk-support-dp.vercel.app/",
    githubUrl: "https://github.com/anaytrahman/Sonam_Wanchuk_Support_Dp",
  },
  {
    id: 3,
    name: "Travel Basic App",
    description:
      "A simple travel planning app with destination listings and basic itinerary management.",
    image: "./../../assets/projects-img/travelblm.png",
    techStack: ["React", "HTML", "SCSS"],
    liveUrl: "https://travel-bloom-rho.vercel.app/#",
    githubUrl: "https://github.com/anaytrahman/TravelBloom",
  },
  
];

export const SERVICES: ServiceOffering[] = [
  {
    title: "Frontend Development",
    description:
      "Building fast, maintainable web interfaces from the ground up.",
    icon: "fa-solid fa-code",
  },
  {
    title: "Angular Development",
    description:
      "Scalable Angular architecture using standalone components and signals.",
    icon: "fa-brands fa-angular",
  },
  {
    title: "Responsive Website Development",
    description: "Pixel-perfect layouts that work beautifully on every device.",
    icon: "fa-solid fa-mobile-screen-button",
  },
  {
    title: "Dashboard Development",
    description:
      "Data-rich dashboards with clean visualizations and role-based views.",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Performance Optimization",
    description: "Improving load times, bundle size, and Lighthouse scores.",
    icon: "fa-solid fa-gauge-high",
  },
  {
    title: "REST API Integration",
    description:
      "Connecting frontend apps to APIs with clean, typed service layers.",
    icon: "fa-solid fa-plug-circle-bolt",
  },
  {
    title: "Reusable Component Development",
    description:
      "Shared component libraries that keep teams shipping consistently.",
    icon: "fa-solid fa-cubes",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    label: "Years Experience",
    value: 4,
    suffix: "+",
    icon: "fa-solid fa-briefcase",
  },
  {
    label: "Projects Completed",
    value: 20,
    suffix: "+",
    icon: "fa-solid fa-diagram-project",
  },
  {
    label: "Responsive",
    value: 100,
    suffix: "%",
    icon: "fa-solid fa-mobile-screen",
  },
  {
    label: "Users Served",
    value: 15000,
    suffix: "+",
    icon: "fa-solid fa-users",
  },
];
