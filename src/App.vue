<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@font-face {
  font-family: Lato;
  src: url(/fonts/Lato-Regular.ttf) format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: Lato;
  src: url(/fonts/Lato-Bold.ttf) format("truetype");
  font-weight: 700;
}

@font-face {
  font-family: Raleway;
  src: url(/fonts/Raleway-SemiBold.ttf) format("truetype");
  font-weight: 600;
}

html {
  -webkit-print-color-adjust: exact;
}

body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  background-color: #303030;
  background-image: url("assets/overlay.png");
  background-repeat: repeat;
}

a {
  text-decoration: none;
  outline: none;
  color: initial;
}
</style>
