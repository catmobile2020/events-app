<template>
  <div class="homepage">
    <section class="header-section">
      <Speakers />
    </section>
  </div>
</template>

<script>
import Speakers from "../../components/content/speakers.vue";

export default {
  name: "home",
  components: {
    Speakers,
  },
};
</script>
