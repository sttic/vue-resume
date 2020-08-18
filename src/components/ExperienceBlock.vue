<template>
  <section class="experience">
    <h2>{{ experience.title }}</h2>
    <div v-for="item in experience.content" :key="JSON.stringify(item)">
      <div class="experience-header">
        <div class="left-heading">
          <h3>
            <a
              v-if="item.website"
              class="experience-header-primary"
              :href="item.website"
            >{{ item.title_primary }}</a>
            <div v-else class="experience-header-primary">{{ item.title_primary }}</div>
          </h3>
          <h4 class="experience-header-secondary">{{ item.title_secondary }}</h4>
        </div>
        <span class="date-info">{{ item.date }}</span>
      </div>
      <ul>
        <li v-for="point in item.details" :key="point" v-html="point" />
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExperienceBlock",
  props: {
    experience: Object
  }
};
</script>

<style scoped>
.experience > div {
  margin-bottom: 12px;
}

.experience-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 4px;
}

.experience-header .left-heading {
  display: flex;
  align-items: baseline;
}

.experience-header-primary {
  font-family: "Lato";
  letter-spacing: 0.2px;
  color: #166fb4;
}

.experience-header-secondary {
  color: #3a95b4;
  font-size: 10pt;
  letter-spacing: 0.2px;
  margin-left: 5px;
}
</style>
