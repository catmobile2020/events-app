<template>
  <div class="homepage">
    <section class="header-section">
      <Users />
    </section>
  </div>
</template>

<script>
import Users from "../../components/users/users.vue";

export default {
  name: "LogIn",
  components: {
    Users,
  },
};
</script>
