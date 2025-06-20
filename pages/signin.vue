<template>
    <div class="d-flex align-center justify-center" style="height: 100vh;">
    <v-card maax-width="800" class="mx-auto">
          <v-card-title class="justify-center">Login</v-card-title>
          <v-form>
          <v-card-text>
            <v-text-field
              label="Email" prepend-inner-icon="mdi-email-outline"
            ></v-text-field>

            <v-text-field
              label="Password" prepend-inner-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="blue">Login</v-btn>
            <v-btn color="green">Sign in Google</v-btn>
        </v-card-actions>
          </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
    layout: 'auth',
}
</script>
