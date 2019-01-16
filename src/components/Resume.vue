<template>
  <div id="resume" style="transform: scale(1);">
    <div class="container">
      <div class="header">
        <h1>
          <a href="http://tommydeng.com/">Tommy Deng</a>
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
            <div v-for="(skill, index) in skills" :key="skill">
              <h5 style="text-transform: capitalize;">{{ index }}</h5>
              <p v-for="item in skill" :key="item">
                <span v-for="(language, index) in item" :key="index">
                  <span v-if="index != 0">&bull;</span>
                  {{ language }}
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
                <h4 style="display: inline;">&nbsp;| {{ item.position }}</h4>
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
            <div v-for="item in other_experience" :key="item">
              <h3>
                {{ item.name }}
                <h4 style="display: inline;">&nbsp;| {{ item.position }}</h4>
              </h3>
              <h5>{{ item.start }} – {{ item.end }} | {{ item.location }}</h5>
              <ul>
                <li v-for="point in item.details" :key="point">{{ point }}</li>
              </ul>
            </div>
          </section>

          <!-- PROJECTS -->
          <section id="projects">
            <h2>Projects</h2>
            <div v-for="item in projects" :key="item">
              <h3>
                {{ item.name }}
                <h5 style="display: inline;">&nbsp;{{ item.tag }} | {{ item.date }}</h5>
              </h3>
              <ul>
                <li v-for="point in item.details" :key="point">{{ point }}</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <div class="footer">
        <p>
          Please see
          <a href="http://tommydeng.com/">tommydeng.com</a> for projects
        </p>
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
      education: {
        school: "University of Ottawa",
        degree: "BASc Software Engineering",
        progress: "2nd Year",
        expected: "Dec 2021",
        cgpa: "9.2/10 (Dean's Honour List)"
      },
      contacts: [
        { href: "mailto:tdeng075@uottawa.ca", display: "tdeng075@uottawa.ca" }
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
          ["Keras", "PyAutoGUI", "Pillow"]
        ],
        technologies: [
          ["Vue", "React", "NodeJS", "Django"],
          ["LaTeX", "Markdown", "HTML", "CSS"],
          ["Virtual Machines", "Linux", "Git"],
          ["VS Code", "Visual Studio", "Eclipse"],
          ["Android Studio", "Unity 3D"],
          ["Blender", "Adobe CC"]
        ],
        development: [
          ["Agile", "CI", "VC", "UML"],
          ["Data Structures & Algorithms"],
          ["Object Oriented Design"]
        ]
      },
      hackathons: [
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
          end: "Apr 2019",
          location: "Ottawa, ON",
          details: []
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
            "Trained new consultants on toolset usage, testing workflow, and system requirements"
          ]
        }
      ],
      other_experience: [
        {
          name: "Ottabotics Robot Racing",
          position: "Robotics Competition Team",
          start: "Sep 2017",
          end: "Present",
          location: "Ottawa, ON",
          details: [
            "Automated Blender with Python to render photorealistic videos of racing tracks for use as training data and driving simulation for autonomous vehicle",
            "Created computer vision system to detect traffic light states",
            "Wrote script that undistorts wide-angle camera images",
            "Developed compression system to send differences between the current and previous frame in a video feed to reduce bandwidth usage in video streaming"
          ]
        },
        {
          name: "Inventure Accelerator",
          position: "Media and Outreach",
          start: "Jan 2018",
          end: "Present",
          location: "Ottawa, ON",
          details: [
            "Designed and updated the company website, meetinventure.com",
            "Improved user experience by continuously communicating with clients",
            "Organized the four-hour SparkFest 2018 event with the Inventure team",
            "Created SparkFest sponsor video featuring Google and Invest Ottawa"
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
            "Generated animated graphic representing a typical lifespan using CImg in C++"
          ]
        },
        {
          name: "Potato Simulator",
          tag: "ICS3U",
          date: "Jun 2016",
          details: [
            "Designed Unity 3D game in C# about a personified potato roaming around an open world"
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lato:200,300,400,700|Raleway:600");

* {
  padding: 0;
  margin: 0;
}

.container {
  width: 8.5in;
  height: 11in;
  margin: 0 auto;
  padding: 0.3in 0.5in;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 32px 0 rgba(0, 0, 0, 0.08);
}

.row {
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column {
  float: left;
}

.left {
  width: 3in;
}

.right {
  width: 5.5in;
}

.footer {
  text-align: center;
}

h1 {
  font-family: "Lato";
  font-weight: 200;
  font-size: 28pt;
  text-transform: uppercase;
  color: dimgray;
  margin-bottom: 8px;
}

h2 {
  font-family: "Lato";
  font-weight: 200;
  font-size: 16pt;
  text-transform: uppercase;
  color: dimgray;
}

h3 {
  font-family: "Lato";
  font-weight: 700;
  font-size: 13pt;
  text-transform: uppercase;
}

h4 {
  font-family: "Raleway";
  font-size: 13pt;
  font-weight: 600;
}

.right h4 {
  text-transform: initial;
  font-variant: small-caps;
}

h5 {
  font-family: "Raleway";
  font-size: 11pt;
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
  font-size: 11pt;
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

a {
  text-decoration: none;
  outline: none;
  color: black;
  font-weight: 400;
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
  margin-bottom: 8px;
}

#projects div {
  margin-bottom: 4px;
}
</style>
