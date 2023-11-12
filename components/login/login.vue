<template>
  <div class="">
    <v-container>
      <div class="ConloginPage">
        <v-col cols="12 pb-2" class="d-flex align-center justify-center">
          <img
            class="magic-link"
            src="../../assets/Photos/logo_cat.png"
            alt="magic-link"
          />
        </v-col>
        <v-container fluid>
          <v-row class="d-flex justify-center">
            <v-col md="4" cols="12" class="logForm">
              <v-col class="text-center">
                <h4>Login</h4>
                <br />
                <h6>Please enter your e-mail and password</h6></v-col
              >
              <v-col cols="12">
                <v-text-field
                  v-model="form.email"
                  outlined
                  placeholder="Email Address"
                  required
                  solo
                  hide-details="auto"
                ></v-text-field>
              </v-col>

              <v-col cols="12 pb-2">
                <v-text-field
                  v-model="form.password"
                  outlined
                  class="formInput"
                  placeholder="Password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  required
                  hide-details="auto"
                  solo
                ></v-text-field>
              </v-col>
              <v-col class="text-center"><a>Forget Password</a></v-col>
              <v-col cols="12" md="12" class="d-flex justify-center">
                <v-btn class="btn-green" @click="doLogin()"> Login </v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
    <v-snackbar
      v-model="successSnackbar"
      color="success"
      shaped
      absolute
      bottom
      right
      :timeout="timeout"
    >
      {{ successMessage }}
    </v-snackbar>
    <v-snackbar
      v-model="errorSnackbar"
      color="red"
      shaped
      top
      right
      :timeout="timeout"
    >
      {{ errorMessage }}
    </v-snackbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
      form: {
        email: "admin@admin.com",
        password: "12345678",
      },

      successSnackbar: false,
      errorSnackbar: false,
      timeout: 3000,
      successMessage: "",
      errorMessage: "",
      loading: false,
      disabled: false,
    };
  },
  components: {},
  methods: {
    async doLogin() {
      try {
        const data = await this.$axios.$post("/auth/login", this.form);
        if (data.access_token) {
          localStorage.setItem("token", data.token_type + data.access_token);
          this.$router.push("/createEvent/createEvent");
        }
      } catch (error) {
        const errorData = error.data.error;
        this.errorSnackbar = true;
        this.errorMessage = errorData;
      }
    },
  },
};
</script>
