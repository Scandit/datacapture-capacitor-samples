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
  SparkScanBarcodeErrorFeedback
} from 'scandit-capacitor-datacapture-barcode'


async function runApp() {
  let codes = {};

  // Initialize the plugins
  await ScanditCaptureCorePlugin.initializePlugins();

  // There is a Scandit sample license key set below here.
  // This license key is enabled for sample evaluation only.
  // If you want to build your own application, get your license key by signing up for a trial at https://ssl.scandit.com/dashboard/sign-up?p=test
  const context = DataCaptureContext.forLicenseKey('AZ707AsCLmJWHbYO4RjqcVAEgAxmNGYcF3Ytg4RiKa/lWTQ3IXkfVZhSSi0yOzuabn9STRdnzTLybIiJVkVZU2QK5jeqbn1HGCGXQ+9lqsN8VUaTw1IeuHJo+9mYVdv3I1DhedtSy89aKA4QugKI5d9ykKaXGohXjlI+PB5ju8Tyc80FPAC3WP9D8oKBcWyemTLQjoUu0Nl3T7mVyFIXMPshQeYddkjMQ1sVV9Jcuf1CbI9riUJWzbNUb4NcB4MoV0BHuyALUPtuM2+cBkX3bPN0AxjD9WC7KflL2UrsZeenvl/aDx2yU4t5vsa2BImNTyEqdVs+rmrGUzRdbYvSUFzKBeiBncLAASqnexTuSzh9KfEm/cKrVlWekP+zOkrilICkn3KVNY6g9RQd8FrsHTBI9OBbMpC79BTwuzHcnlFUG5S3ru/viJ2+f9JEEejxDbdJ7u4JohfBuUYBSEBQ/XzEPMdpqWcmxHGWF4j7jQy83B9Wlgrhd8xNWKjgAViI0bcebjnB7o6yuKacXICH/lo787RhnXSjqjQhJBCbEvwxHQZiEfWPdVKtY7EM+x8HFr6j3orKllKOMJ9asZ5bJYz9aIHlOWeRGm90guQn0KWiPwuKbUOQIMxFAOem2zcSTt4OfqS6Ci0Y6lk7FIrgpbaz8L1PW64kkjrZB6FtQ8OppmsyZ/QTvrHYFQFTH7MpamDviRjEKMyiD2ID6ypl+Meeme6cZYRJVujr6b4tweQCsfNEYhuDiMJaWQ57R0n2XdF0zkepLVc0yA2Q3wWhxSIASLnv6GTCYYVnDJnkrr6VaTv8RVUOp8h8U34wGDanamQ+39+rESMD59E288OKgFvZZWN9Ltu/VQCcjYCYT1RTDcA9co3Y18aGpDxvtLVEGJ8QDPv1E//IYAYEhXqu8r9xbsx/hTwZmLpNKyXGPRr9+hpufTAcAj908f2kuQ==');

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
  window.sparkScan = SparkScan.forSettings(sparkScanSettings);

  // Register a listener to get informed whenever a new barcode is scanned.
  const sparkScanListener = {
    didScan: (_, session) => {
      const barcode = session.newlyRecognizedBarcodes[0];

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
        return new SparkScanBarcodeErrorFeedback("This code should not have been scanned", 60, Color.fromHex("#FF0000"), new Brush(Color.fromHex("#FF0000"), Color.fromHex("#FF0000"), 1), null);
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
        const dataHTML = `<p class="barcodeData">${barcode.data}</p>`
        const symbologyHTML = `<p class="symbology">${barcode.symbology}</p>`
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
