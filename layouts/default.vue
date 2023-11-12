<template>
  <v-app dark>
    <navbarComponent />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import navbarComponent from "../components/layout/navbar.vue";

export default {
  name: "DefaultLayout",
  components: {
    navbarComponent,
  },

  data() {
    return {};
  },
};
</script>
