<template>
  <v-container>
    <div class="">
      <v-container>
        <v-row class="d-flex justify-center">
          <v-col md="5" cols="12">
            <div class="loginForm p-4">
              <v-col cols="12" class="d-flex justify-space-between">
                <h5>My awesome event</h5>
                <v-btn class="btn-green">upgrade</v-btn>
              </v-col>
              <v-col cols="12 pb-2">Your plan: Trial</v-col>
            </div>
            <div class="loginForm mt-4 p-4">
              <v-col cols="12 pb-2">
                <h5>Magic link</h5>
              </v-col>
              <v-col cols="12 pb-2" class="d-flex align-center justify-center">
                <img
                  class="magic-link"
                  src="../../assets/Photos/magic_link.svg"
                  alt="magic-link"
                />
              </v-col>
              <v-col cols="12 pb-2">
                Generate your event preview link below and share it with anyone.
                Unless you publish your event, every generated link expires
                after 24 hours.
              </v-col>
              <div class="d-flex flex-column justify-center align-center ma-3">
                <v-btn class="btn-transparent">copy magic link</v-btn>
                <v-btn class="btn-green">generate link</v-btn>
              </div>
            </div>
          </v-col>
          <v-col md="7" cols="12" class="">
            <div class="loginForm">
              <v-col cols="12" class="d-flex">
                <h5>Status of My awesome event</h5>
              </v-col>
              <v-col cols="12 pb-2">
                <p>Status: Draft</p>
              </v-col>
              <v-col cols="12 pb-2">
                <p>Status: Draft</p>
              </v-col>
              <hr />

              <v-col cols="12 pb-2">
                <v-row>
                  <v-col cols="12 pb-2" md="6">
                    <p>Features</p>
                    <div class="d-flex flex-column">
                      <nuxt-link to="/" class="link">
                        <v-btn text class="navTitle">Newsfeed</v-btn>
                      </nuxt-link>
                      <nuxt-link to="/" class="link">
                        <v-btn text class="navTitle">Custom menu</v-btn>
                      </nuxt-link>
                    </div>
                  </v-col>
                  <v-col cols="12 pb-2" md="6">
                    <p>Premium features</p>
                    <div class="d-flex flex-column">
                      <nuxt-link to="/" class="link">
                        <v-btn text class="navTitle">Questions&Polls</v-btn>
                      </nuxt-link>
                      <nuxt-link to="/" class="link">
                        <v-btn text class="navTitle">Networking</v-btn>
                      </nuxt-link>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12" class="d-flex">
            <v-col
              md="4"
              class="loginForm ma-2 d-flex align-center flex-column"
            >
              <h5>Imported</h5>

              <p>0</p>
            </v-col>
            <v-col
              md="4"
              class="loginForm ma-2 d-flex align-center flex-column"
            >
              <h5>Invitees</h5>

              <p>0</p>
            </v-col>
            <v-col
              md="4"
              class="loginForm ma-2 d-flex align-center flex-column"
            >
              <h5>Attendees</h5>

              <p>0</p>
            </v-col>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12" class="d-flex">
            <v-col
              md="6"
              class="loginForm ma-2 d-flex align-center flex-column"
            >
              <h5>Latest ratings</h5>
              <hr />

              <p>0</p>
            </v-col>
            <v-col
              md="6"
              class="loginForm ma-2 d-flex align-center flex-column"
            >
              <h5>Latest feeds</h5>
              <hr />
              <p>0</p>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>
