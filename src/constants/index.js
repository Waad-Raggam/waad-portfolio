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
  // carrent,
  plans,
  jobit,
  tripguide,
  threejs,
  arscene,
  ar2,
  ar3,
  ar4,
  ps5,
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
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Games Developer",
    icon: creator,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "myFirst Tech",
    project_name: "Social Circle Mobile App",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jul 2022 - Feb 2024",
    points: [
      "Developed and maintained a mobile application for iOS and Android using Flutter.",
      "Integrated APIs and SDKs, improving app functionality and enhancing user experience.",
      "Collaborated with cross-functional teams to define and implement new app features, delivering 3 major features within tight deadlines.",
      "Led design, development, and debugging efforts, ensuring app stability through regular testing and debugging.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "myFirst Tech",
    project_name: "myFirst FreeSim Website",
    icon: tesla,
    iconBg: "#383E56",
    date: "Jul 2022 - Feb 2024",
    points: [
      "Specialized in maintaining and enhancing a Node.js application, achieving 99.9% uptime over a two-month period.",
      "Introduced optimizations that increased website traffic by 30% within the first month post-implementation.",
      "Utilized AWS services for efficient deployment and maintenance, ensuring seamless scalability.",
      "Played a key role in the successful deployment and continuous maintenance of the web application.",
    ],
  },
  {
    title: "C# Bootcamp",
    company_name: "Saudi Digital Academy",
    project_name: "Gym Insurance Marketplace",
    icon: meta,
    iconBg: "#383E56",
    date: "Aug 2024 - Nov 2024",
    points: [
      "Built a gym insurance management platform with features like dynamic filtering, plan management, and order tracking.",
      "Developed a responsive React-based dashboard using Material-UI, Axios, and RESTful APIs.",
      "Ensured seamless functionality and improved user experience through effective integration of frontend and backend components.",
    ],
  },
  {
    title: "AR Mobile Application",
    company_name: "Universiti Teknologi Malaysia (UTM)",
    project_name: "Augmented Geometry",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2020 - Sep 2021",
    points: [
      "Developed an educational mobile app using augmented reality to teach 3D geometry to secondary students and teachers.",
      "Built the app infrastructure with Flutter and implemented AR modules using Unity.",
      "Designed features like shape visualization, transformation tools, quizzes, and performance tracking to enhance the learning experience.",
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
    name: "Gym Insurance Marketplace",
    description:
      "A gym insurance management platform that enables users to manage insurance plans, filter policies dynamically, and track orders via a React-based dashboard. It streamlines insurance operations with an intuitive and responsive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "yellow-text-gradient",
      },
    ],
    image: plans,
    source_code_link:
      "https://github.com/Waad-Raggam/gym-insurance-marketplace",
  },
  {
    name: "Augmented Geometry",
    description:
      "An educational mobile app leveraging augmented reality to teach 3D geometry concepts. It provides tools for shape visualization, geometric transformations, quizzes, and performance tracking, aiming to enhance the learning experience for students and teachers.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "unity",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
      {
        name: "augmented-reality",
        color: "yellow-text-gradient",
      },
    ],
    image: ar4,
    source_code_link: "https://github.com/waadshaher/Augmented-Geometry/",
  },
  {
    name: "PS5 Games Browser App",
    description:
      "A sleek and user-friendly mobile app that allows users to browse, search, and discover PlayStation 5 games. Features include filtering by genre, rating, and release date, detailed game descriptions, and trailers. Built to enhance the gaming experience by providing a convenient way to explore the PS5 game library.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "bloc",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: ps5,
    source_code_link: "https://github.com/Waad-Raggam/ps5-games-browser-app",
  },
];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

export { services, technologies, experiences, testimonials, projects };
