type FeaturedProject = {
  title: string;
  link: string;
  imageUrl: string;
};

type AboutSection = {
  title: string;
  desc: {
    title: string;
    body: string[];
  }[];
  currentProject: string;
  currentProjectUrl: string;
  techStack: {
    name: string;
    imageUrl: string;
  }[];
};

type ProjectItem = {
  title: string;
  link: string;
  repo: string;
  imageUrl: string;
};

type ExperienceItem = {
  title: string;
  company: string;
  year: string;
  companyUrl: string;
  desc: string[];
};

type ContactInfo = {
  title: {
    beginning: string;
    underline: string;
    end: string;
  };
  contactMethods: {
    text: string;
    destination: string;
    href: string;
  }[];
};

type SocialUrls = {
  resumeUrl: string;
  linkedIn: string;
  github: string;
  portfolio: string;
};

type MyData = {
  name: string;
  githubUsername: string;
  designation: string;
  avatarUrl: string;
  email: string;
  address: string;
  colors: string[];
  descriptors: string[];
  featuredProject: FeaturedProject;
  about: AboutSection;
  projects: ProjectItem[];
  experience: ExperienceItem[];
  contact: ContactInfo;
  socialUrls: SocialUrls;
};

const myData: MyData = {
  name: "Geo Sauer",
  githubUsername: "GeoSauer",
  designation: "Full-Stack Engineer",
  avatarUrl: "/avatar.png",
  email: "geo.sauer89@gmail.com",
  address: "Loveland, Colorado, USA",
  colors: ["#F4743B", "#55c1FF", "#5438DC", "#32E875"],
  descriptors: ["Engineer.", "Sculptor.", "Maker.", "Nerd."],

  featuredProject: {
    title: "Next.js DecapCMS Template",
    link: "https://nextjs-decapcms-template.netlify.app/",
    imageUrl: "/nextjs-decapcms-template.png",
  },

  about: {
    title:
      "I'm a software engineer that loves building responsive and accessible web-based products with clean, verbose, and maintainable code.",
    desc: [
      {
        title: "Where I've been.",
        body: [
          "Growing up in beautiful Northern Colorado I've had a lifelong affinity for the outdoors.",

          "I love paddle boarding, mountain biking, and puttering around on my Royal Enfield Himalayan all along the front range.",

          "When I'm not outdoors I can typically be found playing video or tabletop games, or tinkering around with my 3-D printer.",

          "I'm a lifelong maker and love diving into technical processes head-on and figuring them out.",

          "This is part of what drove me to study bronze sculpture in my undergrad and fueled my 3.5 year stint in the bronze industry.",
        ],
      },

      {
        title: "What I'm doing.",
        body: [
          "In 2022 I made the decision to dive into yet another technical process head-on by enrolling in Alchemy Code Lab, a full-stack coding bootcamp.",

          "Unfortunately, the school closed abruptly and permanently in early 2023.",

          "Luckily for me I was absolutely hooked and had found a new passion in web development, so I set out to find a problem worth solving.",

          "Working with local D&D groups I developed Grimoire for the Modern Mage, my first full stack app.",

          "I was also looking for a way to give back and began volunteering as a mentor with Codethedream.org.",
        ],
      },

      {
        title: "What I hope to do.",
        body: [
          "One of the most attractive aspects of software engineering for me is the ability for my labor to go towards real, tangible good in the world.",

          "I also have a passion for learning and teaching, and love being on either side of a mentor/mentee relationship.",

          "While I've been keeping busy doing freelance work for folks in my community, I'm looking for full-time employment as a frontend/full-stack software engineer.",

          "I'm excited to bring my strong coding skills and high emotional intelligence to a team built around empathetic communication and mindful collaboration.",
        ],
      },
    ],

    currentProject: "this very portfolio!",
    currentProjectUrl: "https://github.com/GeoSauer/geortfolio-next",

    techStack: [
      {
        name: "JavaScript",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "React.js",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "PostgreSQL",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "Discord.js",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg",
      },
      {
        name: "Jest",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      },
      {
        name: "Git",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "Heroku",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
      },
      {
        name: "VSCode",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "TypeScript",
        imageUrl:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
  },

  projects: [
    {
      title: "Next.js + DecapCMS Template",
      link: "https://nextjs-decapcms-template.netlify.app/",
      repo: "https://github.com/GeoSauer/nextjs-decapcms-template",
      // gifUrl: "/gmm-walkthrough.webp",
      imageUrl: "/nextjs-decapcms-template.png",
    },
    {
      title: "HazAdapt",
      link: "https://www.hazadapt.com/",
      repo: "",
      // gifUrl: "/gmm-walkthrough.webp",
      imageUrl: "/hazadapt.png",
    },
    {
      title: "Bootcampr",
      link: "https://landing.bootcampr.io/",
      repo: "",
      // gifUrl: "/gmm-walkthrough.webp",
      imageUrl: "/bootcampr.png",
    },
    {
      title: "Grimoire for the Modern Mage",
      link: "https://grimoire-for-the-modern-mage.netlify.app/welcome",
      repo: "",
      // gifUrl: "/gmm-walkthrough.webp",
      imageUrl: "/gmm.png",
    },
    {
      title: "Geortfolio",
      link: "https://www.geosauer.com/",
      repo: "https://github.com/GeoSauer/geortfolio-next",
      // gifUrl: "/avatar.png",
      imageUrl: "/geortfolio.png",
    },
    // {
    //   title: "Carpe DnDiem",
    //   link: "https://github.com/GeoSauer/carpe-dnDiem",
    //   repo: "https://github.com/GeoSauer/carpe-dnDiem",
    //   // gifUrl: "/avatar.png",
    //   imageUrl: "/carpedndiem.png",
    // },
    {
      title: "Pokedex",
      link: "https://geos-pokedex.netlify.app/",
      repo: "https://github.com/GeoSauer/react-pokedex",
      // gifUrl: "/avatar.png",
      imageUrl: "/pokedex.png",
    },
    {
      title: "Tic-Tac-Geo",
      link: "https://react-tic-tac-geo.netlify.app/",
      repo: "https://github.com/GeoSauer/Tic-Tac-Geo",
      // gifUrl: "/avatar.png",
      imageUrl: "/tic-tac-geo.png",
    },
    // {
    //   title: "for (dummy of dummies)",
    //   link: "https://dummy-of-dummies.netlify.app/auth/?redirectUrl=https%3A%2F%2Fdummy-of-dummies.netlify.app%2F",
    //   repo: "https://github.com/GeoSauer/dummy-of-dummies",
    //   // gifUrl: "/avatar.png",
    //   imageUrl: "/for(dummyofdummies).png",
    // },
  ],

  experience: [
    {
      title: "Software Engineer",
      company: "HazAdapt",
      year: "2024",
      companyUrl: "https://www.hazadapt.com/",
      desc: [
        "Developing and maintaining a data analytics platform for real-time data visualization of application usage metrics, using React, TypeScript, Chart.js, and Mapbox GL, to deliver interactive charts and geospatial insights for monitoring and analysis.",
        "Leading the architecture and development of critical features like site navigation, subscriptions billing flows, and expanded insight views, improving user experience and platform scalability.",
        "Proactively enhancing accessibility by collaborating with designers to address WCAG compliance, ensuring inclusivity while maintaining high design standards.",
        "Streamlining development by creating reusable components and custom hooks, promoting clean, maintainable code and reducing duplication across the codebase.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Bootcampr",
      year: "2023",
      companyUrl: "https://bootcampr.io/",
      desc: [
        "Ensured pixel-perfect fidelity between Figma designs and implemented UI components, playing a pivotal role in achieving MVP launch goals.",
        "Spearheaded the development and adoption of reusable, modular components, enhancing scalability and maintainability across the product.",
        "Championed and implemented initiatives to enhance platform accessibility, ensuring inclusivity and compliance with accessibility standards.",
      ],
    },
    {
      title: "Founder and Developer",
      company: "SauerPauerStudio",
      year: "2023",
      companyUrl: "https://www.geosauer.com/",
      desc: [
        "Freelance web developer helping indie authors and other members of my community build their brand and expand their online presence.",
      ],
    },
    {
      title: "1:1 Mentor and Reviewer",
      company: "Code the Dream",
      year: "2023",
      companyUrl: "https://codethedream.org/",
      desc: [
        "Met with React students 1:1 to offer mentorship, answer specific questions, or resolve blockers.",
        "Provided code review of student assignments and offered insightful feedback to further their education.",
        "Earned Mentor of the Month - March 2024",
      ],
    },
    {
      title: "Founder and Developer",
      company: "Grimoire for the Modern Mage",
      year: "2023",
      companyUrl: "https://grimoire-for-the-modern-mage.netlify.app/welcome",
      desc: [
        "Engaged with 3 tabletop gaming groups to conduct needs assessments and recognized a common challenge: inadequate space on their spell sheets and the necessity for an additional resource to access spell information.",
        "Designed a character creation UI with React and Chakra UI that allows users to create a profile to save multiple D&D characters stored on a PostgreSQL database.",
        "Developed a custom and fully tested RESTful API using Node, Express, and PostgreSQL that allows users to maintain characters, automatically update character stats on level-up, accurately track spell lists and spell slots, and easily access detailed spell information.",
      ],
    },
    {
      title: "Full Stack Software Engineer Training",
      company: "Alchemy Code Lab",
      year: "2023",
      companyUrl: "https://alchemycodelab.com/",
      desc: [
        "Completed 600+ hours of immersive full-time training in the PERN stack.",
        "Collaborated remotely with teams of 4-6 to rapidly ideate and develop apps.",
      ],
    },
    {
      title: "Coax Splicing Foreman",
      company: "Sage Telecommunications Corp",
      year: "2022",
      companyUrl: "https://www.sagecom.net/",
      desc: [
        "Attained the position of foreman in just 6 months, overseeing 4+ multi-department crews on intricate infrastructure projects, and adeptly managing on-the-fly design changes.",
        "Boosted production by 150% and reduced customer downtime by 80% by creating an optimized strategy for our most frequent job type, contributing to the generation of $1.2 million in value for the company.",
        "Rebuilt and revitalized inter-departmental company relationships, leading to a significant increase in client trust and satisfaction.",
      ],
    },
    {
      title: "Lead TIG Welder",
      company: "Rocky Mountain Bronze Shop",
      year: "2020",
      companyUrl: "https://www.rockymountainbronze.com/index.php",
      desc: [
        "Ensured production timeline was maintained and advanced to the role of lead TIG welder through focused self-guided learning.",
        "Maintained continuous communication with 10+ clients throughout the entire production process, from raw metal to the final patina, ensuring the realization of their creative vision while adhering to their precise standards.",
      ],
    },
    {
      title: "Barbarian",
      company: "Knights of the Tempest",
      year: "2019",
      companyUrl: "",
      desc: [
        "Catch me running around in a kilt swinging my seax at Northern Colorado Medieval Festivals.",
      ],
    },
    {
      title: "Manager",
      company: "D.P. Dough",
      year: "2015",
      companyUrl: "https://www.dpdough.com/",
      desc: ["Worked my way through college slinging calzones and managing a team of rascals."],
    },
    {
      title: "BFA",
      company: "University of Northern Colorado",
      year: "2015",
      companyUrl: "https://www.unco.edu/",
      desc: [
        "Studied Fine Art with an emphasis on bronze sculpture.",
        "Graduated cum laude with a 3.7 GPA.",
        "My sculpture, 'Blue Collar Jetpack', was purchased by the Dean and added to the University's permanent collection.",
        "Community Foundation Grant recipient, awarded $3000 (roughly 1/3 of the total grant pool) for home studio equipment.",
      ],
    },
    {
      title: "AA",
      company: "Aims Community College",
      year: "2011",
      companyUrl: "https://www.aims.edu/",
      desc: [
        "Continued studying both Art and Technology with classes ranging from Ceramics and Digital Photography to 3-D Modeling.",
        "Volunteered with Aims GSA (Gay Straight Alliance).",
      ],
    },
    {
      title: "High School",
      company: "Roosevelt High School",
      year: "2008",
      companyUrl: "https://www.weldre5j.k12.co.us/roosevelt",
      desc: [
        "Graduated with honors.",
        "Allotted all of my elective credits to Art and Technology classes.",
        "Scholastic Art & Writing Awards recipient for sculpture, Gold Key in Colorado, Silver Key in Nationals.",
      ],
    },
  ],

  contact: {
    title: {
      beginning: "I'm currently on the lookout for ",
      underline: "new opportunities",
      end: " and would love to chat about how I can help your team succeed!",
    },
    contactMethods: [
      {
        text: "Let's hop on a ",
        destination: "Video Call.",
        href: "https://calendly.com/geo-sauer",
      },
      { text: "Check out my ", destination: "Resume.", href: "/GeoSauer_Resume.pdf" },
      { text: "And my ", destination: "LinkedIn.", href: "https://www.linkedin.com/in/geosauer/" },
      { text: "Maybe even my ", destination: "GitHub.", href: "https://github.com/GeoSauer" },
    ],
  },

  socialUrls: {
    resumeUrl: "/GeoSauer_Resume.pdf",
    linkedIn: "https://www.linkedin.com/in/geosauer/",
    github: "https://github.com/GeoSauer",
    portfolio: "https://geosauer.com/",
  },
};

export default myData;
