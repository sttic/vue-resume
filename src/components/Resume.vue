<template>
  <div id="resume">
    <div class="container">
      <div class="row">
        <div class="column left">
          <h1 id="name">
            <a :href="website">{{ first_name }} {{ last_name }}</a>
          </h1>

          <!-- LINKS -->
          <section id="links">
            <ul>
              <li v-for="item in links" :key="JSON.stringify(item)">
                <a :href="item.href">
                  <font-awesome-icon class="icon" :icon="item.icon" />
                  <span class="display-link">{{ item.display }}</span>
                </a>
              </li>
            </ul>
          </section>

          <!-- EDUCATION -->
          <section id="education">
            <h2>Education</h2>
            <h4>{{ education.school }}</h4>
            <h5>{{ education.degree }}</h5>
            <p v-for="line in education.details" :key="JSON.stringify(line)">
              <span v-if="line.length !== 0">
                <span v-for="(interest, index) in line" :key="index">
                  <span v-if="index !== 0" class="bullet-sep" />
                  {{ interest }}
                </span>
              </span>
              <span v-else>
                <div class="bullet-list-break" />
              </span>
            </p>
          </section>

          <!-- SKILLS -->
          <section id="skills">
            <h2>{{ skills.title }}</h2>
            <div v-for="skillSet in skills.content" :key="JSON.stringify(skillSet)">
              <h5>{{ skillSet.category }}</h5>
              <div v-for="(group, i) in skillSet.groups" :key="JSON.stringify(group)">
                <div v-for="(skill, j) in group" :key="skill">
                  <p v-if="j % 2 === 0" class="left-skills">
                    {{ group[j] }}
                    <span
                      v-if="j + 1 < group.length"
                      class="right-skills"
                    >{{ group[j + 1] }}</span>
                  </p>
                </div>
                <div v-if="i !== skillSet.groups.length - 1" class="bullet-list-break" />
              </div>
            </div>
          </section>

          <!-- HACKATHONS -->
          <section id="hackathons">
            <h2>{{ hackathons.title }}</h2>
            <ul>
              <li v-for="item in hackathons.content" :key="JSON.stringify(item)">
                {{ item.date }}
                <span>{{ item.name }}</span>
              </li>
            </ul>
          </section>

          <!-- INTERESTS -->
          <section id="interests">
            <h2>{{ interests.title }}</h2>
            <p v-for="line in interests.content" :key="JSON.stringify(line)">
              <span v-if="line.length !== 0">
                <span v-for="(interest, index) in line" :key="index">
                  <span v-if="index !== 0" class="bullet-sep" />
                  {{ interest }}
                </span>
              </span>
              <span v-else>
                <div class="bullet-list-break" />
              </span>
            </p>
          </section>
        </div>

        <div class="column right">
          <!-- WORK EXPERIENCE -->
          <section id="work" class="experience">
            <h2>{{ work_experience.title }}</h2>
            <div v-for="item in work_experience.content" :key="JSON.stringify(item)">
              <h3>
                <a
                  v-if="item.website"
                  class="experience-header-primary"
                  :href="item.website"
                >{{ item.title_primary }}</a>
                <span v-else class="experience-header-primary">{{ item.title_primary }}</span>
                <span class="experience-header-secondary">{{ item.title_secondary }}</span>
                <span class="date-info">{{ item.date }}</span>
              </h3>
              <ul>
                <li v-for="point in item.details" :key="point" v-html="point" />
              </ul>
            </div>
          </section>

          <!-- ADDITIONAL EXPERIENCE -->
          <section id="additional" class="experience">
            <h2>{{ additional_experience.title }}</h2>
            <div v-for="item in additional_experience.content" :key="JSON.stringify(item)">
              <h3>
                <a
                  v-if="item.website"
                  class="experience-header-primary"
                  :href="item.website"
                >{{ item.title_primary }}</a>
                <span v-else class="experience-header-primary">{{ item.title_primary }}</span>
                <span class="experience-header-secondary">{{ item.title_secondary }}</span>
                <span class="date-info">{{ item.date }}</span>
              </h3>
              <ul>
                <li v-for="point in item.details" :key="point" v-html="point" />
              </ul>
            </div>
          </section>

          <!-- PROJECTS -->
          <section id="projects" class="experience">
            <h2>{{ projects.title }}</h2>
            <div v-for="item in projects.content" :key="JSON.stringify(item)">
              <h3>
                <a
                  v-if="item.website"
                  class="experience-header-primary"
                  :href="item.website"
                >{{ item.title_primary }}</a>
                <span v-else class="experience-header-primary">{{ item.title_primary }}</span>
                <span class="experience-header-secondary">{{ item.title_secondary }}</span>
                <span class="date-info">{{ item.date }}</span>
              </h3>
              <ul>
                <li v-for="point in item.details" :key="point" v-html="point" />
              </ul>
            </div>
          </section>

          <div class="footer" v-if="footer_message">
            <div v-html="footer_message" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import content from "@/content";

export default {
  name: "Resume",
  props: {},
  data() {
    return content;
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
  width: 25%;
  height: 100%;
  background-color: #166fb4;
  padding-top: 0.3in;
  padding-left: 0.4in;
  /* excess padding at bottom to fill otherwise white space with gray background on pdf export */
  /* need to limit pdf to 1 page when exporting */
  padding-bottom: 100%;
  color: white;
}

.left h2,
.left h5 {
  color: white;
}

.left p,
.left li {
  font-weight: 400;
}

.bullet-sep::before {
  content: "·";
  font-weight: bold;
  margin: 0 3px;
}

.bullet-list-break {
  height: 8px;
}

.right {
  width: 70%;
  padding-top: 0.3in;
  padding-left: 0.25in;
  padding-right: 0.4in;
}

.footer {
  text-align: center;
  font-family: "Lato";
  font-size: 10pt;
  color: #3d3d3d;
}

.footer >>> a {
  font-weight: 700;
  color: #3d3d3d;
}

h1,
h2,
h6 {
  font-family: "Lato";
  text-transform: uppercase;
}

h1 {
  font-weight: 400;
  font-size: 25pt;
  margin-bottom: 0.1in;
}

#name {
  margin-bottom: 0.2in;
}

#name a {
  font-weight: 700;
  letter-spacing: 4px;
  color: white;
}

h2 {
  font-weight: 800;
  font-size: 15pt;
  color: #3d3d3d;
  margin-bottom: 8px;
  letter-spacing: 0.5pt;
}

h3 {
  font-weight: 700;
  font-size: 12pt;
}

h4,
.experience-header-secondary {
  font-family: "Raleway";
  font-size: 12pt;
  font-weight: 600;
}

.experience-header-secondary {
  color: #3a95b4;
  font-size: 10pt;
  letter-spacing: 0.2px;
  margin-left: 5px;
}

h5,
.date-info {
  font-family: "Raleway";
  font-size: 10pt;
}

h6 {
  font-size: 10pt;
}

.date-info {
  color: #3a95b4;
  float: right;
}

.experience-header-primary {
  font-family: "Lato";
  line-height: 12px;
  letter-spacing: 0.2px;
  color: #166fb4;
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

.right h3 {
  margin-bottom: 4px;
}

.right li {
  margin-left: 20px;
  color: #3d3d3d;
}

.right li::before {
  content: "\2022";
  position: absolute;
  left: -1em;
  font-size: 0.8em;
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

#links a {
  color: white;
}

#links .icon {
  padding-right: 6px;
  font-size: 16px;
}

#links .display-link {
  margin-left: 4px;
}

#skills > div {
  margin-bottom: 12px;
}

.experience > div {
  margin-bottom: 14px;
}

li,
#education p,
#skills p,
#interests p {
  line-height: 13.5pt;
  font-weight: 400;
}

#skills h5 {
  text-transform: uppercase;
  margin-bottom: 4px;
  letter-spacing: 0.2pt;
}

#skills .left-skills {
  position: relative;
  margin-left: 8px;
}

#skills .right-skills {
  position: absolute;
  left: 90px;
}

#hackathons li {
  margin-left: 8px;
}

#hackathons span {
  margin-left: 16px;
}

#resume li > a {
  font-weight: 400;
}

#resume ::selection {
  background: #aaaaff80;
}
</style>
