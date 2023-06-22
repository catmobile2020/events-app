<template>
  <div class="feature-showcase">
    <v-container>
      <v-row>
        <v-col md="6" cols="12" class="d-flex justify-center">
          <div class="">
            <img
              class="img-overlay w-100"
              src="../../assets/Photos/features/feature8.png"
              alt=""
            />
          </div>
        </v-col>
        <v-col md="6" cols="12">
          <p class="title">Collection Features</p>
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
          title: "Frozen debt management",
          describtion:
            "Alert on frozen debts on closed contracts to actively send collection notices and follow up on their status to close the case.",
        },

        {
          title: "Cash management",
          describtion:
            "Automates the entire collection process, provides real-time access, and helps the collection team to manage cash flows, track dues, analyze all transactions, and record the collected data",
        },

        {
          title: "Reports",
          describtion:
            "Generating detailed reports, and providing accurate forecasted information based on the automated periodical history of all collections.",
        },

        {
          title: "Attachment capability",
          describtion:
            "Allows documentation and backup of any transaction’s documents in different file formats.",
        },
      ],
    };
  },
};
</script>
