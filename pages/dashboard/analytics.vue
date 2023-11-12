<template>
  <div class="homepage">
    <section class="header-section">
      <Analytics />
    </section>
  </div>
</template>

<script>
import Analytics from "../../components/dashboard/analytics.vue";

export default {
  name: "analytics",
  components: {
    Analytics,
  },
};
</script>
