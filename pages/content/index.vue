<template>
  <div class="homepage">
    <section class="header-section">
      <Content />
    </section>
  </div>
</template>

<script>
import Content from "../../components/content/content.vue";

export default {
  name: "home",
  components: {
    Content,
  },
};
</script>
