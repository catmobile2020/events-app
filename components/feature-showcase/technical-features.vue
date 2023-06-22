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
                  src="../../assets/Photos/features/feature9.png"
                  alt=""
                />
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <p class="title">General Technical Features</p>
              <ul v-for="(feature, index) in features" :key="index">
                <li>
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
          describtion:
            "Dual native language support (Arabic & English) gives access and ease to a broad range of audiences, providing an enhanced user experience.",
        },

        {
          describtion:
            "Hijri & Gregorian calendars cater to users' variable preferences and correlation requirements.",
        },

        {
          describtion:
            "The system is hosted inside KSA and complies with CITC (Communication and information technology Commission) regulations.",
        },

        {
          describtion:
            "Compatibility with multi-devices such as computers, laptops, android, and IOS mobiles through portals and Mobile Apps.",
        },

        {
          describtion:
            "Stringent attention to sustain full compliance with the rules and regulations of authorities like ZATCA regarding VAT & E-Invoicing features.",
        },
        {
          describtion:
            "Integrates with other international systems through API’s.",
        },

        {
          describtion:
            "Easy and flexible online subscriptions through bundles and add-ons to scale up with customers' business requirements.",
        },
        {
          describtion:
            "Applying IFRS standards related to property management ensures standardization by enhancing the international comparability and quality of financial information.",
        },

        {
          describtion:
            "Multi-levels of security and authorizations for optimum safety and risk management level.",
        },
        {
          describtion:
            "Several channels and tools for alerts and notifications through the system, emails, and SMS enhance the proactive approach and free employees time to do the core business tasks.",
        },

        {
          describtion:
            "Customizable workflow engine that caters to different processes as per customers' needs and structure.",
        },
      ],
    };
  },
};
</script>
