export default {
  first_name: "Tommy",
  last_name: "Deng",
  website: `https://www.tommydeng.com/`,
  education: {
    school: "University of Ottawa",
    degree: "Software Engineering",
    details: [["2017 - 2021", "GPA: 3.9/4.0"]]
  },
  links: [
    {
      href: "mailto:hi@tommydeng.com",
      display: "hi@tommydeng.com",
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
      display: "/in/tommydeng",
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
            "Vue",
            "Next.js",
            "NodeJS",
            "PostgreSQL",
            "Express",
            "Jest",
            "Selenium"
          ],
          ["GCP", "Firebase", "AWS", "Docker"],
          ["Git", "Jira", "Linux", "Bash", "Visual Studio", "Eclipse"]
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
      { name: "cuHacking", date: "2018" },
      { name: "uOttaHack", date: "2018" }
    ]
  },
  interests: {
    title: "Interests",
    content: [
      ["Data Visualization", "Design"],
      ["Project Management", "Web"],
      [],
      ["Penny Boarding", "Cats"],
      ["K-Pop", "Speed Cubing"]
    ]
  },
  work_experience: {
    title: "Work Experience",
    content: [
      {
        title_primary: "Bank of Montreal",
        website: "https://www.bmo.com/",
        title_secondary: "Capital Markets Developer",
        date: "May - Aug 2020",
        details: [
          "Revealed winning metric-driven strategies for increasing revenue by up to 5% by analyzing client/sales data, using <b>Python + Excel</b> visualizations, in a pitch competition",
          "Improved efficiency and profitability of in-house trading tools by developing key trader-requested features using <b>ASP.NET MVC</b> in <b>C#</b>",
          "Reduced Oracle <b>SQL</b> database calls by 75% by implementing server-side caching policy"
        ]
      },
      {
        title_primary: "Kinaxis",
        website: "https://www.kinaxis.com/en",
        title_secondary: "Analytics Software Developer",
        date: "Sep - Dec 2019",
        details: [
          "Dramatically accelerated product timeline to meet target release date by producing above-average >15 user-facing visualization and UI/UX features in <b>React-TypeScript</b>, while following test-driven development using <b>Selenium</b> and <b>Jest</b>",
          "Enhanced product design by integrating feedback from client and domain expert demos"
        ]
      },
      {
        title_primary: "Ross Video",
        website: "https://www.rossvideo.com/",
        title_secondary: "Automation Software Developer",
        date: "Jan - Apr 2019",
        details: [
          "Increased <b>Jenkins</b> test suite execution speeds by >200% and enabled reliable headless operation by overhauling the continuous integration process with Robot Framework",
          "Allowed testing of previously blocked video control and monitoring features by adding key functionalities to internally developed automation libraries using <b>Java</b>"
        ]
      },
      {
        title_primary: "Global Affairs Canada",
        website: "https://www.international.gc.ca/gac-amc/index.aspx?lang=eng",
        title_secondary: "Software QA Analyst",
        date: "May - Aug 2018",
        details: [
          "Surpassed QA targets and achieved 100% coverage for each testing cycle",
          "Trained consultants on toolset usage, testing workflow, and system requirements"
        ]
      }
    ]
  },
  additional_experience: {
    title: "Leadership Experience",
    content: [
      {
        title_primary: "CUSEC",
        website: "https://www.linkedin.com/company/cusec/",
        title_secondary: "Director of Technology & Design",
        date: "Apr 2020 - Present",
        details: [
          "Attracted sponsors and attendees by designing a modern brand identity to reach a broader audience and follow web standards, using <b>Figma</b> and <b>React</b>",
          "Conducted cross-team design and product demos to gather and satisfy user needs"
        ]
      },
      {
        title_primary: "uOttaHack",
        website: "https://www.linkedin.com/company/uottahack/",
        title_secondary: "Developer Team Lead",
        date: "Nov 2019 - Present",
        details: [
          "Served and collected hackathon registration data from thousands of users by effectively collaborating with developers in creating multiple attendee-facing apps using <b>React</b>, <b>Next.js</b>, and <b>Firebase</b> (landing page, application portal, and live schedule)"
        ]
      },
      {
        title_primary: "Inventure Accelerator",
        website: "https://www.linkedin.com/company/inventure-consulting/",
        title_secondary: "Technology & Media Lead",
        date: "Jan 2018 - Dec 2019",
        details: [
          "Raised over $4000, received article mentions, and gathered 80 attendees for a networking event by developing and marketing startup website using <b>Vue</b> and <b>Netlify</b>",
          "Collaborated with Google and Invest Ottawa to create keynote event sponsor video"
        ]
      },
      {
        title_primary: "Ottabotics",
        website: "https://www.linkedin.com/company/ottabotics/",
        title_secondary: "Robotics Competition Team",
        date: "Sep 2017 - Dec 2018",
        details: [
          "Saved weeks of manual work by generating photorealistic road imagery renderings for autonomous vehicle training data/simulation using <b>Blender</b>, <b>Python</b>, and <b>OpenCV</b>"
        ]
      }
    ]
  },
  projects: {
    title: "Projects",
    content: [
      {
        title_primary: "Life's Charge Visualization",
        website:
          "https://www.reddit.com/r/dataisbeautiful/comments/6ry4dz/lifes_charge_a_finite_existence_demonstrated/",
        title_secondary: "",
        date: "Aug 2017",
        details: [
          "Received over 100,000 views in a popular data visualization group by creating an original animation, representing a typical human lifespan, using CImg in <b>C++</b>"
        ]
      },
      {
        title_primary: "Potato Simulator",
        website: "https://www.tommydeng.com/projects/potato-simulator/",
        title_secondary: "",
        date: "Jun 2016",
        details: [
          "Won award out of >50 people for building an interactive physics-based <b>Unity 3D</b> game in <b>C#</b> about a personified potato roaming an open world"
        ]
      }
    ]
  },
  footer_message: undefined
};
