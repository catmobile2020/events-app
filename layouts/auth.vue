<template>
  <v-app>
    <v-main class="mainBody">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AuthLayout",
  components: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      if (top !== window) {
        top.location = window.location;
      }
    });
  },

  head() {
    return {};
  },
};
</script>
<style>
.mainBody {
  padding: 0px !important;
}
</style>
