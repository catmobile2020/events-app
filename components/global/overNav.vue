<template>
  <div class="overlay-nav">
    <v-app-bar
  >
  <v-container>
    <v-row>
    <v-toolbar-title>
      <img class="logo" src="../../assets/Photos/general/navbar.png" alt="logo">
    </v-toolbar-title>
    <v-spacer />
    <nuxt-link to="/" class="link">
      <v-btn text class="navTltle">{{ $t("navbar.feature") }} </v-btn>
    </nuxt-link>
    <nuxt-link to="/" class="link">
      <v-btn text class="navTltle"> {{ $t("navbar.aboutus") }} </v-btn>
    </nuxt-link>
    <nuxt-link to="/" class="link">
      <v-btn text class="navTltle"> {{ $t("navbar.whoWeServe") }} </v-btn>
    </nuxt-link>
    <nuxt-link to="/" class="link">
      <v-btn text class="navTltle"> {{ $t("navbar.FAQ") }} </v-btn>
    </nuxt-link>
    <nuxt-link to="/" class="link">
      <v-btn text class="navTltle"> {{ $t("navbar.contactUs") }} </v-btn>
    </nuxt-link>
    <v-spacer />
    <div
    v-for="locale in availableLocales"
    :key="locale.iso"
    @click="
      $i18n.setLocale(locale.code), ($vuetify.rtl = !$vuetify.rtl)
    "
  >
    <v-btn
      text
      v-if="locale.code === 'en'"
      class="eachIconColor d-flex align-center"
      :class="locale.code === 'ar' ? 'text-right' : 'text-left'"
    >
    EN
    </v-btn>
    <v-btn
      text
      v-if="locale.code === 'ar'"
      class="eachIconColor d-flex align-center"
      :class="locale.code === 'ar' ? 'text-right' : 'text-left'"
    >
      AR
    </v-btn>
  </div>
  <v-btn text>
    <v-icon>
      mdi-magnify
    </v-icon>
  </v-btn>
</v-row>
</v-container>
  </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted() {
    this.$nextTick(() => {
      // Set RTL Direction
      this.$vuetify.rtl = this.$i18n.locale === "ar";
    });
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  }
}
</script>
