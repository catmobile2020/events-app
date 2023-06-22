<template>
<div class="homepage">
<section class="header-section">
  <headerSection />
</section>
</div>
</template>

<script>
import headerSection from '../components/homepage/header.vue'
export default {
  name: 'home',
  components: {
    headerSection
  }
}
</script>
