<script setup>
import {
  BarcodeCountSettings,
  Symbology,
  BarcodeCount,
  BarcodeCountView,
  BarcodeCountViewStyle
} from 'scandit-capacitor-datacapture-barcode';
import {
  ScanditCaptureCorePlugin,
  DataCaptureContext,
  Camera,
  FrameSourceState,
} from 'scandit-capacitor-datacapture-core';
import { onActivated, onMounted} from "vue"
import {useIonRouter} from "@ionic/vue";
import {useAppState} from "./AppState";

let camera
let dataCaptureContext
let barcodeCount

onMounted(async () => {
  // Initialize the plugins.
  await ScanditCaptureCorePlugin.initializePlugins();

// Enter your Scandit License key here.
// Your Scandit License key is available via your Scandit SDK web account.
  dataCaptureContext = DataCaptureContext.initialize('-- ENTER YOUR SCANDIT LICENSE KEY HERE --');
  // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
  // default and must be turned on to start streaming frames to the data capture context for recognition.
  await startCamera()
  setupScanning()
})

function setupScanning() {
  // The barcode capturing process is configured through barcode capture settings
  // and are then applied to the barcode capture instance that manages barcode recognition.
  const settings = new BarcodeCountSettings();

  // The settings instance initially has all types of barcodes (symbologies) disabled. For the purpose of this
  // sample we enable a very generous set of symbologies. In your own app ensure that you only enable the
  // symbologies that your app requires as every additional enabled symbology has an impact on processing times.
  settings.enableSymbologies([
    Symbology.EAN13UPCA,
    Symbology.EAN8,
    Symbology.UPCE,
    Symbology.QR,
    Symbology.DataMatrix,
    Symbology.Code39,
    Symbology.Code128,
    Symbology.InterleavedTwoOfFive,
  ]);

  // Create new barcode count mode with the settings from above.
  barcodeCount = new BarcodeCount(settings);

  // Register a listener to get informed whenever a new barcode is tracked.
  const barcodeCountListener = {
    didScan: async (_, session) => {
      appState.setCodes(
          session.recognizedBarcodes.map(barcode => ({
            data: barcode.data,
            symbology: barcode.symbology,
          })),
      );
    },
  };

  barcodeCount.addListener(barcodeCountListener);

  // The UI includes two icons (buttons) named “List” and “Exit”.
  // The SDK provides the callbacks so you can add the desired action when those icons are tapped by the user.
  const viewUiListener = {
    didTapListButton: (_) => {
      // Show the current progress but the order is not completed
      router.push('/results');
    },
    didTapExitButton: (_) => {
      appState.exitPressed = true;
      // The order is completed
      router.push({path: '/results', query: {exit: true}});
    },
  };

  const viewListener = {
    didTapRecognizedBarcode: (_, trackedBarcode) => {
      console.log(
          `Tapped recognized barcode with data ${trackedBarcode.barcode.data}`,
      );
    },
    didTapFilteredBarcode: (_, filteredBarcode) => {
      console.log(
          `Tapped on filtered barcode with data ${filteredBarcode.barcode.data}`,
      );
    },
    didTapRecognizedBarcodeNotInList: (_, trackedBarcode) => {
      console.log(
          `Tapped on recognized barcode not in list with data ${trackedBarcode.barcode.data}`,
      );
    },
    didCompleteCaptureList: _ => {
      console.log('Completed capture list');
    },
  };

  // To visualize the on-going barcode capturing process on screen, setup a data capture view that renders the
  // camera preview. The view must be connected to the data capture context.
  const view = new BarcodeCountView({
    context: dataCaptureContext,
    barcodeCount,
    style: BarcodeCountViewStyle.Icon
  });
  view.uiListener = viewUiListener
  view.listener = viewListener;

  // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
  view.connectToElement(document.getElementById('data-capture-view'));

// Switch camera on to start streaming frames and enable the barcode capture mode.
// The camera is started asynchronously and will take some time to completely turn on.
  camera.switchToDesiredState(FrameSourceState.On);
  barcodeCount.isEnabled = true;
}

async function startCamera() {
  if (camera == null) {
    // Use the recommended camera settings for the BarcodeCount mode.
    camera = Camera.withSettings(BarcodeCount.recommendedCameraSettings);
    await dataCaptureContext.setFrameSource(camera);
  }
}

const router = useIonRouter();
const appState = useAppState();

onActivated(async () => {
  if (appState.clearRequired === true) {
    await barcodeCount?.clearAdditionalBarcodes();
    await barcodeCount?.reset();
    barcodeCount.isEnabled = true;
    appState.clearCodes();
    appState.clearRequired = false;

    if (appState.exitPressed) {
      appState.exitPressed = false;
      // The click on the exit button will automatically disable the
      // mode and turn off the camera.
      camera.switchToDesiredState(FrameSourceState.On);
    }
  }

  if (appState.resetRequired === true) {
    await barcodeCount?.clearAdditionalBarcodes();
    await barcodeCount?.reset();
    barcodeCount.isEnabled = true;
    camera.switchToDesiredState(FrameSourceState.On);
    appState.clearCodes();
    appState.resetRequired = false;
  }
})

</script>

<template>
    <div id="data-capture-view"></div>
</template>

<style scoped>

#data-capture-view {
  width: 100%;
  height: 100%;
}

</style>