<template>
  <div class="feature-showcase">
    <div class="feature-showcase-gray-section">
      <v-container>
        <div class="accounting-section">
          <v-row>
            <v-col md="12" cols="12">
              <p class="title">Accounting Features</p></v-col
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
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      featuresOne: [
        {
          title: "Rental Contract",
          describtion:
            "Handles rental contracts, including the number of units, period, and VAT types, automatically calculating installments and administrative fees.",
        },

        {
          title: "Contract vacating",
          describtion:
            "Provides vacating for contracts and automatically calculates all outstanding amounts and any other charges with an additional feature for manual adjustments based on agreement.",
        },

        {
          title: "Contract renewals",
          describtion:
            "Allows the user to make changes on contract terms, review contract renewals, and approve contract renewal changes with just one click.",
        },
        {
          title: "VAT Management",
          describtion:
            "A- VAT Periods Management Automatically validate VAT invoice reports monthly/quarterly allowing the user to close the period and send it to ZATCA upon review and automatically opening a new period. B- VAT Billing Enable property managers/accountants to create/display/ /print VAT invoices and send them to tenants easily. C- VAT reporting Generate Real estate customized TAX declaration report with a click.",
        },
      ],
      featuresTwo: [
        {
          title: "Cash management",
          describtion:
            "Easily create detailed receiving /payment vouchers, debit/credit notes, Record and track your financials, cash flow cycles, receivables, and payables ensuring integration with actions from all users.",
        },
        {
          title: "Advance collection management",
          describtion:
            "Manage reservations advance payment and facilitates any type contract-related dues, ensuring compliance with VAT regulations for Advances.",
        },
        {
          title: "Frozen Debt Management",
          describtion:
            "Highlight frozen debts status for management alerts on escalations actions of late payments.",
        },
        {
          title: "Budgetary Expenses Management",
          describtion:
            "Controlling expenses by setting a specific budget for each item and tracking any changes and limiting spending.",
        },
        {
          title: "Brokerage invoices",
          describtion:
            "Helping brokers manage and issue commission invoices for each property owner, automatically adding VAT when applicable.",
        },
        {
          title: "PropertyNet financial integration gateway",
          describtion:
            "A readily available API that acts as a comprehensive gateway to map financial accounts with entries of various transactions such as contracts/renewal installments, service invoices, and others.",
        },
      ],
      featuresThree: [
        {
          title: "Setting financial budgeting",
          describtion:
            "Defining financial budgeting for the fiscal year's months and comparing it to actuals in accordance with the linked settings for each account.",
        },
        {
          title: "Temporary year closure option",
          describtion:
            "Defining financial budgeting for the fiscal year's months and comparing it to actuals in accordance with the linked settings for each account.",
        },
        {
          title: "Temporary year closure option",
          describtion:
            "Temporary closure of the fiscal year until all closing-year adjustments have been completed while working on the following fiscal year.",
        },
        {
          title: "Automatic opening balance",
          describtion:
            "Upon closing the year, users can automatically create the opening entry, either temporarily or permanently.",
        },
        {
          title: "Amortization automation",
          describtion:
            "The recurring entries feature allows users to amortize any revenue or expense over multiple months.",
        },
        {
          title: "Financial Inquiry",
          describtion:
            "No need to close the period to generate business reports. Generate reports like accounts statements, trial balances, income statements, and balance sheets anytime you want, and dig deeper into your data for sound business decisions.",
        },
        {
          title: "International Standards Compliance",
          describtion:
            "Applying IFRS standards related to property management ensures standardization by enhancing the international comparability and quality of financial information.",
        },
      ],
    };
  },
};
</script>
