import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  next,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Nextjs",
    icon: next,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Alkhawarizmi Lab",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2024 - December 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MERN E-COM",
    description:
      "This project is a MERN Stack E-Commerce Website. The website includes features like User Authentication, Admin Panel, and Product Management System.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/j2CVrDHM/Screenshot-2025-02-28-194817.png",
    source_code_link: "https://rabbit-ecom-r9ur.vercel.app/",
  },
  {
    name: "Netflix Clone",
    description:
      "This project is a Netflix Clone built using the MERN Stack. It includes features like User Authentication, Movie Listings, and a dynamic Admin Panel for managing content.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/Kzvwn1Hm/Screenshot-2025-02-28-195758.png",
    source_code_link: "https://netflix-clone-production-d282.up.railway.app/",
  },
  {
    name: "Spotify Clone",
    description:
      "This project is a Spotify Clone built using the MERN Stack.It features User Authentication, Music Playback, Volume Control, and an Admin Panel for songs and albums.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "shadcn ui",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/Px3cKdgY/Screenshot-2025-02-28-195840.png",
    source_code_link: "https://spotify-clone-production-261e.up.railway.app/",
  },
  {
    name: "Chat App",
    description:
      "A MERN Stack Chat Application that provides real-time messaging feature. The app includes user authentication, message storage, and responsive UI design for seamless communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/FF68LsgQ/Screenshot-2025-02-28-195945.png",
    source_code_link: "https://chat-app-master.up.railway.app/",
  },
  {
    name: "iPhone UI",
    description:
      "An iPhone Website built with GSAP animations and React.js, showcasing dynamic scrolling effects and smooth transitions. The project highlights interactive UI elements and modern design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP | Threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwimd",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/MZhx8YLR/Screenshot-2025-02-28-212005.png",
    source_code_link: "https://iphone-gsap-ten.vercel.app/",
  },
  {
    name: "GPT UI",
    description:
      "This project is a GPT UI design built using React.js and GSAP animations. The project features an interactive and modern user interface with smooth and engaging animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/qRPFW17v/Screenshot-2025-02-28-212417.png",
    source_code_link: "https://ui-gpt-mauve.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
