<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:200,300,400,700|Raleway:600");

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
  background: white;
}

a {
  text-decoration: none;
  outline: none;
  color: initial;
}
</style>
