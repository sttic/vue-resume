<template>
  <div class="pdf">
    <div class="container">
      <h1>Redirecting to pdf</h1>If you are not redirected automatically, please follow
      <a :href="pdfLink">this link to the pdf</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PDF",
  created() {
    window.location.href = this.pdfLink;
  },
  data() {
    return {
      pdfLink: "tommy_deng_resume.pdf"
    };
  }
};
</script>

<style scoped>
#pdf {
}

.container {
  text-align: center;
  background-color: white;
}

h1 {
  font-size: 12;
  font-weight: 400;
}

a {
  color: #4fc08d;
}
</style>
