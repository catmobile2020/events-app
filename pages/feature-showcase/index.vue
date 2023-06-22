<template>
  <div class="homepage">
    <section class="header-section">
      <Header />
    </section>
    <section class="header-section">
      <FeatureCategory />
    </section>
    <section class="header-section">
      <GeneralFeatures />
    </section>
    <section class="header-section">
      <SalesFeatures />
    </section>
    <section class="header-section">
      <CollectionFeatures />
    </section>
    <section class="header-section">
      <AccountingFeatures />
    </section>
    <section class="header-section">
      <OwnerFeatures />
    </section>
    <section class="header-section">
      <TenantsFeatures />
    </section>
    <section class="header-section">
      <OperationFeatures />
    </section>
    <section class="header-section">
      <MaintenanceFeatures />
    </section>
    <section class="header-section">
      <ManagementFeatures />
    </section>
    <section class="header-section">
      <TechnicalFeatures />
    </section>
    <section class="header-section mt-12">
      <FreeDemo />
    </section>
  </div>
</template>

<script>
import Header from "../../components/global/header";
import FeatureCategory from "../../components/feature-showcase/feature-category";
import GeneralFeatures from "../../components/feature-showcase/general-features";
import SalesFeatures from "../../components/feature-showcase/sales-features";
import CollectionFeatures from "../../components/feature-showcase/collection-features";
import AccountingFeatures from "../../components/feature-showcase/accounting-features";
import OwnerFeatures from "../../components/feature-showcase/owner-features";
import TenantsFeatures from "../../components/feature-showcase/tenants-features";
import OperationFeatures from "../../components/feature-showcase/operation-features";
import MaintenanceFeatures from "../../components/feature-showcase/maintenance-features";
import ManagementFeatures from "../../components/feature-showcase/management-features";
import TechnicalFeatures from "../../components/feature-showcase/technical-features";
import FreeDemo from "../../components/feature-showcase/free-demo";

export default {
  name: "home",
  components: {
    Header,
    FeatureCategory,
    GeneralFeatures,
    SalesFeatures,
    CollectionFeatures,
    AccountingFeatures,
    OwnerFeatures,
    TenantsFeatures,
    OperationFeatures,
    MaintenanceFeatures,
    ManagementFeatures,
    TechnicalFeatures,
    FreeDemo,
  },
};
</script>
