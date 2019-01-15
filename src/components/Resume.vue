<template>
  <div class="resume">
    <div class="header">
      <h1>Tommy Deng</h1>
    </div>
    <div class="row">
      <div class="column left">
        <section>
          <h2>Education</h2>
          <h3>University of Ottawa</h3>
          <h4>BASc Software Engineering</h4>
          <h5>2nd Year - Expected Dec 2021
            <br>CGPA: 9.2/10 (Dean’s Honour List)
          </h5>
        </section>
        <section>
          <h2>Contact</h2>
          <ul>
            <li>
              <a href>tdeng075@uottawa.ca</a>
            </li>
            <li>
              <p>613-606-7742</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Links</h2>
          <ul>
            <li>
              <a href>tommydeng.com</a>
            </li>
            <li>
              <a href>github.com/sttic</a>
            </li>
            <li>
              <a href>linkedin.com/in/tommydeng</a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <h5>Languages</h5>
          <h5>Libraries</h5>
          <h5>Technologies</h5>
          <h5>Development</h5>
        </section>
        <section>
          <h2>Hackathons</h2>
          <ul>
            <li>2018 <span>Hack Western</span></li>
          </ul>
        </section>
        <section>
          <h2>Awards</h2>
          <ul>
            <li>2018 <span>Merit Scholarship</span></li>
          </ul>
        </section>
        <section>
          <h2>Interests</h2>
        </section>
      </div>
      <div class="column right">
        <section>
          <h2>Work Experience</h2>
        </section>
        <section>
          <h2>Technical and Leadership Experience</h2>
          <div>
            <h3>Ottabotics Robot Racing |
              <h4 style="display: inline;">Robotics Competition Team</h4>
            </h3>
            <h5>Sep 2017 – Present | Ottawa, ON</h5>
            <ul>
              <li>Automated Blender with Python to render photorealistic videos of racing tracks for use as training data and driving simulation for autonomous vehicle</li>
              <li>Created computer vision system to detect traffic light states</li>
              <li>Wrote script that undistorts wide-angle camera images</li>
              <li>Developed compression system to send differences between the current and previous frame in a video feed to reduce bandwidth usage in video streaming</li>
            </ul>
          </div>
        </section>
        <section>
          <h2>Projects</h2>
          <div>
            <h3>Insta Eats
              <h5 style="display: inline;">Hack Western, London | Nov 2018</h5>
            </h3>
          </div>
        </section>
      </div>
    </div>
    <div class="footer">
      Please see
      <a href>tommydeng.com</a> for projects
    </div>
  </div>
</template>

<script>
export default {
  name: "Resume",
  props: {}
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
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
</style>
