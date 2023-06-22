<template>
  <div class="feature-showcase">
    <div class="feature-showcase-gray-section">
      <v-container>
        <div class="Sales-section">
          <v-row>
            <v-col md="6" cols="12" class="d-flex justify-center">
              <div class="">
                <img
                  class="img-overlay w-100"
                  src="../../assets/Photos/features/feature7.png"
                  alt=""
                />
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <p class="title">Maintenance Features</p>
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
          title: "Operational Expenses Management",
          describtion:
            "Track and control the expenses of each building and unit, comparing revenues and costs for each level.",
        },

        {
          title: "Management of Maintenance Requests",
          describtion:
            "Manages all maintenance types requests according to priority, status, and timing, assigning different specialty technicians/outsourced companies, and spare part costs, and automatically calculating all relevant costs.",
        },
        {
          title: "PropertyNet Technician Mobile Application (Android and IOS)",
          describtion:
            "Aggregate and automate maintenance requests, and respond to customers, and tenant maintenance requests, with service tracking options.",
        },
      ],
    };
  },
};
</script>
