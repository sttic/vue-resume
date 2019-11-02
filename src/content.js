export default {
  first_name: "Tommy",
  last_name: "Deng",
  website: `https://www.tommydeng.com/`,
  education: {
    school: "University of Ottawa",
    degree: "BASc Software Engineering",
    details: [["2017 - 2022", "GPA: 3.9/4.0"]]
  },
  links: [
    {
      href: "mailto:contact@tommydeng.com",
      display: "contact@tommydeng.com",
      icon: "envelope"
    },
    {
      href: "https://www.tommydeng.com/",
      display: "tommydeng.com",
      icon: "globe-americas"
    },
    {
      href: "https://github.com/sttic",
      display: "github.com/sttic",
      icon: ["fab", "github"]
    },
    {
      href: "https://www.linkedin.com/in/tommydeng/",
      display: "linkedin.com/in/tommydeng",
      icon: ["fab", "linkedin-in"]
    }
  ],
  skills: {
    title: "Skills",
    content: [
      {
        category: "Languages",
        groups: [["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"]]
      },
      {
        category: "Technologies",
        groups: [
          [
            "React",
            "React Native",
            "Vue",
            "NodeJS",
            "Express",
            "MongoDB",
            "Jest",
            "Selenium"
          ],
          ["GCP", "Firebase", "AWS", "Heroku"],
          [
            "Git",
            "SVN",
            "Jira",
            "Docker",
            "Linux",
            "Bash",
            "Eclipse",
            "Visual Studio"
          ]
        ]
      },
      { category: "Development", groups: [["Agile", "CI", "TDD", "UML"]] }
    ]
  },
  hackathons: {
    title: "Hackathons",
    content: [
      { name: "Hack the North", date: "2019" },
      { name: "Hack The 6ix", date: "2019" },
      { name: "uOttaHack", date: "2019" },
      { name: "ConUHacks", date: "2019" },
      { name: "Hack Western", date: "2018" },
      { name: "Hack the North", date: "2018" },
      { name: "CU Hacks", date: "2018" },
      { name: "uOttaHack", date: "2018" }
    ]
  },
  interests: {
    title: "Interests",
    content: [
      ["Project Management"],
      ["Machine Learning", "Data Science"],
      ["Web Development", "Design"]
    ]
  },
  work_experience: {
    title: "Work Experience",
    content: [
      {
        title_primary: "Kinaxis",
        website: "https://www.kinaxis.com/en",
        title_secondary: "Analytics Software Developer",
        date: "Sep - Dec 2019",
        details: [
          "Simplified and reduced a <b>React</b> / <b>TypeScript</b> module's lines of code by ~50%, while adding functionality, by redesigning algorithm to use stack and hash-map structure",
          "Implemented dynamic color algorithm based on W3C web standards equations with <b>D3</b> and <b>Cytoscape</b> to provide optimal visibility of network visualization nodes",
          "Followed test-driven development using <b>Selenium</b> and <b>Jest</b> to produce effective front-end visualization features, UI enhancements, and bug fixes",
          "Collaborated with agile team members and other stakeholders to conceptualize and prototype next generation product capabilities"
        ]
      },
      {
        title_primary: "Ross Video",
        website: "https://www.rossvideo.com/",
        title_secondary: "Automation Software Developer",
        date: "Jan - Apr 2019",
        details: [
          "Streamlined testing of camera control system with Robot Framework to increase <b>Jenkins</b> test suite execution speed by >200% and enable headless operation",
          "Added functionalities to internally developed automation libraries using <b>Java</b> to allow testing of previously blocked video control and monitoring features",
          "Provided training on automation framework usage for <b>Swing</b> / <b>Eclipse</b> applications",
          "Created automated <b>Python</b> and <b>Bash</b> environment setup and utility scripts"
        ]
      },
      {
        title_primary: "Global Affairs Canada",
        website: "https://www.international.gc.ca/gac-amc/index.aspx?lang=eng",
        title_secondary: "Software QA Analyst",
        date: "May - Aug 2018",
        details: [
          "Interpreted system and navigation diagrams for the Export Import Control System",
          "Achieved 100% coverage for each testing cycle with use of Microsoft Test Manager",
          "Trained consultants on toolset usage, testing workflow, and system requirements"
        ]
      }
    ]
  },
  additional_experience: {
    title: "Additional Experience",
    content: [
      {
        title_primary: "Inventure Accelerator",
        website: "https://meetinventure.com/",
        title_secondary: "Front-end Developer",
        date: "Jan 2018 - Present",
        details: [
          "Contributed to raising over $4000, receiving article mentions, and gathering 80 attendees for an event by developing startup website using <b>Vue</b> and <b>Netlify</b>",
          "Collaborated with Google and Invest Ottawa to create event sponsor video"
        ]
      },
      {
        title_primary: "Ottabotics",
        website: "https://ca.linkedin.com/company/ottabotics",
        title_secondary: "Robotics Competition Team",
        date: "Sep 2017 - Dec 2018",
        details: [
          "Automated Blender with <b>Python</b> to render photorealistic videos of racing tracks for use as training data and driving simulation for autonomous vehicle",
          "Created <b>OpenCV</b> system to detect traffic lights and undistort wide-angle images",
          "Developed compression pipeline to reduce live video streaming bandwidth by 20%"
        ]
      }
    ]
  },
  projects: {
    title: "Projects",
    content: [
      {
        title_primary: "Bark Buddies",
        website: "https://github.com/viviandiec/barkbuddies",
        title_secondary: "",
        date: "May - Jul 2019",
        details: [
          "Collaborated with team to build mobile app that connects dogs to other dogs using <b>React Native</b> to achieve a high-fidelity prototype with effective UI/UX design",
          "Implemented field response, Tinder-style swiping, and persistent messaging system"
        ]
      },
      {
        title_primary: "Life's Charge Visualization",
        website: "https://www.tommydeng.com/projects/lifes-charge/",
        title_secondary: "",
        date: "Aug 2017",
        details: [
          "Gathered over 100,000 views in a popular data visualization group through generating animated graphic representing a typical lifespan using CImg in <b>C++</b>",
          "Ported concept to dynamic website that generates customized images using PixiJS"
        ]
      },
      {
        title_primary: "Potato Simulator",
        website: "https://www.tommydeng.com/projects/potato-simulator/",
        title_secondary: "",
        date: "Jun 2016",
        details: [
          "Won award out of >50 people for building an interactive physics-based <b>Unity</b> 3D game in <b>C#</b> about a personified potato roaming an open world"
        ]
      }
    ]
  },
  footer_message: `Please see <a href="https://www.tommydeng.com/">tommydeng.com</a> for projects`
};
