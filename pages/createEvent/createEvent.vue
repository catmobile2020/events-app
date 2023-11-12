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
  head() {
    return {
      title: "events",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",
        },
      ],
    };
  },
};
</script>
