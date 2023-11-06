<template>
  <div>
    <div class="navContainer">
      <v-row>
        <v-spacer />

        <nuxt-link to="/" class="mainLink">
          <v-btn text class="navTltle">Dashboard </v-btn>
        </nuxt-link>

        <nuxt-link to="/content" class="mainLink">
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
        <v-btn text>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-row>
    </div>
    <div class="subTitles">
      <div v-if="isDashboardActive || showSublinks">
        <nuxt-link to="/dashboard/sublink1" class="link">Overview</nuxt-link>
        <nuxt-link to="/dashboard/sublink2" class="link">Analytics</nuxt-link>
        <nuxt-link to="/dashboard/sublink2" class="link"
          >Session insights</nuxt-link
        >
        <nuxt-link to="/dashboard/sublink2" class="link"
          >Partner insights</nuxt-link
        >
        <nuxt-link to="/dashboard/sublink2" class="link">Networking</nuxt-link>
      </div>
      <div v-if="isContentActive || showSublinks">
        <nuxt-link to="/content/sublink1" class="link">Schedule</nuxt-link>
        <nuxt-link to="/content/sublink2" class="link">Speakers</nuxt-link>
        <nuxt-link to="/content/sublink2" class="link">Workshops</nuxt-link>
        <nuxt-link to="/content/sublink2" class="link">Custom menu</nuxt-link>
        <nuxt-link to="/content/sublink2" class="link">Partners</nuxt-link>
      </div>
      <div v-if="isEngagementActive || showSublinks">
        <nuxt-link to="/engagement/sublink1" class="link">Newsfeed</nuxt-link>
        <nuxt-link to="/engagement/sublink2" class="link">Socials</nuxt-link>
        <nuxt-link to="/engagement/sublink2" class="link"
          >Questions&Polls</nuxt-link
        >
      </div>
      <div v-if="isUsersActive || showSublinks">
        <nuxt-link to="/users/sublink1" class="link"> All </nuxt-link>
        <nuxt-link to="/users/sublink2" class="link"> Attendees </nuxt-link>
        <nuxt-link to="/users/sublink2" class="link"> Moderators </nuxt-link>
        <nuxt-link to="/users/sublink2" class="link"> Admins </nuxt-link>
      </div>
      <div v-if="isSettingsActive || showSublinks">
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
      isDashboardActive: true,
      isContentActive: false,
      isEngagementActive: false,
      isUsersActive: false,
      isSettingsActive: false,
      showSublinks: false,
    };
  },
  methods: {
    toggleSublinks() {
      this.showSublinks = !this.showSublinks;
    },
  },
  watch: {
    $route(to, from) {
      this.isDashboardActive = to.path === "/";
      this.isContentActive = to.path === "/content";
      this.isEngagementActive = to.path === "/engagement";
      this.isUsersActive = to.path === "/users";
      this.isSettingsActive = to.path === "/dashSettings";
    },
  },
};
</script>
