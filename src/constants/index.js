import {
    backend,
    web,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    shopify1,
    penny,
    study,
    cpp,
    java,
    ui,
    threejs,
  } from "../assets";
  import html from '/html.png'
  import css from '/css.png'
  import javascript from '/javascript.png'
  import reactjs from '/reactjs.png'
  
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
      title: "UI/UX Designer",
      icon: ui,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
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
      name: "JavaScript",
      icon: javascript,
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
      name: "React Js",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
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
        "Working with Piyush has been a game-changer for our team. Their innovative approach to problem-solving and deep technical expertise is remarkable. They’ve consistently exceeded our expectations",
      name: "Anjali Mehta",
      designation: "Senior Software Engineer",
      company: "Acme Co",
      image: "https://thumbs.dreamstime.com/b/black-happy-girls-icon-vector-woman-icon-illustration-face-young-face-people-icons-cartoon-style-people-72080969.jpg",
    },
    {
      testimonial:
        "“Piyush’s dedication and eye for detail have significantly improved our project outcomes. Their proactive approach to tackling challenges makes them a great asset to any team.",
      name: "Rahul Sharma",
      designation: "Project Manager",
      company: "DEF Corp",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3oYa9BljpcyhfIwVizBrEuo4HjsWq1mNzw&s",
    },
    {
      testimonial:
        "The insights and technical acumen that Piyush brought to the table were invaluable. They demonstrate true leadership and dedication.",
      name: "Arjun Deshmukh",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://cdn-icons-png.flaticon.com/512/4086/4086679.png",
    },
  ];
  
  const projects = [
    {
      name: "Study Sync",
      description:
        "This project is an innovative educational platform aimed at revolutionizing the way students organize and manage their study routines. It is designed to help students seamlessly synchronize their study schedules, assignments, and learning resources in one cohesive space. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: study,
      source_code_link: "https://github.com/Kumar2004-2009/StudySync-React",
    },
    {
      name: "Shopify",
      description:
        "This project is a fully functional e-commerce platform tailored for a clothing brand, built using Node.js, Express, and MongoDB. The platform delivers a seamless and intuitive shopping experience for users while offering robust backend support for efficient store management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node",
          color: "pink-text-gradient",
        },
      ],
      image: shopify1,
      source_code_link: "https://github.com/Kumar2004-2009/shopify",
    },
    {
      name: "PennyTrack",
      description:
        "PennyTracker is a user-friendly and efficient expense management tool designed to empower users in managing their finances with ease. This innovative platform simplifies budget tracking and expense monitoring, helping users gain complete control over their financial health.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "heroicons",
          color: "green-text-gradient",
        },
        {
          name: "chartjs",
          color: "pink-text-gradient",
        },
      ],
      image: penny,
      source_code_link: "https://github.com/Kumar2004-2009/budget-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };