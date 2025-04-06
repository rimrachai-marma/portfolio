import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "E-SHOP",
    description:
      "A fully functional e-commerce platform built with MERN stack, offering secure authentication, admin dashboard to manage products, orders, and users, dynamic product filtering with sorting and pagination, and secure PayPal payment integration handled on the backend.",
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
      "A responsive e-commerce website built based on a design from Frontend Mentor, showcasing a clean and functional user experience. This project emphasizes Vanilla JavaScript and Vanilla CSS development.",
    image: "/images/audiophile.jpg",
    liveLink: "https://audiophile-pjqk.onrender.com",
    codeLink: "https://github.com/rimrachai-marma/audiophile",
    technologies: ["JavaScript", "CSS", "SAAS", "Express", "EJS"],
  },

  {
    title: "PORTFOLIO",
    description: "The website you're exploring now",
    image: "/images/dog.png",
    liveLink: "https://rimrachai-marma.vercel.app",
    codeLink: "",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
