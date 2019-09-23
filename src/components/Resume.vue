<template>
  <div id="resume">
    <div class="container">
      <div class="row">
        <div class="column left">
          <h1 id="name">
            <a href="http://tommydeng.com/">{{ firstName }} {{ lastName }}</a>
          </h1>

          <!-- LINKS -->
          <section id="links">
            <ul>
              <li v-for="item in links" :key="JSON.stringify(item)">
                <a :href="item.href">
                  <font-awesome-icon class="icon" :icon="item.icon" />
                  {{ item.display }}
                </a>
              </li>
            </ul>
          </section>

          <!-- EDUCATION -->
          <section id="education">
            <h2>
              <font-awesome-icon class="section-icon" icon="university" />Education
              <div class="section-line-left" />
            </h2>
            <h4>{{ education.school }}</h4>
            <h5>{{ education.degree }}</h5>
            <p>
              {{ education.progress }} - Expected {{ education.expected }}
              <br />
              GPA: {{ education.gpa }}
            </p>
          </section>

          <!-- SKILLS -->
          <section id="skills">
            <h2>
              <font-awesome-icon class="section-icon" icon="tools" />Skills
              <div class="section-line-left" />
            </h2>
            <div v-for="(skillSet, category) in skills" :key="JSON.stringify(skillSet)">
              <h5 style="text-transform: capitalize;">{{ category }}</h5>
              <p v-for="line in skillSet" :key="JSON.stringify(line)">
                <span v-if="line.length !== 0">
                  <span v-for="(skill, index) in line" :key="index">
                    <span v-if="index != 0">&bull;</span>
                    {{ skill }}
                  </span>
                </span>
                <span v-else>
                  <br />
                </span>
              </p>
            </div>
          </section>

          <!-- HACKATHONS -->
          <section id="hackathons">
            <h2>
              <font-awesome-icon class="section-icon" icon="coffee" />Hackathons
              <div class="section-line-left" />
            </h2>
            <ul>
              <li v-for="item in hackathons" :key="JSON.stringify(item)">
                {{ item.date }}
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </section>

          <!-- AWARDS -->
          <section id="awards">
            <h2>
              <font-awesome-icon class="section-icon" icon="award" />Awards
              <div class="section-line-left" />
            </h2>
            <ul>
              <li v-for="item in awards" :key="JSON.stringify(item)">{{ item.name }}</li>
            </ul>
          </section>

          <!-- INTERESTS -->
          <section id="interests">
            <h2>
              <font-awesome-icon class="section-icon" icon="lightbulb" />Interests
              <div class="section-line-left" />
            </h2>
            <p v-for="item in interests" :key="JSON.stringify(item)">
              <span v-for="(interest, index) in item" :key="index">
                <span v-if="index != 0">&bull;</span>
                {{ interest }}
              </span>
            </p>
          </section>
        </div>

        <div class="column right">
          <!-- WORK EXPERIENCE -->
          <section id="work">
            <h2>
              <font-awesome-icon class="section-icon" icon="briefcase" />Work Experience
              <div class="section-line-right" />
            </h2>
            <div v-for="item in work_experience" :key="JSON.stringify(item)">
              <h3>
                <a v-if="item.website" :href="item.website">{{ item.name }}</a>
                <span v-else>{{ item.name }}</span>
                <span class="time-location">{{ item.location }}</span>
              </h3>
              <div class="position">
                <h4>
                  {{ item.position }}
                  <span class="time-location">{{ item.start }} – {{ item.end }}</span>
                </h4>
              </div>
              <ul>
                <li v-for="point in item.details" :key="point">{{ point }}</li>
              </ul>
            </div>
          </section>

          <!-- ADDITIONAL EXPERIENCE -->
          <section id="additional">
            <h2>
              <font-awesome-icon class="section-icon" icon="users" />Additional Experience
              <div class="section-line-right" />
            </h2>
            <div v-for="item in additional_experience" :key="JSON.stringify(item)">
              <h3>
                <a v-if="item.website" :href="item.website">{{ item.name }}</a>
                <span v-else>{{ item.name }}</span>
                <span class="time-location">{{ item.location }}</span>
              </h3>
              <div class="position">
                <h4>
                  {{ item.position }}
                  <span class="time-location">{{ item.start }} – {{ item.end }}</span>
                </h4>
              </div>
              <ul>
                <li id="rawhtml" v-for="point in item.details" :key="point" v-html="point"></li>
              </ul>
            </div>
          </section>

          <!-- PROJECTS -->
          <section id="projects">
            <h2>
              <font-awesome-icon class="section-icon" icon="laptop-code" />Projects
              <div class="section-line-right" />
            </h2>
            <div class="project" v-for="item in projects" :key="JSON.stringify(item)">
              <h3>
                <a v-if="item.link" :href="item.link">{{ item.name }}</a>
                <span v-else>{{ item.name }}</span>
                <span class="project-tag">{{ item.tag }}</span>
                <span class="time-location">{{ item.date }}</span>
              </h3>
              <ul>
                <li v-for="point in item.details" :key="point">{{ point }}</li>
              </ul>
            </div>
          </section>

          <div class="footer">
            <div>
              Please see
              <a href="https://www.tommydeng.com/">tommydeng.com</a> for projects
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  props: {},
  data() {
    return {
      firstName: "Tommy",
      lastName: "Deng",
      education: {
        school: "University of Ottawa",
        degree: "BASc Software Engineering",
        progress: "3rd Year",
        expected: "Jun 2022",
        gpa: "3.9/4.0 (Dean's Honour List)"
      },
      links: [
        {
          href: "mailto:contact@tommydeng.com",
          display: "contact@tommydeng.com",
          icon: "envelope"
        },
        {
          href: "http://tommydeng.com/",
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
        languages: [["Python", "JavaScript", "Java"]],
        technologies: [
          ["GCP", "AWS", "Azure"],
          ["Vue", "React", "React Native"],
          ["NodeJS", "Express", "MongoDB"],
          ["Django", "Flask", "Firebase"],
          [],
          ["HTML", "CSS", "Bootstrap"],
          ["Virtual Machines", "Linux", "Bash"],
          ["Git", "SVN", "Jira", "GitHub"],
          ["VS Code", "Visual Studio", "Eclipse"]
        ],
        development: [
          ["Agile", "CI", "VC", "UML"],
          ["Data Structures & Algorithms"],
          ["Object Oriented Design"]
        ]
      },
      hackathons: [
        { name: "Hack the North", date: "2019" },
        { name: "Hack The 6ix", date: "2019" },
        { name: "UOttaHack", date: "2019" },
        { name: "ConUHacks", date: "2019" },
        { name: "Hack Western", date: "2018" },
        { name: "Hack the North", date: "2018" },
        { name: "CU Hacks", date: "2018" },
        { name: "UOttaHack", date: "2018" }
      ],
      awards: [
        { name: "Merit Scholarship (×3)" },
        { name: "$4000 Admission Scholarship" }
      ],
      interests: [
        ["Project Management"],
        ["Machine Learning", "Data Science"],
        ["Web Development"]
      ],
      work_experience: [
        {
          name: "Kinaxis",
          website: "https://www.kinaxis.com/en",
          position: "Analytics Software Developer",
          start: "Sept 2019",
          end: "Dec 2019",
          location: "Ottawa, ON",
          details: [
            "Implemented dynamic color algorithm based on W3C web standards equations to provide optimal visibility of network visualization node shape icons",
            "Built performant and interactive visualizations using D3, Highcharts, and Viz.js",
            "Worked closely with senior developers on feature development and bug fixes",
            "Collaborated with agile team members and other stakeholders to conceptualize and prototype the product's next-gen visualization capabilities"
          ]
        },
        {
          name: "Ross Video",
          website: "https://www.rossvideo.com/",
          position: "Automation Software Developer | R&D Operations",
          start: "Jan 2019",
          end: "Apr 2019",
          location: "Ottawa, ON",
          details: [
            "Streamlined testing of camera control system with Robot Framework overhaul to provide a >2 times speed improvement in test execution",
            "Added functionalities to internally developed Java-based automation libraries to allow testing of previously blocked video control and monitoring features",
            "Provided training on automation framework usage for Swing/Eclipse applications",
            "Created and maintained regularly used environment setup and utility scripts"
          ]
        },
        {
          name: "Global Affairs Canada",
          website:
            "https://www.international.gc.ca/gac-amc/index.aspx?lang=eng",
          position: "Software Quality Control Analyst",
          start: "May 2018",
          end: "Aug 2018",
          location: "Ottawa, ON",
          details: [
            "Read and followed system diagrams for the Export Import Control System project",
            "Used Microsoft Test Manager and Team Foundation Server for executing quality control tests and achieved 100% coverage for each testing cycle",
            "Trained consultants on toolset usage, testing workflow, and system requirements"
          ]
        }
      ],
      additional_experience: [
        {
          name: "Inventure Accelerator",
          website: "https://meetinventure.com/",
          position: "Front-end Developer & Media Producer",
          start: "Jan 2018",
          end: "Present",
          location: "Ottawa, ON",
          details: [
            `Designed and deployed startup website (<a href="https://meetinventure.com/">meetinventure.com</a>) using Vue and Netlify to promote sponsorship, event outreach, and media attention`,
            "Organized the four-hour, 80 attendee, SparkFest 2018 event with Inventure team",
            "Created SparkFest sponsor video featuring Google and Invest Ottawa"
          ]
        },
        {
          name: "Ottabotics Robot Racing",
          website: "https://ca.linkedin.com/company/ottabotics",
          position: "Robotics Competition Team",
          start: "Sept 2017",
          end: "Dec 2018",
          location: "Ottawa, ON",
          details: [
            "Automated Blender with Python to render photorealistic videos of racing tracks for use as training data and driving simulation for autonomous vehicle",
            "Created vision system to detect traffic lights and undistort wide-angle images",
            "Developed compression system to reduce bandwidth usage in video streaming"
          ]
        }
      ],
      projects: [
        {
          name: "Bark Buddies",
          link: "https://github.com/viviandiec/barkbuddies",
          tag: "UI Design Course Group Project",
          date: "Summer 2019",
          details: [
            "Collaborated with team to build mobile app that connects dogs to other dogs",
            "Used React Native to create a high-fidelity prototype with navigation to all screens",
            "Implemented field response, Tinder-style swiping, and persistent messaging system"
          ]
        },
        {
          name: "Life's Charge Visualization",
          link: "https://www.tommydeng.com/projects/lifes-charge/",
          tag: "Personal Project",
          date: "Aug 2017",
          details: [
            "Generated animated graphic representing a typical lifespan using CImg in C++",
            "Gathered over 100,000 views after posting project in data visualization group",
            "Ported concept to dynamic website that generates customized images using PixiJS"
          ]
        },
        {
          name: "Potato Simulator",
          link: "https://www.tommydeng.com/projects/potato-simulator/",
          tag: "Computer Studies Course Summative",
          date: "Jun 2016",
          details: [
            "Designed Unity 3D game in C# about a personified potato roaming the world",
            "Won subject award for the course as a result of the project and related work"
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

#resume {
  background: white;
  display: flex;
}

.container {
  display: flex;
  overflow: hidden;
}

.row {
  display: flex;
}

.column {
  float: left;
}

.left {
  width: 30%;
  background-color: rgba(0, 122, 204, 0.05);
  padding-top: 0.4in;
  padding-left: 0.4in;
  /* excess padding at bottom to fill otherwise white space with gray background on pdf export */
  /* need to limit pdf to 1 page when exporting */
  padding-bottom: 100%;
}

.right {
  width: 70%;
  padding: 0.4in 0.4in 0 0.25in;
}

.footer {
  text-align: center;
  font-family: "Lato";
  font-weight: 300;
}

.footer a {
  font-weight: 400;
}

h1,
h2 {
  font-family: "Lato";
  text-transform: uppercase;
}

h1 {
  font-weight: 200;
  font-size: 25pt;
  margin-bottom: 0.1in;
}

#name {
  margin-bottom: 0.2in;
}

#name a {
  font-weight: 400;
  letter-spacing: 4px;
  color: rgb(0, 122, 204);
}

h2 {
  font-weight: 400;
  font-size: 15pt;
  color: rgb(0, 122, 204);
}

h3 {
  font-weight: 700;
  font-size: 12pt;
  letter-spacing: 0.3px;
}

h4,
.position {
  font-family: "Raleway";
  font-size: 12pt;
  font-weight: 600;
}

.position h4 {
  font-size: 10pt;
  letter-spacing: 0.4px;
}

.position span {
  letter-spacing: initial;
}

h5,
.project-tag,
.time-location {
  font-family: "Raleway";
  font-size: 10pt;
  color: dimgray;
  text-transform: initial;
}

.time-location {
  float: right;
}

.project-tag {
  margin-left: 6px;
}

#resume >>> a {
  transition: 0.5s;
}

#resume >>> a:hover {
  color: #4fc08d;
  transition: 0.2s;
}

p {
  font-family: "Lato";
  font-weight: 300;
}

li {
  font-family: "Lato";
  font-weight: 300;
  list-style-type: none;
  position: relative;
}

p,
li {
  font-size: 10pt;
}

.right li {
  margin-left: 24px;
}

.right li::before {
  content: "\2022";
  position: absolute;
  left: -0.8em;
  font-size: 1.1em;
}

.header a {
  font-weight: inherit;
  color: inherit;
}

section {
  margin-bottom: 12px;
}

#links li {
  padding: 1px 0;
}

.section-icon {
  padding-right: 6px;
  color: black;
}

#links .icon {
  padding-right: 6px;
  font-size: 18px;
}

.section-line-left {
  margin-right: 0.4in;
  height: 2px;
  margin-top: 2px;
  margin-bottom: 4px;
  border-radius: 1px;
  background-color: rgba(53, 73, 94, 0.25);
}

.section-line-right {
  height: 2px;
  margin-top: 2px;
  margin-bottom: 4px;
  border-radius: 1px;
  background-color: rgba(53, 73, 94, 0.25);
}

#skills > div,
#work > div,
#additional > div {
  margin-bottom: 16px;
}

#projects > .project {
  margin-bottom: 12px;
}

#hackathons li {
  margin-left: 8px;
}

#hackathons span {
  margin-left: 16px;
}
</style>

<style>
#resume li > a {
  font-weight: 400;
}

#resume ::selection {
  background: #ccccff;
}
</style>
