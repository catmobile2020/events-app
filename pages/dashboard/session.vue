<template>
  <div class="homepage">
    <section class="header-section">
      <Session />
    </section>
  </div>
</template>

<script>
import Session from "../../components/dashboard/session.vue";

export default {
  name: "session",
  components: {
    Session,
  },
};
</script>
