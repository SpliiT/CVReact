import {
  mobile,
  backend,
  lover,
  web,
  javascript,
  html,
  css,
  reactjs,
  vue,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  schiromenuiseries,
  schiroconstructions,
  geode,
  sabrina,
  modernstyl,
  perfossau,
  three,
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
    title: "Web Developer",
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
  {
    title: "3D Lover",
    icon: lover,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
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
    icon: three,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Carpenter - Summer job",
    company_name: "Schiro Menuiseries & Fermetures",
    icon: schiromenuiseries,
    iconBg: "#E6DEDD",
    date: "June 2021 - July 2021",
    points: [
      "During one summer, I worked for a month as a carpenter.",
      "My responsibilities included measuring, cutting, assembling, and installing wooden structures and furniture.",
      "This job helped me develop precision, attention to detail, and teamwork skills while gaining hands-on experience in craftsmanship and construction.",
    ],
  },
  {
    title: "Macon - Summer job",
    company_name: "Schiro Constructions",
    icon: schiroconstructions,
    iconBg: "#383E56",
    date: "June 2022 - July 2023",
    points: [
      "Assisted in the construction and repair of walls, foundations, and other structures using brick, stone, and concrete.",
      "Prepared and mixed materials, including cement and mortar, ensuring the correct proportions for durability.",
      "Operated tools and equipment such as trowels, hammers, and levels to ensure precise and efficient work.",
      "Maintained a clean and safe work environment, adhering to safety guidelines and procedures.",
    ],
  },
  {
    title: "Fullstack Web Developer - Apprenticeship ",
    company_name: "Geode-solutions",
    icon: geode,
    iconBg: "#E6DEDD",
    date: "September 2023 - July 2025",
    points: [
      "Developed and maintained web applications and open-source frameworks, ensuring high performance and scalability.",
      "Worked on both front-end and back-end development, mastering technologies such as VueJS, Flask and Nuxt.",
      "Collaborated closely with a team to design and implement innovative solutions, improving user experience and system functionality.",
      "Significantly enhanced technical and problem-solving skills through hands-on experience and active contribution to complex projects.",
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
    name: "Sabrina Psychanalyse",
    description:
      "Website for a psychiatrist who specializes in treating patients with mental illness.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: sabrina,
    source_code_link: "https://sabrinapsychanalyse.com/",
  },
  {
    name: "ModernStyl Décor",
    description:
      "Website for a decorator who specializes in creating and renovating stylish and elegant spaces.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "boostrap",
        color: "green-text-gradient",
      },
    ],
    image: modernstyl,
    source_code_link: "https://modernstyldecor.com/",
  },
  {
    name: "Perf'Ossau Training",
    description:
      "A website for a fitness trainer who specializes in helping clients achieve their fitness goals.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "boostrap",
        color: "green-text-gradient",
      },
    ],
    image: perfossau,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
