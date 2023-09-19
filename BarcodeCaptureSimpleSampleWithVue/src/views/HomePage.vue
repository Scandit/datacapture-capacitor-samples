<template>
  <ion-header :translucent="true">
    <ion-toolbar>
      <ion-title>BC Simple Sample</ion-title>
    </ion-toolbar>
  </ion-header>

  <div id="container">
    <div id="dataCaptureView" class="scan__content" />
  </div>
</template>

<script lang="ts">
import {
  alertController,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import {
  defineComponent,
  onMounted,
} from 'vue';

import 'scandit-capacitor-datacapture-core';
import 'scandit-capacitor-datacapture-barcode';

import { ScanditCaptureCorePlugin } from 'scandit-capacitor-datacapture-core';

export default defineComponent({
  components: {
    IonHeader,
    IonTitle,
    IonToolbar
  },
  setup() {
    const initializeApp = async () => {
      // Initialize the plugins.
      const Scandit = await ScanditCaptureCorePlugin.initializePlugins();

      // There is a Scandit sample license key set below here.
      // This license key is enabled for sample evaluation only.
      // If you want to build your own application, get your license key by signing up for a trial at https://ssl.scandit.com/dashboard/sign-up?p=test
      const context = Scandit.DataCaptureContext.forLicenseKey('AYjTKgwFKLhZGtmHmyNAawklGVUpLfmaJ2JN39hPFcbHRdb8Sh3UX45m7PRkJtORsQzsAeBZw7aAZ/VBZlp5ykVZZOOYUI8ZAxAsZ3tOrh5HXX2CzFyh2yNzGtUXQuR5eFHqhXNx8+mfbsvN2zErPt0+TW4TESKXSx4764U8HnIF/01crbTR4/qxeWvIgdmGJkoV2YZc4wfZjpQI2Uvd3/J2jFcv/WrVHgWZ/VAC2lHTzC3JdwtTNJKxxDpsqKp1sDlARxGjw4hlebrAUbft3aWMjbtpVn2T4D+tBN3GVuwlD9Uo7MN3Sto17fSVSD1JLymYPHP7zxsnByy9mCBhKqTf3YKCh8DughdNJpIIWaaoY6t6OTof+TxY25XAboYM1Ii3FdaK1MjK2x9bVujInqaIYzPRYRwQj6lPyVaYSiRRJTsR6l3RLXyorSeqM6Mjyspyb9Gl3ht1grXe8TzMwVUFLYwBlV1zYcKfCVxHIaPo8irO1X7+sImu0166pNeK962FxzUx+rJMsvEIhy8mzF//yRI8WBLZvuBS5AH8EJHBb5p6DcdLgNVf3AwQWw6S5ENIw1Nu+eS2p+nm7msRRWP5jbqo8TfwgoellmtHaljlvmQ47kXfZvo9feDd7qZtGvWuX22yZkb+3k0OEfNKZaBKLrfzKU6X5TlmMvyhU7mF6mMdkBwex+NuKhRl1fYVjzD1hk75j70/QgXyjMv9nJpSEIXEt//AVHZTG4lGvAT0l3hPOie/zS0ixEH11+LJvbzsZQXYngggsJ40oCbajRxnvrMEcJQ5Lcxnp/Ov8qTmApOqK+XmLAV/s+MdeeIatFNTk6o9xGar+cB8');

      // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
      // default and must be turned on to start streaming frames to the data capture context for recognition.
      const camera = Scandit.Camera.default;
      context.setFrameSource(camera);

      // The barcode capturing process is configured through barcode capture settings
      // and are then applied to the barcode capture instance that manages barcode recognition.
      const settings = new Scandit.BarcodeCaptureSettings();

      // The settings instance initially has all types of barcodes (symbologies) disabled. For the purpose of this
      // sample we enable a very generous set of symbologies. In your own app ensure that you only enable the
      // symbologies that your app requires as every additional enabled symbology has an impact on processing times.
      settings.enableSymbologies([
        Scandit.Symbology.EAN13UPCA,
        Scandit.Symbology.EAN8,
        Scandit.Symbology.UPCE,
        Scandit.Symbology.QR,
        Scandit.Symbology.DataMatrix,
        Scandit.Symbology.Code39,
        Scandit.Symbology.Code128,
        Scandit.Symbology.InterleavedTwoOfFive,
      ]);

      // Some linear/1d barcode symbologies allow you to encode variable-length data. By default, the Scandit
      // Data Capture SDK only scans barcodes in a certain length range. If your application requires scanning of one
      // of these symbologies, and the length is falling outside the default range, you may need to adjust the "active
      // symbol counts" for this symbology. This is shown in the following few lines of code for one of the
      // variable-length symbologies.
      const symbologySettings = settings.settingsForSymbology(Scandit.Symbology.Code39);
      symbologySettings.activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

      // Create new barcode capture mode with the settings from above.
      const barcodeCapture = Scandit.BarcodeCapture.forContext(context, settings);

      // Register a listener to get informed whenever a new barcode got recognized.
      barcodeCapture.addListener({
        didScan: (mode: any, session: any) => {
          const barcode = session.newlyRecognizedBarcodes[0];
          const symbology = new Scandit.SymbologyDescription(barcode.symbology);

          // The `alert` call blocks execution until it's dismissed by the user. As no further frames would be
          // processed until the alert dialog is dismissed, we're showing the alert through a timeout and
          // disabling the barcode capture mode until the dialog is dismissed, as you should not block the
          // BarcodeCaptureListener callbacks for longer periods of time. See the documentation to learn
          // more about this.

          mode.isEnabled = false;
          showResult(`Scanned: ${barcode.data} (${symbology.readableName})`, mode);
        }
      });

      // To visualize the on-going barcode capturing process on screen, setup a data capture view that renders the
      // camera preview. The view must be connected to the data capture context.
      const view = Scandit.DataCaptureView.forContext(context);

      // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
      view.connectToElement(document.getElementById('dataCaptureView'));

      // Add a barcode capture overlay to the data capture view to render the location of captured barcodes on top of
      // the video preview. This is optional, but recommended for better visual feedback.
      const overlay = Scandit.BarcodeCaptureOverlay.withBarcodeCaptureForViewWithStyle(
          barcodeCapture,
          view,
          Scandit.BarcodeCaptureOverlayStyle.Frame
      );
      overlay.viewfinder = new Scandit.RectangularViewfinder(
          Scandit.RectangularViewfinderStyle.Square,
          Scandit.RectangularViewfinderLineStyle.Light,
      );

      // Switch camera on to start streaming frames and enable the barcode capture mode.
      // The camera is started asynchronously and will take some time to completely turn on.
      camera.switchToDesiredState(Scandit.FrameSourceState.On);
      barcodeCapture.isEnabled = true;
    };

    const showResult = async (message: string, barcodeCapture: any) => {
      // The DataCapture view is drawn on top of the webview. To display html elements in place of the
      // capture view, we set its attached element's z-index to -1.
      // eslint-disable-next-line
      document.getElementById('dataCaptureView')!.style.zIndex = '-1';

      const alert = await alertController
          .create({
            header: 'Scan result',
            backdropDismiss: false,
            message,
            buttons: [
              {
                text: 'OK',
                id: 'confirm-button',
                handler: () => {
                  barcodeCapture.isEnabled = true;
                  // To show the DataCapture view again, simply set the z-index property of its attached element to 1
                  // eslint-disable-next-line
                  document.getElementById('dataCaptureView')!.style.zIndex = '1';
                },
              },
            ],
          });
      return alert.present();
    }

    onMounted(initializeApp)

    return {}
  }
});
</script>

<style scoped>
#container {
  position: relative;
  height: 100%;
  width: 100%;
}
.scan__content {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
</style>
