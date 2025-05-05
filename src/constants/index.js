import {
    mobile,
    passport,
    express,
    backend,
    creator,
    web,
    cbse,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    amrita,
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
    corizo,
    carrent,
    jobit,
    tripguide,
    threejs,
    wanderlust,
    weather,
    court,
    city,
    nlp,
    github
} from "../assets";
  
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & ML Enthusiast",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
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
    name: "React JS",
    icon: reactjs,
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
    name: "passportjs",
    icon: passport,
  },
  {
    name: "expressjs",
    icon: express,
  },
];

const experiences = [
  {
    title: "Class 10th",
    company_name: "Navy Children School",
    icon: cbse,
    iconBg: "#383E56",
    date: "August 2021",
    points: [
      "Passed with 98.2% in class 10th board exam",
      "A1 grade in all subjects",
    ],
  },
  {
    title: "Class 12th",
    company_name: "Navy Children School",
    icon: cbse,
    iconBg: "#383E56",
    date: "May 2023",
    points: [
      "Passed with 95.2% in class 12th board exam",
      "A1 grade in all subjects",
    ],
  },
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    company_name: "Amrita Vishwa Vidyapeetham",
    icon: amrita,
    iconBg: "#383E56",
    date: "August 2023 - 2027",
    points: [
      "Currently pursuing my B.Tech in Computer Science and Engineering",
      "GPA: 8.07",
    ],
  },
  {
    title: "AI Internship",
    company_name: "Corizo",
    icon: corizo,
    iconBg: "#383E56",
    date: "March 2024",
    points: [
      "Completed a 3 month internship on AI",
      "Gained experience with ML Algorithms",
      "Completed AI mini project",
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
    name: "Wanderlust-Travel Website",
    description: "A full-stack web application inspired by Airbnb, designed to connect travelers with hosts for booking accommodations",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "red-text-gradient",
      },
      {
        name: "passportjs",
        color: "brown-text-gradient",
      },
    ],
    image: wanderlust,
    demo_link: "https://wanderlust-full-stack-website.onrender.com/",
    source_code_link: "https://github.com/Anushka8178/Wanderlust_Full-Stack-Website/tree/wanderlust-main",
  },
  {
    name: "LexiCourt – AI-Powered Legal Case Analyzer",
    description: "A tool that leverages AI to quickly retrieve and analyze Indian court cases based on criteria like state, police station, and case number, providing insights into case background, summaries, and potential outcomes.",
    tags: [
      {
        name: "LegalBert",
        color: "blue-text-gradient",
      },
      {
        name: "TinyLlama",
        color: "green-text-gradient",
      },
      {
        name: "Steamlit UI",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "red-text-gradient",
      },
    ],
    image: court,
    source_code_link: "https://github.com/Anushka8178/AI-Court",

  },
  {
    name: "SkyTrackr - React Weather Widget",
    description: "Real-time weather data at your fingertips with a React widget",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "openweatherapi",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Anushka8178/MaterialUI-Weather_Widget",
    demo_link: "https://material-ui-weather-widget-25td.vercel.app/"
  },
  {
    name: "UrbanFlow: Streamlining City Life with Technology",
    description: "Empowering cities with cutting-edge automation and smart systems",
    tags: [
      {
        name: "Arduino-C Programming",
        color: "blue-text-gradient",
      },
      {
        name: "IR Sensor",
        color: "green-text-gradient",
      },
      {
        name: "Ultrasonic Sensor",
        color: "pink-text-gradient",
      },
      {
        name: "RFID",
        color: "red-text-gradient",
      },
      {
        name: "Light Dependent Resistor",
        color: "red-text-gradient",
      },
    ],
    image: city,
    source_code_link: "https://github.com/Anushka8178/UrbanFlow",
  },
  {
    name: "Research Paper on Relation Extraction",
    description: "A study on relational extraction using the RAG approach and FLAN-T5 with the CONLL dataset to improve the extraction of meaningful relationships from structured text.",
    tags: [
      {
        name: "Retrieval Augmented Generation",
        color: "blue-text-gradient",
      },
      {
        name: "Chain of Thought",
        color: "green-text-gradient",
      },
    ],
    image: nlp,
    
  },
];

export { services, technologies, experiences, testimonials, projects };