<template>
  <div id="app" :style="`height: ${appHeight}px;`">
    <Resume :style="`transform: translate(-50%, -50%) scale(${scale});`"/>
  </div>
</template>

<script>
import Resume from "./components/Resume.vue";

export default {
  name: "app",
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
      padX: 0.5,
      padY: 0.5,
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

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:200,300,400,700|Raleway:600");

body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

#resume {
  width: 8.5in;
  height: 11in;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 32px 0 rgba(0, 0, 0, 0.08);
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
