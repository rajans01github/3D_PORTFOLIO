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
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "Placement Cell Web Developer",
      company_name: "Academic Project - CU",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2024 - May 2024",
      points: [
        "Designed and developed a complete placement portal using Node.js, HTML, CSS, and JavaScript.",
      "Implemented student registration, job posting, admin dashboards, and tracking systems.",
      "Improved usability and data flow across student and admin dashboards.",
      ],
    },
    {
      title: "Email Spam Detection",
      company_name: "Academic Research",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: " Feb 2023 - May 2023",
      points: [
        "Built a spam classifier using Python, BERT, and Random Forest models.",
      "Improved detection accuracy by 25% and optimized model evaluation frameworks.",
      "Contributed toward AI-based decision-making systems.",
      ],
    },
    {
      title: "Facial Detection System Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Aug 2022 - Jan 2023",
      points: [
        "Created a real-time facial detection app using Python, OpenCV, and deep learning.",
      "Designed for attendance tracking, security, and authentication use cases.",
      "Scalable and performance-optimized system.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Meta (Job Portal Application)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2025 - Present",
      points: [
        "Building a full-stack Job Portal using React.js, Redux Toolkit, Spring Boot, and MongoDB.",
        "Developed features like role-based authentication, job postings, resume uploads, and admin dashboards.",
        "Integrated secure RESTful APIs with Spring Boot and handled data persistence using MongoDB.",
        "Designed a responsive UI/UX with Tailwind CSS and implemented global state management using Redux.",
        "Collaborating with cross-functional teams in Agile sprints to ship scalable, production-ready code.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Rajan transformed our ideas into a stunning digital experience. Highly recommend!",
      name: "Aabha Singh",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "One of the most dedicated developers we've worked with. Excellent delivery and collaboration.",
      name: "Raj",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Rajan's skill in building scalable systems is remarkable. A true asset to any project.",
      name: "Ranjana",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/rajans01github/BACKEND",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/rajans01github/JOB-PORTAL",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };