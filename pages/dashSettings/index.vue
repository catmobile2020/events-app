<template>
  <div class="homepage">
    <section class="header-section">
      <Settings />
    </section>
  </div>
</template>

<script>
import Settings from "../../components/dashSettings/dashSettings.vue";

export default {
  name: "home",
  components: {
    Settings,
  },
};
</script>
