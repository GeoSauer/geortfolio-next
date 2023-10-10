const myData = {
  name: "Geo Sauer",
  githubUsername: "GeoSauer",
  designation: "Full-Stack Engineer",
  avatarUrl: "/avatar.png",
  email: "geosauer89@gmail.com",
  address: "Loveland, Colorado, USA",
  colors: ["#F4743B", "#55c1FF", "#5438DC", "#32E875"],
  descriptors: ["Engineer.", "Sculptor.", "Maker.", "Nerd."],

  featuredProject: {
    title: "Grimoire for the Modern Mage",
    link: "https://grimoire-for-the-modern-mage.netlify.app/welcome",
    imageUrl: "/gmm-walkthrough.webp",
  },

  projects: [
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
    {
      title: "Carpe DnDiem",
      link: "https://github.com/GeoSauer/carpe-dnDiem",
      repo: "https://github.com/GeoSauer/carpe-dnDiem",
      // gifUrl: "/avatar.png",
      imageUrl: "/carpedndiem.png",
    },
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
    {
      title: "for (dummy of dummies)",
      link: "https://dummy-of-dummies.netlify.app/auth/?redirectUrl=https%3A%2F%2Fdummy-of-dummies.netlify.app%2F",
      repo: "https://github.com/GeoSauer/dummy-of-dummies",
      // gifUrl: "/avatar.png",
      imageUrl: "/for(dummyofdummies).png",
    },
  ],

  about: {
    title:
      "I'm a software engineer that loves building responsive and accessible web-based products with clean, verbose code.",
    desc: [
      `I recently launched Grimoire for the Modern Mage (linked in my resume and pinned on my GitHub) as a service to the Dungeons and Dragons 5e community. It's a full-stack companion app for magic users that I developed with the PERN stack. The frontend was built with React and Chakra UI and features an account/character creation UI for users to store multiple characters in a PostgreSQL database. The backend is a RESTful API developed with Node, Express, and PostgreSQL that allows users to maintain characters, automatically update character stats on level-up, and accurately track spell lists and spell slots. 
		`,
      `In my original design I envisioned the app as being an educational supplement to help newer players, but as development was underway I realized that there were too many variables regarding character progression for me to address in my production timeline. I reevaluated my 'must haves' and adjusted my scope to a much less restrictive but equally functional MVP, which is what I then completed and released. I already have an outlined plan for v2 that will be very helpful for newer players as they progress through their campaign. `,
      `As an engineer with a non-traditional background who took the bootcamp approach to pivot into tech (in what led into an extremely difficult year to do so), one of the core reasons I made the transition was so that my labor could go towards tangible good. I believe in accessible, convenient, and cost-effective healthcare programs for all and I would love to contribute to their facilitation. The opportunity for thorough mentorship is very appealing because although I do produce verbose, clean, tested code that's as DRY as possible, I strive to grow and learn as an engineer and as a person. I'm a self-starter who can happily work alone, but I also value collaboration and empathetic communication across departments and disciplines.`,
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

  experience: [
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
    title:
      "I'm currently on the lookout for new opportunities and would love to chat about how I can help your team succeed!",
  },

  socialUrls: {
    resumeUrl: "",
    linkedIn: "https://www.linkedin.com/in/geosauer/",
    github: "https://github.com/GeoSauer",
    portfolio: "https://geosauer.com/",
  },
};

export default myData;
