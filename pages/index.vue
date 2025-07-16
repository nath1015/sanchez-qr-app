<template>
  <div>
    <div id="reader" style="width: 600px;"></div>
  </div>
</template>

<script>
import { Html5QrcodeScanner } from 'html5-qrcode';

export default {
  name: 'QrScanner',
  mounted() {
    const onScanSuccess = (decodedText, decodedResult) => {
      console.log(`Code matched = ${decodedText}`, decodedResult);
    };

    const onScanFailure = (error) => {
      console.warn(`Code scan error = ${error}`);
    };

    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader", 
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);
  }
};
</script>
