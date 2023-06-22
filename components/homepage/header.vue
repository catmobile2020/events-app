<template>
  <div class="headerComponent">
    <overNavComponent />
    <div class="header-content">
      <img src="../../assets/Photos/home/home_header.png" alt="">
      <v-container>
        <div class="text">
        <h1>
          The Leading Real Estate Management Software in KSA
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatem aliquid esse sunt, sapiente velit blanditiis voluptatum similique eveniet architecto voluptatibus rerum optio adipisci commodi necessitatibus iste laboriosam. Aperiam, at?
        </p>
        <v-btn rounded class="gradiant">
          Learn More
        </v-btn>
      </div>
      </v-container>

    </div>
  </div>
</template>
<script>
import overNavComponent from '../global/overNav.vue'

export default {
  components: {
    overNavComponent
  },
};
</script>
