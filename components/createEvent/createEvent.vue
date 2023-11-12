<template>
  <div class="brief-components">
    <v-container>
      <v-col cols="12" md="12" class="d-flex justify-center">
        <v-col lg="3" md="4" sm="6" cols="12">
          <v-card
            class="mx-auto fill-height"
            max-width="100%"
            elevation="0"
            @click="showDialog = true"
          >
            <div class="fill-height py-7 d-flex justify-center conCard">
              <div class="d-flex align-center justify-center flex-column">
                <v-icon class="event-icon">mdi-plus</v-icon>
                <div class="conTxt">Create Event</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-col>
      <v-row cols="12" md="12" class="d-md-flex justify-center">
        <v-col
          lg="3"
          md="2"
          sm="6"
          cols="12"
          v-for="(item, i) in events"
          :key="i"
        >
          <v-card class="mx-auto" max-width="100%" elevation="0">
            <div class="py-2 event-card">
              <div class="d-flex align-items-center justify-space-between">
                <div class="d-flex align-items-center">
                  <img
                    class="event-icon"
                    src="../../assets/Photos/event-icon.png"
                    alt="magic-link"
                  />
                  <div class="conTxt" @click="redirectToOverview(item.id)">
                    {{ item.name }}
                  </div>
                </div>
                <div>
                  <v-icon @click="editEvent(item)" class="px-2"
                    >mdi-pencil</v-icon
                  >
                  <v-icon @click="openDeleteEventDailoge(item)" class="px-2"
                    >mdi-delete</v-icon
                  >
                </div>
              </div>
              <div class="created">{{ item.created_at }}</div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="showDialog" max-width="500px">
      <v-card class="conConfirmPopup">
        <v-card-title>
          <span class="text-h5 modalTitle">{{ dialogTitle }}</span>
        </v-card-title>
        <v-card-text class="textConfirm">
          <v-container>
            <v-row class="conFormSubmit d-flex justify-center">
              <v-col cols="12">
                <div class="pt-3">
                  <v-text-field
                    v-model="eventData.name"
                    label="Event Name"
                    outlined
                  ></v-text-field>
                </div>
              </v-col>
              <v-col cols="12">
                <v-radio-group v-model="eventData.type">
                  <v-radio label="hybrid" value="hybrid"></v-radio>
                  <v-radio label="virtual" value="virtual"></v-radio>
                </v-radio-group>
              </v-col>

              <v-col cols="12">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="eventData.start"
                      label="Start of your event"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="eventData.start"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12"> <Map @onMapValue="chooseMap" /> </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions class="pb-7">
          <v-spacer></v-spacer>
          <v-btn class="btnCancel" tile @click.stop="showDialog = false"
            >Cancel</v-btn
          >
          <v-btn class="btnPrimaryOrg" @click="saveItem()" tile>Confirm</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmDialoge" max-width="500px">
      <v-card class="conConfirmPopup">
        <v-card-title>
          <span class="text-h5 modalTitle">Are you sure</span>
        </v-card-title>
        <v-card-text class="textConfirm"
          >Are you sure you want to delete this event ?
          {{ item.id }}</v-card-text
        >

        <v-card-actions class="pb-7">
          <v-spacer></v-spacer>
          <v-btn class="btnCancel" tile @click.stop="confirmDialoge = false"
            >Cancel</v-btn
          >
          <v-btn class="btnPrimaryOrg" tile @click="deleteEvent(eventId)"
            >Confirm</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { LMap, LMarker, LTileLayer, LTooltip } from "vue2-leaflet";
import { icon } from "leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import LGeosearch from "vue2-leaflet-geosearch";
import Map from "~/components/global/Map";
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
        lat: 8.9806,
        lng: 38.7578,
      }),
    },
  },

  data() {
    return {
      eventData: {
        name: "",
        type: "",
        start: "",
        latitude: "",
        longitude: "",
      },
      item: { id: "" },
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,

      errorSnackbar: false,
      timeout: 3000,
      errorMessage: "",
      showDialog: false,
      confirmDialoge: false,
      isEditing: false,
      map: false,
      loading: false,
      userLocation: {},
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
      zoom: 18,

      address: [
        {
          lat: null,
          lon: null,
        },
      ],
      events: [],
      eventId: "",
    };
  },
  computed: {},
  methods: {
    async eventAddNew() {
      try {
        const data = await this.$axios.$post("/admin/events", this.eventData);
        this.events = data.data;
        this.showDialog = false;
        this.$router.push("/content/schedule");
      } catch (error) {
        if (error.response && error.response.data) {
          const errorData = error.response.data.error;
          const errorMessages = [];
          for (const field in errorData) {
            if (Array.isArray(errorData[field])) {
              errorData[field].forEach((message) => {
                errorMessages.push(message);
              });
            }
          }
          this.errorSnackbar = true;
          this.errorMessage = errorMessages.join("\n");
          console.error("Registration failed:", this.errorMessage);
        } else {
          console.error("Registration failed:", error.message);
          this.errorMessage = "Registration failed. Please try again later.";
        }
      }
    },
    async eventEdited() {
      try {
        const data = await this.$axios.$put("/admin/events", this.eventData);
        this.showDialog = false;
      } catch (error) {
        if (error.response && error.response.data) {
          const errorData = error.response.data.error;
          const errorMessages = [];
          for (const field in errorData) {
            if (Array.isArray(errorData[field])) {
              errorData[field].forEach((message) => {
                errorMessages.push(message);
              });
            }
          }
          this.errorSnackbar = true;
          this.errorMessage = errorMessages.join("\n");
          console.error("Registration failed:", this.errorMessage);
        } else {
          console.error("Registration failed:", error.message);
          this.errorMessage = "Registration failed. Please try again later.";
        }
      }
    },
    editEvent(item) {
      this.isEditing = true;
      console.log("item", item);
      this.eventData = {
        name: item.name,
        type: item.type,
        start: item.start,
      };
      this.showDialog = true;
    },

    saveItem() {
      if (this.isEditing) {
        this.eventEdited();
      } else {
        this.eventAddNew();
      }
    },
    closeProjectModal() {
      this.editedIndex = -1;
      this.dialogProject = false;
      this.$nextTick(() => {
        this.$v.$reset();
        this.formItem = Object.assign({}, this.defaultItem);
      });
    },
    openDeleteEventDailoge(item) {
      console.log("item", item);
      let eventId = item.id;
      console.log("eventId", eventId);

      this.confirmDialoge = true;
    },

    async deleteEvent(eventId) {
      console.log("eventId", eventId);

      try {
        await this.$axios.delete(`admin/events/${eventId}`);
        this.getEventsData();
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    },
    async getEventsData() {
      const data = await this.$axios.$get("/admin/events");
      this.events = data.data;
      console.log("this.questions", this.events);
    },
    redirectToOverview(id) {
      this.$router.push(`/dashboard/${id}`);
    },
    chooseMap(value, i) {
      if (!this.address[i]) {
        this.address[i] = {};
      }
      this.address[i].lat = value.latlng.lat;
      this.address[i].lon = value.latlng.lng;
      this.eventData.latitude = value.latlng.lat;
      this.eventData.longitude = value.latlng.lng;
    },
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.userLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
      });
    }
  },
  created() {
    this.getEventsData();
  },
  computed: {
    // Computed property to set the dialog title dynamically
    dialogTitle() {
      return this.isEditing ? "Edit Event" : "Create New Event";
    },
  },
  watch: {
    dialogProject(val) {
      val || this.closeProjectModal();
    },
  },
};
</script>
