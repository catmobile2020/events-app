<template>
  <div class="feature-showcase">
    <div class="feature-showcase-gray-section">
      <v-container>
        <div class="Sales-section">
          <v-row>
            <v-col md="6" cols="12">
              <p class="title">Customer Experience for Tenants Features</p>
              <ul v-for="(feature, index) in features" :key="index">
                <li>
                  <span class="feature-title"> {{ feature.title }} </span><br />
                  <span class="feature-describtion">
                    {{ feature.describtion }}</span
                  >
                </li>
              </ul>
            </v-col>
            <v-col md="6" cols="12" class="d-flex justify-center">
              <div class="">
                <img
                  class="img-overlay w-100"
                  src="../../assets/Photos/features/feature10.png"
                  alt=""
                />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
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
            "In one interface, provide your tenants with all they need on their rented property whether maintenance, collection, payment statuses, and more.",
        },

        {
          title: "PropertyNet Owner Mobile Application (Android and IOS)",
          describtion:
            "It is an application that enhances tenant/customer experience via access to documents that provide more innovative ways to manage maintenance requests and track rent payments and relevant invoices.",
        },
      ],
    };
  },
};
</script>
