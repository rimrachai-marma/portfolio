import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Sky Quest",
    description:
      "Sky Quest is a flight search platform with a clean, responsive UI and excellent performance. Built using Next.js, TypeScript, and Tailwind CSS, it integrates the Amadeus API, featuring advanced passenger selection, detailed flight results, and full SEO optimization for a smooth and accurate travel booking experience.",
    image: "/images/sky-quest.jpg",
    liveLink: "https://sky-quest-blue.vercel.app",
    codeLink: "https://github.com/rimrachai-marma/SkyQuest",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Amadeus API",
    ],
  },

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
    title: "Contact Management System",
    description:
      "A simple yet functiona Contact Management System app built with PHP and Laravel, featuring user authentication, contact search, status filtering, and pagination. The user interface is designed with Tailwind CSS for a clean and responsive experience.",
    image: "/images/contact-management-system.jpg",
    liveLink: "https://contact-management-system-brown.vercel.app/",
    codeLink: "https://github.com/rimrachai-marma/contact-management-system",
    technologies: ["PHP", "Laravel", "Tailwind CSS", "Blade"],
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
    title: "Contact Management System API",
    description:
      "A Laravel-based Contact Management System API with authentication using Sanctum, allowing users to securely manage personal contacts. Implements robust request validation, authorization policies, custom middleware, and structured exception handling. Supports search, filtering, sorting, and starring contacts, ensuring consistent, secure, and user-friendly JSON API responses.",
    image: "/images/contact-management-system-api.png",
    codeLink:
      "https://github.com/rimrachai-marma/contact-management-system-api",
    technologies: ["PHP", "Laravel", "Sanctum Auth"],
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
    title: "Store - Shopping Cart with React Context API",
    description:
      "A full-featured React Shopping Cart project demonstrating how to properly use React Context API together with custom hooks. The project focuses on managing application state efficiently and organizing Context logic in a clean and scalable way.",
    image: "/images/store.jpg",
    liveLink: "https://beautiful-jelly-4b32d2.netlify.app/",
    codeLink: "https://github.com/rimrachai-marma/react-shopping-cart",
    technologies: ["React", "React Context API", "Bootstrap"],
  },
];
