<template>
  <div class="homepage">
    <section class="header-section">
      <Engagement />
    </section>
  </div>
</template>

<script>
import Engagement from "../../components/engagement/engagement.vue";

export default {
  name: "home",
  components: {
    Engagement,
  },
};
</script>
