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
    algovisual,
    drdo,
    rumor_detection,
    llm_eval,
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
      "CGPA: 8.4",
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
  {
    title: "Research Intern",
    company_name: "NPOL, DRDO — Ministry of Defence, Govt. of India",
    icon: drdo,
    iconBg: "#383E56",
    date: "Jun 2026 – Jul 2026",
    points: [
      "Working on defence-grade software at India's premier naval R&D lab.",
      "Developing and evaluating algorithms in a high-reliability, resource-constrained environment.",
      "Conducted rigorous debugging and performance analysis for real-world systems.",
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
    demo_link: "https://wanderlust-full-stack-website-9.onrender.com/listings",
    source_code_link: "https://github.com/Anushka8178/Wanderlust_Full-Stack-Website/tree/wanderlust-main",
  },
  {
    name: "AI-Court – LegalBERT & NLP Judicial Case Analyzer",
    description: "An AI & Applied NLP legal intelligence platform leveraging LegalBERT embeddings to analyze 53,000+ Indian court cases, predict trial outcomes, assess bail risks, and index IPC provisions.",
    tags: [
      {
        name: "LegalBERT",
        color: "blue-text-gradient",
      },
      {
        name: "Applied NLP",
        color: "green-text-gradient",
      },
      {
        name: "TinyLlama",
        color: "red-text-gradient",
      },
      {
        name: "Streamlit UI",
        color: "pink-text-gradient",
      },
    ],
    image: court,
    source_code_link: "https://github.com/Anushka8178/AI-Court",
    demo_link: "https://ai-court.streamlit.app/",
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
    demo_link: "https://skytrackr-weather-widget-y17i.vercel.app/"
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
    name: "Improving Timeliness in Rumor Detection with Time-Aware Contrastive Learning",
    description: "Designing a temporal contrastive learning framework for early-stage rumor detection on social media; evaluating on benchmark propagation datasets using temporal signal modeling.",
    tags: [
      {
        name: "contrastive-learning",
        color: "blue-text-gradient",
      },
      {
        name: "rumor-detection",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
      {
        name: "pytorch",
        color: "red-text-gradient",
      },
    ],
    image: rumor_detection,
  },
  {
    name: "Heuristic Evaluation Failures in Automated Code Generation Pipelines",
    description: "Studying failure modes of small open-source LLMs on HumanEval, analyzing divergence between heuristic metrics and actual correctness to improve automated pipeline reliability.",
    tags: [
      {
        name: "llm-evaluation",
        color: "blue-text-gradient",
      },
      {
        name: "code-generation",
        color: "green-text-gradient",
      },
      {
        name: "humaneval",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "red-text-gradient",
      },
    ],
    image: llm_eval,
  },
  {
    name: "AlgoVisualizer – Algorithm Visualizer",
    description: "An interactive web platform designed to visualize sorting, searching, and graph algorithms step-by-step with interactive playback controls, streak tracking, and custom learning notes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "d3js",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "red-text-gradient",
      },
    ],
    image: algovisual,
    demo_link: "https://algovisual-amber.vercel.app/",
    source_code_link: "https://github.com/Anushka8178/algoVisualiser",
  },
];

export { services, technologies, experiences, testimonials, projects };