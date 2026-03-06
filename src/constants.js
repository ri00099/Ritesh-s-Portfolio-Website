// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import solitaireLogo from "./assets/company_logo/sol_logo.png";
import graphuraLogo from "./assets/company_logo/graphura_logo.jpeg";

// Education Section Logo's
import collegeLogo from "./assets/education_logo/lpu_logo.png";
import collegeLogo2 from "./assets/education_logo/cgc_logo.png";
import schoolLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import crmLogo from "./assets/work_logo/crm_logo.png";
import restaurantLogo from "./assets/work_logo/restaurant_logo.png";
import jewelleryLogo from "./assets/work_logo/jewellry_logo.png";
import spotifyLogo from "./assets/work_logo/Spotify_logo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Supabase", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 2,
    img: graphuraLogo,
    role: "Frontend Developer Intern",
    company: "Graphura India Pvt. Ltd.",
    date: "Internship",
    desc: "Worked as a Frontend Developer Intern, focusing on building responsive and user-friendly web interfaces using modern frontend technologies. Developed reusable React components, implemented clean UI designs with Tailwind CSS, and enhanced user experience through smooth animations and interactive elements. Collaborated with the team to translate design requirements into functional web pages while maintaining code quality and performance.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "ShadCN UI",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    id: 1,
    img: solitaireLogo,
    role: "MERN Stack Trainee",
    company: "Solitaire Infosys Pvt. Ltd.",
    date: "Feb 2024 – July 2024",
    desc: "Completed a 6-month intensive MERN Stack training program focused on building modern, responsive web applications. Worked on real-world projects involving frontend development with React, Tailwind CSS, and JavaScript, along with backend fundamentals using Node.js, Express.js, and MongoDB. Gained hands-on experience in component-based architecture, REST APIs, database integration, and creating smooth user experiences using modern UI libraries and animations.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "ShadCN UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Framer Motion",
      "GSAP",
    ],
  },
];

export const education = [
{
  id: 0,
  img: collegeLogo,
  school: "Chandigarh Group of Colleges, Jhanjeri",
  date: "2024 – 2026 (Pursuing)",
  grade: "7.5 CGPA",
  desc: "Currently pursuing a Master of Computer Applications (MCA) with a focus on advanced computer science concepts, software development, and modern web technologies. Gaining in-depth knowledge in areas such as Data Structures, Algorithms, Database Management Systems, Web Development, and Software Engineering, while continuously strengthening practical development skills through projects.",
  degree: "Master of Computer Applications (MCA)",
},
{
  id: 1,
  img: collegeLogo2,
  school: "Chandigarh Group of Colleges, Jhanjeri",
  date: "2021 – 2024",
  grade: "7.6 CGPA",
  desc: "Completed a Bachelor of Computer Applications (BCA) with a strong foundation in programming and application development. Studied core subjects including Programming Fundamentals, Object-Oriented Programming, Database Management Systems, Data Structures, and Web Development. Developed practical skills through academic projects and hands-on lab work.",
  degree: "Bachelor of Computer Applications (BCA)",
},
{
  id: 2,
  img: schoolLogo,
  school: "Senior Secondary School (PCM)",
  date: "2020 – 2021",
  grade: "87.3%",
  desc: "Completed Class XII with Physics, Chemistry, and Mathematics (PCM) as core subjects. Built a strong analytical and problem-solving foundation, which supported further studies in computer science and technical fields.",
  degree: "Class XII (PCM)",
},
{
  id:3,
  img: schoolLogo,
  school: "Secondary School",
  date: "2018 – 2019",
  grade: "80.02%",
  desc: "Completed Class X with a balanced academic curriculum, developing fundamental skills in mathematics, science, and logical reasoning that laid the groundwork for higher education in technology.",
  degree: "Class X",
},
];

export const projects = [
  {
    id: 1,
    title: "CRM Dashboard System",
    description:
      "A responsive CRM dashboard built using React.js to manage and visualize customer data efficiently. Features include user management, lead tracking, and dynamic data rendering with an intuitive UI. Designed to improve workflow efficiency and provide quick insights through a clean, modern interface.",
    image: crmLogo,
    tags: [
      "React",
      "Bootstrap CSS",
      "Figma",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    github: "https://github.com/vivekkr10/Grphura-Bansari",
    webapp: "https://www.figma.com/design/iTKznGXfA5AxlQDB2HKqaG/Bansari?node-id=198-1872&t=QWKtpAVkfBMr7wfe-0",
  },
  {
    id: 2,
    title: "Restaurant Automation System",
    description:
      "A full-stack restaurant automation application designed to streamline order management and improve operational efficiency. Enables menu management, order placement, and real-time status updates with a user-friendly interface. Built with a focus on performance, scalability, and seamless user experience.",
    image: restaurantLogo,
    tags: ["React", "CSS/ Moduler CSS", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/graphuraselfprojects/Restaurants-System.git",
    webapp: "https://restaurants-system.vercel.app/",
  },
  {
    id: 3,
    title: "Jewellery E-Commerce Website",
    description:
      "A modern and visually appealing e-commerce platform for jewellery products, featuring product listings, detailed views, and a smooth shopping experience. Implemented responsive design, interactive UI components, and animations to enhance user engagement and showcase products effectively.",
    image: jewelleryLogo,
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js", "Express.js", "MongoDB"

    ],
    github: "https://github.com/graphuraselfprojects/Restaurants-System.git",
    webapp: "https://restaurants-system.vercel.app/",

  },
  {
    id: 4,
    title: " Spotify Clone (Backend)",
    description:
      "A Node.js + Express backend project inspired by Spotify. This project focuses on building a professional backend architecture with authentication, role-based authorization, and media handling. It was built as my first structured backend project while learning the MERN stack, where I implemented real-world backend concepts like controllers, middleware, database integration, and cloud media storage.",
    image: spotifyLogo,
    tags: [
      
      "Node.js", "Express.js", "MongoDB", "JWT", "Imagekit"

    ],
    github: "https://github.com/ri00099/Spotify-Backend",
    webapp: "https://github.com/ri00099/Spotify-Backend",

  },
];
