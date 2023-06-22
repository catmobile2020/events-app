<template>
  <div class="feature-showcase">
    <v-container>
      <div class="accounting-section">
        <v-row>
          <v-col md="12" cols="12">
            <p class="title">Operation Features</p></v-col
          >
          <v-col md="4" cols="12">
            <ul v-for="(feature, index) in featuresOne" :key="index">
              <li>
                <span class="feature-title"> {{ feature.title }} </span><br />
                <span class="feature-describtion">
                  {{ feature.describtion }}</span
                >
              </li>
            </ul>
          </v-col>
          <v-col md="4" cols="12">
            <ul v-for="(feature, index) in featuresTwo" :key="index">
              <li>
                <span class="feature-title"> {{ feature.title }} </span><br />
                <span class="feature-describtion">
                  {{ feature.describtion }}</span
                >
              </li>
            </ul>
          </v-col>
          <v-col md="4" cols="12">
            <ul v-for="(feature, index) in featuresThree" :key="index">
              <li>
                <span class="feature-title"> {{ feature.title }} </span><br />
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
</template>
<script>
export default {
  components: {},
  data() {
    return {
      featuresOne: [
        {
          title: "KPIs dashboard",
          describtion:
            "Measures and views ongoing progress of financial and operational performance KPIs.",
        },

        {
          title: "Title deeds management",
          describtion:
            "Registers title deeds with all essential details and links them with related buildings.",
        },

        {
          title: "Building definitions",
          describtion:
            "Defines building locations assigned to particular project details like name, type, location, number of floors, and previous evaluations, among others",
        },

        {
          title: "Unit definition",
          describtion:
            "Manage any type of properties (Commercial, residential, signages, ATMs, Land, Kiosks, parking, open spaces, warehouses, compound, etc. Enrich your unit’s database and easily add unit data automatically with predefined units’ specifications for different types of units.",
        },

        {
          title: "Customers/Prospects definitions",
          describtion:
            "Close more deals with fast and defined quotation generation based on leads/customer definition on the system.",
        },

        {
          title: "Contract Vacating",
          describtion:
            "Streamlines vacancy contracts at any point of time, automatically calculating all outstanding charges and optional manual adjustments.",
        },
        {
          title: "Vacating Request",
          describtion:
            "Automate vacating request process from start to end, including automatic calculations for all installments at the requested vacating time.",
        },
      ],
      featuresTwo: [
        {
          title: "Contract Renewals",
          describtion:
            "The system automatically provides a list of contracts ready for renewal, enabling the user to check, Edit, and renew with a simple click.",
        },
        {
          title: "Brokers and Brokerage Agreements Management",
          describtion:
            "PropertyNet allows you to manage Buildings and units which can be assigned to a certain broker through a brokerage agreement to be the only authorized person or entity which can manage leasing operations, collection, and expense of these units complying with EJAR rules.",
        },
        {
          title: "Vat Management",
          describtion:
            "you can create, display, and print VAT invoices as per the selected period easily and sent them to tenants complying with ZATCA phase 1 and 2 terms.",
        },
        {
          title: "Cash Management",
          describtion:
            "Manages transactions for all your properties or units, tracks payments, updates status of each owner or tenant, and ensures correct payment collection ensuring financial transperancy.",
        },
        {
          title: "Advance collection management",
          describtion:
            "No matter what your customers' payment schemes are, you can track and record advance payments with an optional allocation based on dues aging.",
        },
        {
          title: "Frozen Debt Management",
          describtion:
            "Sending notifications on frozen debts of closed contracts to check their status, follow up, and close the case.",
        },
      ],
      featuresThree: [
        {
          title: "Budgetary expenses management",
          describtion:
            "Takes control of expenses by assigning distinct budgets for each item and easily tracks any deviations. Efficient expense allocations for the numerous requirements ensure a balanced financial performance.",
        },
        {
          title: "Operational Expenses Management",
          describtion:
            "Track all expenses, allocate them to the correct building or unit, and compare revenues versus costs on each level.",
        },
        {
          title: "Management of Service Bills",
          describtion:
            "Setup services bills separately on different revenue accounts for each bill type. Stay informed with service utilization across all properties and their revenue as well.",
        },
        {
          title: "Brokerage Invoices",
          describtion:
            "When managing properties for others, a broker can issue commission invoices for each owner individually, adding VAT amounts when applicable.",
        },
        {
          title: "Management of Maintenance Requests",
          describtion:
            "Create and maintain a comprehensive view of all maintenance types requests, determine priority, status, and time required, and then assign different specialty technicians or outsourced companies to the request. Relevant costs are automatically calculated and allocated.",
        },
      ],
    };
  },
};
</script>
