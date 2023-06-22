<template>
  <div class="feature-showcase">
    <v-container>
      <v-row>
        <v-col md="12">
          <div class="subTxtInfo mt-2">
            <v-chip
              v-for="(category, index) in categories"
              :key="index"
              outlined
              text-color="#455A64"
              class="ml-1 categoriesChip"
            >
              <span class="clickable">
                {{ category.name }}
              </span>
            </v-chip>
          </div>
        </v-col>
        <v-col md="6"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      categories: [
        {
          name: "General Features",
        },
        {
          name: "Sales and Marketing Features",
        },
        {
          name: "Collection Features",
        },
        {
          name: "System Accounting Features",
        },
        {
          name: "Customer Experience for Owners Features",
        },
      ],
    };
  },
};
</script>