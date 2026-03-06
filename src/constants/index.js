const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Projects",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Mar 1, 2025",
    title: "Building a 3D Portfolio with React, Vite, and GSAP",
    image: "/images/blog1.png",
    link: "https://gsap.com/docs/v3/",
  },
  {
    id: 2,
    date: "Feb 22, 2025",
    title: "TypeScript Tips for Cleaner, Safer React Code",
    image: "/images/blog2.png",
    link: "https://react.dev/learn/typescript",
  },
  {
    id: 3,
    date: "Feb 15, 2025",
    title: "REST APIs with Node.js and Express: A Practical Guide",
    image: "/images/blog3.png",
    link: "https://expressjs.com/en/guide/routing.html",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    category: "Backend",
    items: ["PHP", "Node.js", "Laravel"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Styling",
    items: ["Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub"],
  },
  {
    category: "Hosting",
    items: ["Linux VPS", "Nginx"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/NigelBecholtz",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/nigel-becholtz",
  },
  {
    id: 3,
    text: "Email",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "mailto:Nigel.becholtz@gmail.com",
  },
  {
    id: 4,
    text: "Portfolio",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "#",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Projects",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Development",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Work",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "Learning",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.jpeg",
  },
  {
    id: 2,
    img: "/images/gal2.jpeg",
  },
  {
    id: 3,
    img: "/images/gal3.jpeg",
  },
  {
    id: 4,
    img: "/images/gal4.jpeg",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Projects",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "E-Learning Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "project-description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This project is an e-learning platform for organizations to deliver compliance and professional training through curricula, video modules, and assessments.",
            "The platform provides role-based dashboards, multi-language content (14 languages via DeepL), and integration with external systems for user and organization sync.",
            "The backend was built with Laravel (PHP 8.2) and Inertia.js with React for the frontend, designed to handle curricula, trainings, assessments, certificates, and video progress tracking.",
            "The goal of the project was to build a scalable learning management system with API-first design, multi-tenancy for organizations, and multi-language content workflows.",
          ],
        },
      ],
    },

    {
      id: 6,
      name: "Survey Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "project-description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "This project is a survey platform for organizations to create and publish questionnaires, collect responses, and deliver score-based advice to respondents.",
            "The platform provides multi-language surveys (16 languages via UI strings), configurable email notifications (completion alerts and respondent summary emails with advice), and optional audience-based scoring and advice.",
            "The backend was built with Laravel (PHP) and a React frontend, and supports surveys with multiple question types (single/multiple choice, scale, open text), score ranges, SMTP configuration per survey or company, and public submission by link or token.",
            "The goal of the project was to build a scalable survey and feedback system with company multi-tenancy, translatable content and UI, and email workflows for both internal notifications and respondent summaries (including spam-folder guidance).",
          ],
        },
      ],
    },

    {
      id: 7,
      name: "Member Management System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "project-description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "This project is a member management system for CEPI (Confederation of European Paper Industries) for organisations to manage their members, import and export member data, and verify membership via a REST API.",
            "The platform offers CSV and Excel import and export (with PhpSpreadsheet), sync-based updates from imported files, and a check-member API endpoint for email-based membership lookup with configurable rate limiting per API key.",
            "The backend is built with Laravel 12 (PHP 8.2+) and a Blade-based frontend with Tailwind CSS 4 and Vite 7, using MySQL (or SQLite) as the default database.",
            "The system supports organisation-level multi-tenancy, activity logging for audits, AES-256-GCM-encrypted storage of member emails, and an admin panel for organisations, accounts, and API key management.",
            "The goal was to build a scalable, privacy-conscious membership system with secure API access, file-based data exchange, and clear separation between organisation users and admin users.",
          ],
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/nigel.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/nigel.png",
    },
    {
      id: 3,
      name: "casual-me(1).png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal1.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/nigel.png",
      description: [
        "Hey! I’m Nigel Becholtz, an 18-year-old software developer from the Netherlands.",
        "I’m currently studying Software Development at Grafisch Lyceum Rotterdam and I’m passionate about backend development.",
        "I enjoy building the logic and systems that power applications behind the scenes using technologies like PHP, Node.js, and MySQL.",
        "Right now I’m completing my internship in Spain while continuing to expand my skills in backend architecture, APIs, and server infrastructure.",
        "Outside of programming I enjoy going to the gym, watching Formula 1, and learning new technologies.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };