import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "E-SHOP",
    description:
      "A fully functional e-commerce platform built with MERN stack, offering secure authentication, admin dashboard to manage products, users, and orders, dynamic product filtering with sorting and pagination, and secure PayPal payment integration handled on the backend.",
    image: "/images/eshop.jpg",
    liveLink: "https://eshop-aa7f.onrender.com/",
    codeLink: "https://github.com/rimrachai-marma/eshop",
    technologies: [
      "React",
      "SAAS",
      "React Router,",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "Mongoose",
      "PayPal API",
    ],
  },

  {
    title: "AUDIOPHILE",
    description:
      "A responsive e-commerce website built based on a Frontend Mentor design, showcasing a clean and intuitive user experience. It features responsive images. This project highlights development using Vanilla JavaScript and CSS, focusing on interactivity and performance.",
    image: "/images/audiophile.jpg",
    liveLink: "https://audiophile-pjqk.onrender.com",
    codeLink: "https://github.com/rimrachai-marma/audiophile",
    technologies: ["JavaScript", "CSS", "SAAS", "Express", "EJS"],
  },

  {
    title: "PORTFOLIO",
    description:
      "The website you're exploring now. A modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It features dark mode support, smooth animations, a clean UI, and responsive design—showcasing my development skills, featured projects, and overall web expertise.",
    image: "/images/portfolio.jpg",
    liveLink: "https://rimra.vercel.app",
    codeLink: "https://github.com/rimrachai-marma/portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },

  {
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. This project focuses on core game logic using JavaScript, along with creative CSS styling, shapes, :not() selector, and hover effects.",
    image: "/images/tictactoe.jpg",
    liveLink: "https://jstictactoeg.netlify.app",
    codeLink: "https://github.com/rimrachai-marma/Tic_Tac_Toe",
    technologies: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "Store - Shopping Cart with React Context",
    description:
      "A full-featured React Shopping Cart project demonstrating how to properly use React Context API together with custom hooks. The project focuses on managing application state efficiently and organizing Context logic in a clean and scalable way.",
    image: "/images/store.jpg",
    liveLink: "https://beautiful-jelly-4b32d2.netlify.app/",
    codeLink: "https://github.com/rimrachai-marma/react-shopping-cart",
    technologies: ["React", "React Context API", "Bootstrap"],
  },
];
