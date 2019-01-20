<template>
  <div class="paper" :style="`height: ${appHeight}px;`">
    <div class="pdf">
      <a href="http://tommydeng.com">pdf</a>
    </div>
    <Resume class="page" :style="`transform: translate(-50%, -50%) scale(${scale});`"/>
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

<style scoped>
#paper {
}

.page {
  width: 8.5in;
  height: 11in;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 32px 0 rgba(0, 0, 0, 0.08);
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
}

.pdf a {
  color: black;
  text-decoration: none;
  display: inline-block;
  margin: 12px 0;
  opacity: 0.2;
  transition: 1s;
}

.pdf a:hover {
  opacity: 0.6;
  transition: 1s;
}
</style>
