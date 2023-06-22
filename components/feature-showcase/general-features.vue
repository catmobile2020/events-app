<template>
  <div class="feature-showcase">
    <v-container>
      <v-row>
        <v-col md="6" cols="12" class="d-flex justify-center">
          <div class="">
            <img
              class="img-overlay w-100"
              src="../../assets/Photos/features/feature1.png"
              alt=""
            />
          </div>
        </v-col>
        <v-col md="6" cols="12">
          <p class="title">General Features</p>
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
          title: "Tasks management",
          describtion:
            "Manages users’ tasks across the team and displays status and updates.",
        },

        {
          title: "Quick info and actions required Screen",
          describtion:
            "Stays on top of upcoming deadlines and tracks forthcoming dates for contracts, payments, approvals needed, and other data-driven business tasks.",
        },

        {
          title: "Multi-Level user permissions",
          describtion:
            "Customizes user permissions by user groups, roles, or functions with Maker/Checker approval capability.",
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
