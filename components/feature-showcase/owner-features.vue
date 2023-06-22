<template>
  <div class="feature-showcase">
    <v-container>
      <v-row>
        <v-col md="6" cols="12" class="d-flex justify-center">
          <div class="">
            <img
              class="img-overlay w-100"
              src="../../assets/Photos/features/feature5.png"
              alt=""
            />
          </div>
        </v-col>
        <v-col md="6" cols="12">
          <p class="title">Customer Experience for Owners Features</p>
          <ul v-for="(feature, index) in features" :key="index">
            <li>
              <span class="feature-title"> {{ feature.title }} </span><br />
              <span class="feature-describtion">
                {{ feature.describtion }}</span
              >
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      features: [
        {
          title: "Web portals",
          describtion:
            "One interface with your required business data from different sources allows you to access your property information anytime, anywhere from your web portal.",
        },

        {
          title: "PropertyNet Owner Mobile Application (Android and IOS)",
          describtion:
            "Be on top of your properties status, tenants’ transactions, facility management, and system users at any time from the palm of your hand.",
        },
      ],
    };
  },
};
</script>
