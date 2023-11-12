<template>
  <div class="homepage">
    <section class="header-section">
      <CreateEvent />
    </section>
  </div>
</template>

<script>
import CreateEvent from "../../components/createEvent/createEvent.vue";

export default {
  layout: "auth",
  name: "analytics",
  components: {
    CreateEvent,
  },
};
</script>
