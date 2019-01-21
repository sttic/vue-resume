<template>
  <div class="pdf">
    <div class="container">
      <h1>Redirecting to pdf</h1>If you are not redirected automatically, follow the
      <a :href="pdfLink">link to the pdf</a>
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
  vertical-align: center;
}

h1 {
  font-size: 12;
  font-weight: 400;
}
</style>
