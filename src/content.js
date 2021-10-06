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
        category: "Teamwork",
        groups: [
          [
            "Communication",
            "&nbsp;&nbsp;&nbsp;&nbsp;Agile",
            "Problem-solving",
            "&nbsp;&nbsp;&nbsp;&nbsp;Ownership",
            "User-centered",
            "&nbsp;&nbsp;&nbsp;&nbsp;Inventive"
          ]
        ]
      },
      {
        category: "Languages",
        groups: [
          ["Python", "Java", "C++", "JavaScript", "TypeScript", "HTML/CSS"]
        ]
      },
      {
        category: "Technologies",
        groups: [
          ["React", "Vue", "Next.js", "NodeJS", "PostgreSQL", "Express"],
          ["GCP", "Firebase", "AWS", "Docker"],
          ["Git", "Jira", "Linux", "Bash", "Visual Studio", "Figma"]
        ]
      }
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
        title_primary: "Amazon Web Services (AWS)",
        website: "https://aws.amazon.com/",
        title_secondary: "SDE Intern",
        date: "May - Aug 2021",
        details: [
          "Enhanced discoverability of cloud resources by implementing metadata additions across <b>Lambda</b> API, <b>CloudFormation</b>, and <b>React UI</b> in <b>Java</b> and <b>TypeScript</b>",
          "Enabled advanced querying and 10x faster search times by replicating database to <b>Elasticsearch</b> using <b>DynamoDB Streams</b>, <b>SQS</b>, and <b>Lambda</b>"
        ]
      },
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
          "Dramatically accelerated product timeline to meet release by developing above-average >15 user-facing visualization and UI/UX features in <b>React</b>, <b>TypeScript</b>, <b>D3.js</b>, and <b>Cytoscape</b> while following test-driven development using <b>Selenium</b> and <b>Jest</b>",
          "Enhanced product design by integrating feedback from client and domain experts"
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
      }
    ]
  },
  additional_experience: {
    title: "Leadership Experience",
    content: [
      {
        title_primary: "CUSEC",
        website: "https://2021.cusec.net/",
        title_secondary: "Director of Technology & Design",
        date: "Apr 2020 - Jan 2021",
        details: [
          "Attracted sponsors and attendees by designing a modern brand identity to reach an international audience of >1000 users, using <b>Figma</b>, <b>Next.js</b>, and <b>Chakra UI</b>"
        ]
      },
      {
        title_primary: "uOttaHack",
        website: "https://2021.uottahack.ca/",
        title_secondary: "Developer Team Lead",
        date: "Nov 2019 - Feb 2021",
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
    title: "Personal Projects",
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
