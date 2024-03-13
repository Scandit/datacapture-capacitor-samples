import {
  DataCaptureContext,
  ScanditCaptureCorePlugin,
} from 'scandit-capacitor-datacapture-core';

import {
  SparkScan,
  SparkScanSettings,
  SparkScanViewErrorFeedback,
  SparkScanViewSuccessFeedback,
  SparkScanView,
  Symbology
} from 'scandit-capacitor-datacapture-barcode'


async function runApp() {
  let codes = {};

  // Initialize the plugins
  await ScanditCaptureCorePlugin.initializePlugins();

  // There is a Scandit sample license key set below here.
  // This license key is enabled for sample evaluation only.
  // If you want to build your own application, get your license key by signing up for a trial at https://ssl.scandit.com/dashboard/sign-up?p=test
  const context = DataCaptureContext.forLicenseKey('AbvELRLKNvXhGsHO0zMIIg85n3IiQdKMA2p5yeVDSOSZSZg/BhX401FXc+2UHPun8Rp2LRpw26tYdgnIJlXiLAtmXfjDZNQzZmrZY2R0QaJaXJC34UtcQE12hEpIYhu+AmjA5cROhJN3CHPoHDns+ho12ibrRAoFrAocoBIwCVzuTRHr0U6pmCKoa/Mn3sNPdINHh97m1X9Al9xjh3VOTNimP6ZjrHLVWEJSOdp2QYOnqn5izP1329PVcZhn8gqlGCRh+LJytbKJYI/KIRbMy3bNOyq5kNnr2IlOqaoXRgYdz2IU+jIWw8Cby9XoSB1zkphiYMmlCUqrDzxLUmTAXF4rSWobiM+OxnoImDqISpunJBQz0a5DSeT5Zf0lwwvXQLX4ghkgXozyYYfYvIKsqxJLZoza8g1BFsJ1i3fb0JYP2Ju209OMN2NTJifAu9ZJjQKGWS76Rmr/jre13jCqGgx5SX9F2lA2ZpF2AEb6rmYYmMtL9CPwWvstM+W295WvscH+gCBccZ9q3rxfIsak6cV2T50/2uBWfJJka6kL9UOjMOG3BOGKx+O+KWT/twwvOC+GcvC8s1qMwGNNM6G+/m7fG5Xtl5wtp3QhpzPJbBHSmlkYbxXQx0SpuWBmvxygyKOi3lUzz3gRzOdykWRXzrhiMAp5bb1y6n6g4O2v2TVgzWWF8vwZ6F60ehYDUq7pbusgT4Fl3fV7fYPgLxMMvXKduMmUlWyGv3CWL9LfvoY/hLl7RxoyUryTMmSfRVBcsKs+MWYJGh1iIvWk1UhOChb9IGI2PzUsHz7+OikuYMjKhR8LZZYalXpPiEVfT66yy75M5DODcjXRoFZU');

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
        // Emit success feedback
        window.sparkScanView.emitFeedback(new SparkScanViewSuccessFeedback(null));

        codes[barcode.data] = barcode;

        updateResults();
      } else {
        // Show an error feedback and automatically resume scanning after 60 seconds
        window.sparkScanView.emitFeedback(new SparkScanViewErrorFeedback('This code should not have been scanned', 60 * 1000, null, null));
      }
    }
  };

  // Add the listener to the spark scan mode.
  window.sparkScan.addListener(sparkScanListener);

  // To visualize the on-going barcode capturing process on screen, setup a spark scan view that renders the
  // camera preview. The view must be connected to the data capture context & spark scan mode.
  window.sparkScanView = SparkScanView.forContext(context, window.sparkScan);

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
