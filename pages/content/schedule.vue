<template>
  <div class="homepage">
    <section class="header-section">
      <Schedule />
    </section>
  </div>
</template>

<script>
import Schedule from "../../components/content/schedule.vue";

export default {
  name: "home",
  components: {
    Schedule,
  },
};
</script>
