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
  link?: string;
  repo?: string;
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
  designation: "Software Engineer",
  avatarUrl: "/avatar.png",
  email: "geo.sauer89@gmail.com",
  address: "Loveland, Colorado, USA",
  colors: ["#F4743B", "#55c1FF", "#5438DC", "#32E875"],
  descriptors: ["Engineer.", "Sculptor.", "Maker.", "Nerd."],

  featuredProject: {
    title: "ResiliencePoint",
    link: "https://rp.hazadapt.com/",
    imageUrl: "/resilience-point.png",
  },

  about: {
    title:
      "I'm a Senior Software Engineer at HazAdapt, building accessible, data-rich products that turn complex information into clear, useful experiences. I bring a frontend-first perspective to full-stack work and care about the details that make software intuitive, reliable, and maintainable.",
    desc: [
      {
        title: "What I do.",
        body: [
          "At HazAdapt, I build and evolve production web and mobile products, working across React and TypeScript interfaces, Node.js APIs, data visualization, and the systems behind them.",
          "After taking on technical leadership across three production applications, I was promoted to Senior Software Engineer. I help guide architecture and delivery while staying hands-on with the code.",
          "I care about accessibility, performance, and thoughtful user experience as part of how a product works, not as polish added at the end.",
        ],
      },

      {
        title: "What shaped me.",
        body: [
          "Before software, I studied bronze sculpture and spent three and a half years in the bronze industry. That work taught me patience, precision, and how to turn complex processes into tangible results.",
          "I found software engineering in 2022. The medium changed, but the part I love stayed the same: learning how a system works, solving a real problem, and making something people can use.",
          "Mentoring aspiring developers has been another meaningful part of my journey. I volunteered with Code the Dream to support people as they built their skills.",
        ],
      },

      {
        title: "Outside of work.",
        body: [
          "I'm happiest outside along the Front Range: mountain biking, paddle boarding, or exploring on my Royal Enfield Himalayan.",
          "At home, I'm usually playing a video or tabletop game, tinkering with my 3D printer, or finding my next thing to learn.",
          "Making has always been a through line for me, whether that's software, sculpture, or something I haven't figured out how to build yet.",
        ],
      },
    ],
		
    currentProject: "this very portfolio!",
    currentProjectUrl: "https://github.com/GeoSauer/geortfolio-next",
		
    techStack: [
			{
				name: "React.js",
				imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			},
			{
				name: "TypeScript",
				imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
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
				imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
			},
      {
        name: "JavaScript",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
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
        name: "Next.js",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Discord.js",
        imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg",
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
    ],
  },

  projects: [
		{
			title: "ResiliencePoint",
			link: "https://rp.hazadapt.com/",
			// repo: "",
			// gifUrl: "/gmm-walkthrough.webp",
			imageUrl: "/resilience-point.png",
		},
    {
      title: "HazAdapt",
      link: "https://www.hazadapt.com/",
      // repo: "",
      // gifUrl: "/gmm-walkthrough.webp",
      imageUrl: "/hazadapt.png",
    },
    {
      title: "HazAdapt (Mobile App)",
      link: "https://get.hazadapt.com/",
      // repo: "https://github.com/GeoSauer/nextjs-decapcms-template",
      // gifUrl: "/gmm-walkthrough.webp",
      imageUrl: "/hazadapt-mobile.png",
    },
    {
      title: "Warts and All Therapy",
      link: "https://wartsandalltherapy.com/",
      // repo: "",
      // gifUrl: "/gmm-walkthrough.webp",
      imageUrl: "/warts-and-all-therapy.png",
    },
    {
      title: "Next.js + DecapCMS Template",
      link: "https://nextjs-decapcms-template.netlify.app/",
      repo: "https://github.com/GeoSauer/nextjs-decapcms-template",
      // gifUrl: "/gmm-walkthrough.webp",
      imageUrl: "/nextjs-decapcms-template.png",
    },
    {
      title: "Bootcampr",
      // link: "https://landing.bootcampr.io/",
      // repo: "",
      // gifUrl: "/gmm-walkthrough.webp",
      imageUrl: "/bootcampr.png",
    },
    {
      title: "Grimoire for the Modern Mage",
      // link: "https://grimoire-for-the-modern-mage.netlify.app/welcome",
      repo: "https://github.com/GeoSauer/GMM-frontend",
      // gifUrl: "/gmm-walkthrough.webp",
      imageUrl: "/gmm.png",
    },
    // {
    //   title: "Geortfolio",
    //   link: "https://www.geosauer.com/",
    //   repo: "https://github.com/GeoSauer/geortfolio-next",
    //   // gifUrl: "/avatar.png",
    //   imageUrl: "/geortfolio.png",
    // },
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
        "Assumed technical leadership of 3 production applications, expanding from frontend-focused role to include backend development, release management, and team leadership while maintaining production stability.",
        "Extended Node.js/Express backend services by implementing new API routes, middleware for authentication and error handling, and automated reporting systems via cron jobs.",
        "Managed a two-engineer team, conducting code reviews, prioritizing technical roadmap, and making architectural decisions to balance feature delivery with technical debt.",
        "Proposed, designed, and executed an expanded insight view for analytics data that reduced API overhead by 90% by refactoring data fetching architecture and implementing a fullscreen overlay pattern that eliminated redundant calls and enabled instant insight switching.",
        "Built analytics features using React, TypeScript, Chart.js, and Mapbox GL, delivering both assigned work and self-initiated features from concept to production.",
        "Implemented and iterated on core product flows including site navigation, subscription billing, and insight views, improving conversion rates and system performance.",
        "Maintained and improved accessibility across web (React/MUI) and mobile (React Native) apps, ensuring WCAG compliance and inclusive user experiences.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Collabify",
      year: "2023",
      companyUrl: "https://bootcampr.io/",
      desc: [
        "Built responsive UI components for a React and TypeScript MVP, translating Figma designs into polished, production-ready interfaces.",
        "Helped establish a reusable component library using MUI and SCSS, reducing code duplication and improving team velocity.",
        "Conducted accessibility audits using Lighthouse and implemented WCAG-compliant improvements, raising scores by 30% and improving screen reader navigation.",
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
        "Provided one-on-one mentorship to React students, addressing blockers and knowledge gaps through tailored guidance and live support.",
        "Delivered weekly code reviews for 7+ mentees, oﬀering actionable feedback to improve code quality, reinforce engineering fundamentals, and encourage best practices.",
        "Diagnosed and resolved technical issues and misunderstandings both asynchronously and during live sessions, helping students make consistent progress in React.",
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
      desc: ["Catch me running around in a kilt swinging my seax at Northern Colorado Medieval Festivals."],
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
      { text: "Check out my ", destination: "Resume.", href: "/Geo-Sauer-Resume.pdf" },
      { text: "And my ", destination: "LinkedIn.", href: "https://www.linkedin.com/in/geosauer/" },
      { text: "Maybe even my ", destination: "GitHub.", href: "https://github.com/GeoSauer" },
    ],
  },

  socialUrls: {
    resumeUrl: "/Geo-Sauer-Resume.pdf",
    linkedIn: "https://www.linkedin.com/in/geosauer/",
    github: "https://github.com/GeoSauer",
    portfolio: "https://geosauer.com/",
  },
};

export default myData;
