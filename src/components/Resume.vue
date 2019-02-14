<template>
  <div id="resume">
    <div class="container">
      <div class="header">
        <h1>
          <a href="http://tommydeng.com/">{{ firstName }} {{ lastName }}</a>
        </h1>
      </div>
      <div class="row">
        <div class="column left">
          <!-- EDUCATION -->
          <section id="education">
            <h2>Education</h2>
            <h3>{{ education.school }}</h3>
            <h4>{{ education.degree }}</h4>
            <h5>
              {{ education.progress }} - Expected {{ education.expected }}
              <br>
              CGPA: {{ education.cgpa }}
            </h5>
          </section>

          <!-- CONTACT -->
          <section id="contact">
            <h2>Contact</h2>
            <ul>
              <li v-for="item in contacts" :key="item">
                <a :href="item.href">{{ item.display }}</a>
              </li>
            </ul>
          </section>

          <!-- LINKS -->
          <section id="links">
            <h2>Links</h2>
            <ul>
              <li v-for="item in links" :key="item">
                <a :href="item.href">{{ item.display }}</a>
              </li>
            </ul>
          </section>

          <!-- SKILLS -->
          <section id="skills">
            <h2>Skills</h2>
            <div v-for="(skillSet, index) in skills" :key="skillSet">
              <h5 style="text-transform: capitalize;">{{ index }}</h5>
              <p v-for="line in skillSet" :key="line">
                <span v-if="line.length != 0">
                  <span v-for="(skill, index) in line" :key="index">
                    <span v-if="index != 0">&bull;</span>
                    {{ skill }}
                  </span>
                </span>
                <span v-else>
                  <br>
                </span>
              </p>
            </div>
          </section>

          <!-- HACKATHONS -->
          <section id="hackathons">
            <h2>Hackathons</h2>
            <ul>
              <li v-for="item in hackathons" :key="item">
                {{ item.date }}
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </section>

          <!-- AWARDS -->
          <section id="awards">
            <h2>Awards</h2>
            <ul>
              <li v-for="item in awards" :key="item">
                {{ item.date }}
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </section>

          <!-- INTERESTS -->
          <section id="interests">
            <h2>Interests</h2>
            <p v-for="item in interests" :key="item">
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
            <h2>Work Experience</h2>
            <div v-for="item in work_experience" :key="item">
              <h3>
                {{ item.name }}
                <span class="position">&nbsp;| {{ item.position }}</span>
              </h3>
              <h5>{{ item.start }} – {{ item.end }} | {{ item.location }}</h5>
              <ul>
                <li v-for="point in item.details" :key="point">{{ point }}</li>
              </ul>
            </div>
          </section>

          <!-- ADDITIONAL EXPERIENCE -->
          <section id="additional">
            <h2>Additional Experience</h2>
            <div v-for="item in additional_experience" :key="item">
              <h3>
                {{ item.name }}
                <span class="position">&nbsp;| {{ item.position }}</span>
              </h3>
              <h5>{{ item.start }} – {{ item.end }} | {{ item.location }}</h5>
              <ul>
                <li id="rawhtml" v-for="point in item.details" :key="point" v-html="point"></li>
              </ul>
            </div>
          </section>

          <!-- PROJECTS -->
          <section id="projects">
            <h2>Projects</h2>
            <div v-for="item in projects" :key="item">
              <h3>
                {{ item.name }}
                <span class="project-tag">&nbsp;{{ item.tag }} | {{ item.date }}</span>
              </h3>
              <ul>
                <li v-for="point in item.details" :key="point">{{ point }}</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <div class="footer">
        <li>
          Please see
          <a href="http://tommydeng.com/">tommydeng.com</a> for projects
        </li>
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
        progress: "2nd Year",
        expected: "Dec 2021",
        cgpa: "9.2/10 (Dean's Honour List)"
      },
      contacts: [
        {
          href: "mailto:contact@tommydeng.com",
          display: "contact@tommydeng.com"
        }
      ],
      links: [
        { href: "http://tommydeng.com/", display: "tommydeng.com" },
        { href: "https://github.com/sttic", display: "github.com/sttic" },
        {
          href: "https://www.linkedin.com/in/tommydeng/",
          display: "linkedin.com/in/tommydeng"
        }
      ],
      skills: {
        languages: [
          ["Python", "Java", "C++", "C", "C#"],
          ["JavaScript", "TypeScript"]
        ],
        libraries: [
          ["OpenCV", "Numpy", "Selenium"],
          ["Keras", "PyAutoGUI", "Pillow"],
          ["Robot Framework"]
        ],
        technologies: [
          ["Vue", "React", "NodeJS", "Express"],
          ["MongoDB", "Laravel", "Django"],
          [],
          ["HTML", "CSS", "LaTeX", "Markdown"],
          ["Virtual Machines", "Linux", "Git"],
          ["VS Code", "Visual Studio", "Eclipse"],
          ["Android Studio", "Unity 3D"]
        ],
        development: [
          ["Agile", "CI", "VC", "UML"],
          ["Data Structures & Algorithms"],
          ["Object Oriented Design"]
        ]
      },
      hackathons: [
        { name: "UOttaHack", date: "2019" },
        { name: "ConUHacks", date: "2019" },
        { name: "Hack Western", date: "2018" },
        { name: "Hack the North", date: "2018" },
        { name: "CU Hacks", date: "2018" },
        { name: "UOttaHack", date: "2018" }
      ],
      awards: [
        { name: "Merit Scholarship", date: "2018" },
        { name: "$4000 Admission Scholarship", date: "2017" }
      ],
      interests: [
        ["Computer Vision", "Data Science"],
        ["Robotics", "Machine Learning"],
        ["Web Development"]
      ],
      work_experience: [
        {
          name: "Ross Video",
          position: "Software Developer",
          start: "Jan 2019",
          end: "Present",
          location: "Ottawa, ON",
          details: [
            "Automated testing of products with Robot Framework and Selenium",
            "Added functionality to internally developed automation tool using Java",
            "Resolved errors in scripts used for launching and monitoring test processes"
          ]
        },
        {
          name: "Global Affairs Canada",
          position: "Software Quality Control",
          start: "May 2018",
          end: "Aug 2018",
          location: "Ottawa, ON",
          details: [
            "Read and followed system design diagrams for the EICS II project",
            "Became proficient in Microsoft Test Manager and Team Foundation Server for executing quality control tests",
            "Trained consultants on toolset usage, testing workflow, and system requirements"
          ]
        }
      ],
      additional_experience: [
        {
          name: "Inventure Accelerator",
          position: "Front-end Developer",
          start: "Jan 2018",
          end: "Present",
          location: "Ottawa, ON",
          details: [
            `Designed and deployed company website (<a href="https://meetinventure.com/">meetinventure.com</a>) using Vue.js`,
            "Organized the four-hour SparkFest 2018 event with the Inventure team",
            "Created SparkFest sponsor video featuring Google and Invest Ottawa"
          ]
        },
        {
          name: "Ottabotics Robot Racing",
          position: "Robotics Competition Team",
          start: "Sept 2017",
          end: "Present",
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
          name: "Insta Eats",
          tag: "Hack Western, London",
          date: "Nov 2018",
          details: [
            "Developed web service that provides tailored restaurant recommendations based on the user’s Instagram photos using React and Google Vision API"
          ]
        },
        {
          name: "Get A Goose",
          tag: "Hack the North, Waterloo",
          date: "Sept 2018",
          details: [
            "Constructed speech-to-text captioning system that broadcasts parsed speech from Android app to website using Google Voice API and Firebase database"
          ]
        },
        {
          name: "Image Classifier",
          tag: "Personal Project",
          date: "Sept 2018",
          details: [
            "Applied Keras TensorFlow API to design and train a neural network to classify images of handwritten digits with >98% accuracy"
          ]
        },
        {
          name: "Object Detection",
          tag: "Personal Project",
          date: "July 2018",
          details: [
            "Adapted YOLOv3 object detection system to localize common road objects"
          ]
        },
        {
          name: "HQ Trivia Bot",
          tag: "Personal Project",
          date: "May 2018",
          details: [
            'Automated Google search and parsing for "HQ" Trivia using Selenium'
          ]
        },
        {
          name: "Tic Tac Voice",
          tag: "UOttaHack, Ottawa",
          date: "Feb 2018",
          details: [
            "Built an accessibility mobile app aimed towards the visually impaired using Android Studio and Google Voice API"
          ]
        },
        {
          name: "Life's Charge Visualization",
          tag: "Personal Project",
          date: "Aug 2017",
          details: [
            "Generated animated graphic representing a typical lifespan using CImg in C++",
            "Gathered over 100,000 views after posting project in data visualization group"
          ]
        },
        {
          name: "Potato Simulator",
          tag: "ICS3U",
          date: "Jun 2016",
          details: [
            "Designed Unity 3D game in C# about a personified potato roaming the world"
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
}

.container {
  margin: 0.3in 0.4in;
}

.row {
  display: flex;
}

.column {
  float: left;
}

.left {
  width: 35%;
}

.right {
  width: 65%;
}

.footer {
  text-align: center;
}

h1,
h2,
h3 {
  font-family: "Lato";
  text-transform: uppercase;
}

h1 {
  font-weight: 200;
  font-size: 25pt;
  margin-bottom: 0.1in;
  color: dimgray;
}

h2 {
  font-weight: 200;
  font-size: 15pt;
  color: dimgray;
}

h3 {
  font-weight: 700;
  font-size: 12pt;
}

h4,
.position {
  font-family: "Raleway";
  font-size: 12pt;
  font-weight: 600;
  letter-spacing: 0.4px;
}

.position {
  text-transform: initial;
  font-variant: small-caps;
}

h5,
.project-tag {
  font-family: "Raleway";
  font-size: 10pt;
  color: dimgray;
  text-transform: initial;
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

#skills div,
#work div,
#additional div {
  margin-bottom: 16px;
}

#projects div {
  margin-bottom: 4px;
}

#hackathons li,
#awards li {
  margin-left: 8px;
}

#hackathons span,
#awards span {
  margin-left: 16px;
}
</style>

<style>
#resume li > a {
  font-weight: 400;
}

#resume ::selection {
  background: lightpink;
}
</style>
