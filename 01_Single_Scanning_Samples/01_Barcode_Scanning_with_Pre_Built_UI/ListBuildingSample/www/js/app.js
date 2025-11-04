import {
  DataCaptureContext,
  ScanditCaptureCorePlugin,
  Color,
  Brush
} from 'scandit-capacitor-datacapture-core';

import {
  SparkScan,
  SparkScanSettings,
  SparkScanView,
  Symbology,
  SparkScanBarcodeSuccessFeedback,
  SparkScanBarcodeErrorFeedback,
  SymbologyDescription
} from 'scandit-capacitor-datacapture-barcode'


async function runApp() {
  let codes = {};

  // Initialize the plugins
  await ScanditCaptureCorePlugin.initializePlugins();

  // Enter your Scandit License key here.
  // Your Scandit License key is available via your Scandit SDK web account.
  const context = DataCaptureContext.initialize('-- ENTER YOUR SCANDIT LICENSE KEY HERE --');

  // The spark scan process is configured through SparkScan settings
  // which are then applied to the spark scan instance that manages the spark scan.
  const sparkScanSettings = new SparkScanSettings();

  // The settings instance initially has all types of barcodes (symbologies) disabled.
  // For the purpose of this sample we enable a very generous set of symbologies.
  // In your own app ensure that you only enable the symbologies that your app requires
  // as every additional enabled symbology has an impact on processing times.
  sparkScanSettings.enableSymbologies([
    Symbology.EAN13UPCA,
    Symbology.EAN8,
    Symbology.UPCE,
    Symbology.Code39,
    Symbology.Code128,
    Symbology.InterleavedTwoOfFive,
  ]);

  // Some linear/1d barcode symbologies allow you to encode variable-length data.
  // By default, the Scandit Data Capture SDK only scans barcodes in a certain length range.
  // If your application requires scanning of one of these symbologies, and the length is
  // falling outside the default range, you may need to adjust the "active symbol counts"
  // for this symbology. This is shown in the following few lines of code for one of the
  // variable-length symbologies.
  const symbologySettings =
    sparkScanSettings.settingsForSymbology(Symbology.Code39);

  symbologySettings.activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  // Create the spark scan instance.
  // Spark scan will automatically apply and maintain the optimal camera settings.
  window.sparkScan = new SparkScan(sparkScanSettings);

  // Register a listener to get informed whenever a new barcode is scanned.
  const sparkScanListener = {
    didScan: async (_, session) => {
      const barcode = session.newlyRecognizedBarcode;
      if (barcode == null) return;

      if (isValidBarcode(barcode)) {
        codes[barcode.data] = barcode;

        updateResults();
      }
    }
  };

  // Setup the feedback delegate in order to emit different feedback based on the scanned barcode
  const sparkScanFeedbackDelegate = {
    feedbackForBarcode: (barcode) => {
      if (isValidBarcode(barcode)) {
        // return a success feedback
        return new SparkScanBarcodeSuccessFeedback();
      } else {
        // customize and return an error feedback
        return new SparkScanBarcodeErrorFeedback("Wrong barcode", 60, Color.fromHex("#FF0000"), new Brush(Color.fromHex("#FF0000"), Color.fromHex("#FF0000"), 1), null);
      }
    },
  };

  // Add the listener to the spark scan mode.
  window.sparkScan.addListener(sparkScanListener);

  // To visualize the on-going barcode capturing process on screen, setup a spark scan view that renders the
  // camera preview. The view must be connected to the data capture context & spark scan mode.
  window.sparkScanView = SparkScanView.forContext(context, window.sparkScan);
  window.sparkScanView.feedbackDelegate = sparkScanFeedbackDelegate;

  const updateResults = () => {
    const list = document.getElementById('list');
    list.innerHTML = Object.values(codes)
      .map(barcode => {
        const symbology = new SymbologyDescription(barcode.symbology);

        const dataHTML = `<p class="barcodeData">${barcode.data}</p>`
        const symbologyHTML = `<p class="symbology">${symbology.readableName}</p>`
        return `<div class="result">${dataHTML}${symbologyHTML}</div>`;
      })
      .join('');
  }

  const clearList = () => {
    codes = {};
    updateResults();
  }

  const isValidBarcode = (barcode) => {
    return barcode.data != null && barcode.data !== '123456789';
  };

  document.getElementById('clear-list').addEventListener('click', clearList.bind(this));
}

(function () {
  runApp();
})();
