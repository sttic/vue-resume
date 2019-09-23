<template>
  <div class="paper" :style="`height: ${appHeight}px;`">
    <div class="pdf">
      <a :href="pdfLink">
        <p>PDF</p>
      </a>
    </div>
    <Resume class="page" :style="`transform: translate(-50%, -50%) scale(${scale}); height: ${letterInch.height}in;`" />
  </div>
</template>

<script>
import Resume from "@/components/Resume.vue";

export default {
  name: "Paper",
  components: {
    Resume
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  mounted() {
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    }
  },
  data() {
    return {
      letterInch: { width: 8.5, height: 11 },
      inch: 96,
      pdfLink: "tommy_deng_resume.pdf",
      padX: 1,
      padY: 1,
      windowWidth: 0,
      windowHeight: 0
    };
  },
  computed: {
    scale() {
      var compensation = 0.5;
      return Math.min(
        this.windowWidth / ((8.5 + 2 * this.padX + compensation) * this.inch),
        1
      );
    },
    resumeWidth() {
      return this.letterInch.width * this.inch * this.scale;
    },
    resumeHeight() {
      return this.letterInch.height * this.inch * this.scale;
    },
    appHeight() {
      return Math.max(
        this.resumeHeight + 2 * this.padY * this.inch,
        this.windowHeight
      );
    }
  }
};
</script>

<style scoped>
#paper {
}

.page {
  width: 8.5in;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 32px 0 rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
  top: 50%;
}

.pdf {
  font-family: "Lato";
  font-size: 12pt;
  font-weight: 300;
  text-align: center;
  user-select: none;
  padding-top: 0.15in;
}

.pdf a {
  background-color: white;
  border: 2px black solid;
  margin: auto;
  border-radius: 200px;
  color: black;
  text-decoration: none;
  display: inline-block;
  margin: 12px 0;
  transition: 1s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 32px 0 rgba(0, 0, 0, 0.1);
}

.pdf p {
  margin: 8px 0.5in 12px 0.5in;
  font-weight: 400;
}

.pdf a:hover {
  background-color: #f6f6f6;
  transition: 0.5s;
}
</style>
