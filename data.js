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
      imageUrl: "/avatar.png",
    },
    {
      title: "Geortfolio",
      link: "https://github.com/GeoSauer/geortfolio-next",
      imageUrl: "/avatar.png",
    },
    {
      title: "Carpe DnDiem",
      link: "https://github.com/GeoSauer/carpe-dnDiem",
      imageUrl: "/avatar.png",
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
  experience: [{ title: "", company: "", year: "", companyUrl: "", desc: "" }],
  resumeUrl: "",
  socialUrls: {
    linkedIn: "https://www.linkedin.com/in/geosauer/",
    github: "https://github.com/GeoSauer",
    portfolio: "https://geosauer.com/",
  },
};

export default myData;
