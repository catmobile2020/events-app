import Vue from "vue";
import axios from "axios";

export default function ({ $axios }) {
  $axios.onRequest((config) => {
    if (process.browser === true) {
      if (localStorage.getItem("token")) {
        config.headers.Authorization = localStorage.getItem("token");
      }
    }

    return config;
  });

  $axios.onResponse((response) => {
    return response;
  });

  $axios.onError((error) => {
    console.log("error.response", error.response);

    if (error.response) {
      // Reject the Promise with the error response data
      return Promise.reject(error.response);
    }

    // If there is no error.response, reject with the original error
    return Promise.reject(error);
  });
}

Vue.use(axios);
