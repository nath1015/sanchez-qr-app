<template>
  <div class="d-flex align-center justify-center" style="height: 100vh;">
    <v-card max-width="800" class="pa-15 mx-auto" elevation="12">
      <v-card-title class="justify-center text-h3">Sign in</v-card-title>

      <!-- ✅ Show logged-in Discord user -->
      <div v-if="$auth.loggedIn && $auth.user.username">
        <v-alert type="success" class="mb-4">
          Logged in as: {{ $auth.user.username }}#{{ $auth.user.discriminator }}
        </v-alert>
      </div>

      <v-form v-else>
        <v-card-text>
          <v-text-field
            label="Email"
            prepend-inner-icon="mdi-email-outline"
            class="text-body-1"
            style="font-size: 1.2rem;"
          ></v-text-field>

          <v-text-field
            label="Password"
            prepend-inner-icon="mdi-lock"
            type="password"
            class="text-body-1"
            style="font-size: 1.2rem;"
          ></v-text-field>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            color="blue"
            class="ma-2"
            style="font-size: 1.1rem; padding: 12px 24px; text-transform: none;"
            rounded="xl"
            block
          >
            Sign in
          </v-btn>
        </v-card-actions>

        <div class="d-flex align-center my-2" style="width: 100%;">
          <v-divider class="flex-grow-1"></v-divider>
          <span class="mx-4" style="color: #888;">or</span>
          <v-divider class="flex-grow-1"></v-divider>
        </div>

        <!-- Google Sign-in Button -->
        <v-card-actions class="justify-center">
          <v-btn
            color="red"
            class="ma-2"
            style="font-size: 1.1rem; padding: 12px 24px; text-transform: none;"
            rounded="xl"
            block
            @click="signInWithGoogle()"
          >
            <v-icon left>mdi-google</v-icon>
            Sign in with Google
          </v-btn>
        </v-card-actions>

        <!-- ✅ Discord Sign-in Button -->
        <v-card-actions class="justify-center">
          <v-btn
            color="indigo"
            class="ma-2"
            style="font-size: 1.1rem; padding: 12px 24px; text-transform: none;"
            rounded="xl"
            block
            @click="signInWithDiscord()"
          >
            <v-icon left>mdi-discord</v-icon>
            Sign in with Discord
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  middleware: 'guest',
  methods: {
    signInWithGoogle() {
      this.$auth.loginWith('google')
    },
    signInWithDiscord() {
      this.$auth.loginWith('discord')
    }
  }
}
</script>
