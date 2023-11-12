<template>
  <v-container>
    <div class="brief-components mt-4">
      <v-container>
        <v-row class="d-flex justify-center loginForm">
          <v-col cols="12" md="12" class="d-flex justify-space-between">
            <v-col md="4">
              <h4>Session insights</h4>
            </v-col>
            <v-col md="3">
              <v-text-field
                outlined
                placeholder="Search"
                required
                rounded
                solo
                hide-details="auto"
              ></v-text-field>
            </v-col>
          </v-col>
          <v-col cols="12" md="12">
            <hr />
          </v-col>

          <v-col cols="12" md="12">
            <template>
              <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
                class="elevation-1"
              ></v-data-table>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Time ",
          align: "start",
          sortable: false,
          value: "time",
        },
        { text: "Session name", value: "session_name" },
        { text: "Attendance", value: "attendance" },
        { text: "Engagement", value: "engagement" },
        { text: "Average rating", value: "average_rating" },
      ],
      desserts: [
        {
          time: "03:00",
          session_name: "Test Name",
          attendance: "Test Attendance",
          engagement: "Test Engagement",
          average_rating: "Test Average Rating",
        },
        {
          time: "05:00",
          session_name: "Test Name 1",
          attendance: "Test Attendance 1",
          engagement: "Test Engagement 1",
          average_rating: "Test Average Rating 1",
        },
        {
          time: "07:00",
          session_name: "Test Name 2",
          attendance: "Test Attendance 2",
          engagement: "Test Engagement 2",
          average_rating: "Test Average Rating 2",
        },
      ],
    };
  },
};
</script>
