<template>
  <div class="text-center map-container">
    <v-col cols="12">
      <div class="ConOfLmap">
        <l-map
          class="map"
          ref="map"
          @click="onMapClick"
          :zoom="zoom"
          style="height: 500px; width: 100%"
          :center="[
            position.lat || userLocation.lat || defaultLocation.lat,
            position.lng || userLocation.lng || defaultLocation.lng,
          ]"
        >
          <l-tile-layer
            :url="tileProvider.url"
            :attribution="tileProvider.attribution"
          />
          <l-geosearch :options="geoSearchOptions"></l-geosearch>
          <l-marker
            class="user-location"
            v-if="userLocation.lat && userLocation.lng"
            :icon="icon"
            :lat-lng.sync="userLocation"
          >
          </l-marker>
          <l-marker
            v-else-if="position.lat && position.lng"
            visible
            draggable
            :icon="icon"
            :lat-lng.sync="position"
            @dragstart="dragging = true"
            @dragend="dragging = false"
          >
          </l-marker>
        </l-map>
      </div>
    </v-col>
  </div>
</template>
<script>
import { LMap, LMarker, LTileLayer, LTooltip } from "vue2-leaflet";
import { icon } from "leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import LGeosearch from "vue2-leaflet-geosearch";
import { validationMixin } from "vuelidate";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LGeosearch,
  },
  props: {
    defaultLocation: {
      type: Object,
      default: () => ({
        lat: 24.222142,
        lng: 45.0741,
      }),
      position: Object,
    },
    userLocations: {
      type: Object,
      position: Object,
    },
    mapIndex: {
      type: Number,
    },
  },

  data() {
    return {
      map: false,
      loading: false,
      userLocation: {
        lat: 24.222142,
        lng: 45.0741,
      },
      geoSearchOptions: {
        provider: new OpenStreetMapProvider(),
        showMarker: false,
        autoClose: true,
      },
      icon: icon({
        iconRetinaUrl: require("@/assets/Photos/icon.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
      }),
      position: {},
      addressMap: "",
      tileProvider: {
        attribution:
          '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      },
      zoom: 3,
      dragging: false,
    };
  },
  mounted() {
    if (navigator.geolocation) {
      // get GPS position
      navigator.geolocation.getCurrentPosition((pos) => {
        // set the user location
        this.userLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
      });
    }
    this.$refs.map.mapObject.on("geosearch/showlocation", this.onSearch);

    this.$nextTick(() => {
      setTimeout(() => {
        this.map = true;
        this.$refs.map.mapObject.invalidateSize();
        this.$refs.map.mapObject.on("geosearch/showlocation", this.onSearch);
      }, 200);
    });
  },
  methods: {
    modalShown() {
      setTimeout(() => {
        //mapObject is a property that is part of leaflet
        this.$refs.mymap.mapObject.invalidateSize();
      }, 100);
    },

    onMapClick(value) {
      // place the marker on the clicked spot
      this.position = value.latlng;
      this.$emit("onMapValue", value, this.mapIndex);

      this.userLocation = "";
      this.userLocations = {};
    },
    onSearch(value) {
      const loc = value.location;
      this.position = { lat: loc.y, lng: loc.x };
    },
  },
  computed: {
    tooltipContent() {
      if (this.dragging) return "...";
      if (this.loading) return "Loading...";
      return `<strong>${this.addressMap.replace(
        ",",
        "<br/>"
      )}</strong> <hr/><strong>lat:</strong> ${
        this.position.lat
      }<br/> <strong>lng:</strong> ${this.position.lng}`;
    },
    tooltipCurrentPosition() {
      if (this.dragging) return "...";
      if (this.loading) return "Loading...";
      return `<strong>lat:</strong> ${this.userLocation.lat}<br/> <strong>lng:</strong> ${this.userLocation.lng}`;
    },
  },
};
</script>
<style lang="scss">
.map {
  width: 500px;
  height: 300px;
  position: relative;
}
</style>
