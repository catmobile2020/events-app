<template>
  <div class="brief-components mt-4">
    <v-container>
      <v-row class="d-flex justify-center">
        <v-col
          md="3"
          class="loginForm p-4 ma-4"
          v-for="(item, index) in listData"
          :key="index"
        >
          <v-col cols="12" class="analyticsTitle">
            <h6>{{ item.title }}</h6>
          </v-col>
          <v-col cols="12">
            <h5>{{ item.Num }}</h5>
          </v-col>
          <v-col cols="12 pb-2">{{ item.subtitle }}</v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listData: [
        {
          title: "App Users",
          Num: 0,
          subtitle: "Attendees using Eventee App",
        },
        {
          title: "Posts",
          Num: 0,
          subtitle: "Newsfeed posts sent to attendees",
        },
        {
          title: "Impressions",
          Num: 0,
          subtitle: "Attendees who saw your posts",
        },
        {
          title: "Operating System",
          Num: 0,
        },
        {
          title: "Networking users",
          Num: 0,
          subtitle: "Attendees using networking",
        },
        {
          title: "Networking connections",
          Num: 0,
          subtitle: "Networking connections",
        },
      ],
    };
  },
  components: {},
  methods: {},
};
</script>
