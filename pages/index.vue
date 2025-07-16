<template>
  <div class="d-flex flex-column align-center justify-center" style="min-height: 10vh;">
    <div id="reader" style="width: 600px; height: 500px;"></div>
    <div v-if="qrResult" class="mt-4 d-flex justify-center">
      <v-card
        class="pa-1"
        color="green lighten"
        elevation="6"
        max-width="700"
      >
        <v-card-title class="text-h5 font-weight-bold justify-center">
          Scanned QR Code Result
        </v-card-title>
        <v-card-text>
          <v-alert type="success" border="right" colored-border class="text-center">
            {{ qrResult }}
          </v-alert>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { Html5QrcodeScanner } from 'html5-qrcode';
export default {
  name: 'QrScanner',
  data() {
    return {
      qrResult: '',
    };
  },
  mounted() {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );
    scanner.render(
      (decodedText, decodedResult) => {
        this.qrResult = decodedText;
      },
      error => {
        // handle errors if needed
      }
    );
  }
};
</script>