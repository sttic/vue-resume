<template>
  <div id="app">
    <Resume :style="`transform: translateX(-50%) scale(${scale});`"/>
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
      // eslint-disable-next-line
      console.log(`${window.innerWidth} ${window.innerHeight}`);

      this.scale = Math.min(window.innerWidth / 1029, 1);
      // eslint-disable-next-line
      console.log(this.scale);
    }
  },
  data() {
    return {
      scale: 1
    };
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  position: relative;
  padding: 0.5in 0;
  /* height: 100%; */
}

#resume {
  position: relative;
  left: 50%;
  /* top: 50%; */
  /* transform-origin: center center; */
}
</style>
