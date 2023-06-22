<template>
  <div class="feature-showcase">
    <v-container>
      <v-row>
        <v-col md="6" cols="12">
          <p class="title">Top Management Features</p>
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
              src="../../assets/Photos/features/feature8.png"
              alt=""
            />
          </div>
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
          title: "Management dashboard",
          describtion:
            "Sets KPIs for a bird-eye overview of leasing operations, including occupancy ratio, monthly collection, future cash flow, aging, etc.",
        },

        {
          title: "Budgetary expenses management",
          describtion:
            "Be on top of expenses by monitoring assigned distinct budgets for each item and easily trace any deviations.",
        },
        {
          title: "PropertyNet Owner Mobile Application (Android and IOS)",
          describtion:
            "Owners will be Kept up to date with any related system transactions by tenants or system users at any point in time through the mobile phone.",
        },
      ],
    };
  },
};
</script>
