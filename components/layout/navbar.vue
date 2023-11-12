<template>
  <div>
    <div class="navContainer">
      <v-row>
        <v-spacer />

        <nuxt-link to="/dashboard" class="mainLink">
          <v-btn text class="navTltle">Dashboard </v-btn>
        </nuxt-link>

        <nuxt-link to="/content/schedule" class="mainLink">
          <v-btn text class="navTltle">Content </v-btn>
        </nuxt-link>
        <nuxt-link to="/engagement" class="mainLink">
          <v-btn text class="navTltle"> Engagement </v-btn>
        </nuxt-link>
        <nuxt-link to="/users" class="mainLink">
          <v-btn text class="navTltle"> Users </v-btn>
        </nuxt-link>
        <nuxt-link to="/dashSettings" class="mainLink">
          <v-btn text class="navTltle"> Settings </v-btn>
        </nuxt-link>

        <v-spacer />
        <v-menu :close-on-content-click="false" bottom offset-y :left="true">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="conUserbtn"
              v-bind="attrs"
              v-on="on"
              :ripple="false"
              text
            >
              <div class="conOfuserControl d-flex align-center">
                <div class="conOfUserInfo mr-2">
                  <div class="userName"></div>
                  <div class="userTitle"></div>
                </div>
                <div class="conUserIcon"></div>
              </div>

              <v-icon> mdi-chevron-down </v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item class="conOfListUser" @click="logOut()">
              <v-list-item-icon>
                <v-icon class="iconStyle">mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
    </div>
    <div class="subTitles">
      <div v-if="isActiveCategory('dashboard') || showSublinks">
        <nuxt-link to="/dashboard/overview" class="link">Overview </nuxt-link>
        <nuxt-link to="/dashboard/analytics" class="link">Analytics</nuxt-link>
        <nuxt-link to="/dashboard/session" class="link"
          >Session insights</nuxt-link
        >
        <nuxt-link to="/dashboard/sublink2" class="link"
          >Partner insights</nuxt-link
        >
        <nuxt-link to="/dashboard/sublink2" class="link">Networking</nuxt-link>
      </div>
      <div v-if="isActiveCategory('content') || showSublinks">
        <nuxt-link to="/content/schedule" class="link">Schedule</nuxt-link>
        <nuxt-link to="/content/speakers" class="link">Speakers</nuxt-link>
        <nuxt-link to="/content/sublink2" class="link">Workshops</nuxt-link>
        <nuxt-link to="/content/sublink2" class="link">Custom menu</nuxt-link>
        <nuxt-link to="/content/sublink2" class="link">Partners</nuxt-link>
      </div>
      <div v-if="isActiveCategory('engagement') || showSublinks">
        <nuxt-link to="/engagement/sublink1" class="link">Newsfeed</nuxt-link>
        <nuxt-link to="/engagement/sublink2" class="link">Socials</nuxt-link>
        <nuxt-link to="/engagement/sublink2" class="link"
          >Questions&Polls</nuxt-link
        >
      </div>
      <div v-if="isActiveCategory('users') || showSublinks">
        <nuxt-link to="/users/sublink1" class="link"> All </nuxt-link>
        <nuxt-link to="/users/sublink2" class="link"> Attendees </nuxt-link>
        <nuxt-link to="/users/sublink2" class="link"> Moderators </nuxt-link>
        <nuxt-link to="/users/sublink2" class="link"> Admins </nuxt-link>
      </div>
      <div v-if="isActiveCategory('dashSettings') || showSublinks">
        <nuxt-link to="/dashSettings/sublink1" class="link">Event</nuxt-link>
        <nuxt-link to="/dashSettings/sublink2" class="link">Features</nuxt-link>
        <nuxt-link to="/dashSettings/sublink2" class="link">Branding</nuxt-link>
        <nuxt-link to="/dashSettings/sublink2" class="link">Website</nuxt-link>
        <nuxt-link to="/dashSettings/sublink2" class="link"
          >Integrations</nuxt-link
        >
        <nuxt-link to="/dashSettings/sublink2" class="link">General</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCategory: "",
      showSublinks: false,
    };
  },
  methods: {
    toggleSublinks() {
      this.showSublinks = !this.showSublinks;
      if (!this.showSublinks) {
        this.activeCategory = "";
      }
    },
    isActiveCategory(category) {
      return this.activeCategory === category;
    },
    async logOut() {
      const data = await this.$axios.$post("/auth/logout");
      console.log("data", data);
      if (data.message === "Successfully logged out") {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("userData");
        this.$router.push("/");
      }
    },
  },
  watch: {
    $route(to, from) {
      const categories = [
        "dashboard",
        "content",
        "engagement",
        "users",
        "dashSettings",
      ];
      this.activeCategory = categories.find((category) =>
        to.path.startsWith(`/${category}`)
      );
    },
  },
  mounted() {
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("activeCategory", this.activeCategory);
      sessionStorage.setItem("showSublinks", this.showSublinks.toString());
    });

    const storedCategory = sessionStorage.getItem("activeCategory");
    const storedSublinks = sessionStorage.getItem("showSublinks");

    if (storedCategory) {
      this.activeCategory = storedCategory;
    }

    if (storedSublinks) {
      this.showSublinks = storedSublinks === "true";
    }
  },
};
</script>
