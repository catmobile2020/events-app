<template>
  <div class="feature-showcase">
    <div class="feature-showcase-gray-section">
      <v-container>
        <div class="Sales-section">
          <v-row>
            <v-col md="6" cols="12">
              <p class="title">Sales and Marketing Features</p>
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
                  src="../../assets/Photos/features/feature2.png"
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
          title: "Customers/Prospects definitions",
          describtion:
            "Quickly identify and segment your customers and prospects based on their very well-defined profiles to ease your communication in a structured customizable manner allowing you to close more deals.",
        },

        {
          title: "Rental contract",
          describtion:
            "Automatically generate adjusted installment terms for each contract as per the specified number of units, contract period, and payment terms and conditions including managerial (Brokerage) fees, also the system provides different contract templates to fit every customer need.",
        },

        {
          title: "Quotation management module",
          describtion:
            "Streamlines the sales process, helps with sales forecasting, and allows you to monitor customer interactions, progress on every deal, quotation status, and sales conversion rates, tracking leads rotation from sales team till quote approval and measuring conversion rates from quotation till contract issuance.",
        },
      ],
    };
  },
};
</script>
