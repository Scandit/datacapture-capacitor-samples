import { Component } from '@angular/core';

import { AlertController, Platform } from '@ionic/angular';

import {
  Camera,
  DataCaptureContext,
  DataCaptureView,
  FrameSourceState,
  RectangularViewfinder,
  RectangularViewfinderLineStyle,
  RectangularViewfinderStyle,
  ScanditCaptureCorePlugin
} from 'scandit-capacitor-datacapture-core';

import {
  BarcodeCaptureSettings,
  Symbology,
  BarcodeCapture,
  SymbologyDescription,
  BarcodeCaptureOverlay,
  BarcodeCaptureOverlayStyle
} from 'scandit-capacitor-datacapture-barcode';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  barcodeCapture;

  constructor(
    private platform: Platform,
    private alertController: AlertController,
  ) {
    this.barcodeCapture = null;
    this.initializeApp();
  }

  initializeApp = () => {
    this.platform.ready().then(async () => {
      // Initialize the plugins.
      await ScanditCaptureCorePlugin.initializePlugins();

      // There is a Scandit sample license key set below here.
      // This license key is enabled for sample evaluation only.
      // If you want to build your own application, get your license
      // key by signing up for a trial at https://ssl.scandit.com/dashboard/sign-up?p=test
      const context = DataCaptureContext.forLicenseKey('AbvELRLKNvXhGsHO0zMIIg85n3IiQdKMA2p5yeVDSOSZSZg/BhX401FXc+2UHPun8Rp2LRpw26tYdgnIJlXiLAtmXfjDZNQzZmrZY2R0QaJaXJC34UtcQE12hEpIYhu+AmjA5cROhJN3CHPoHDns+ho12ibrRAoFrAocoBIwCVzuTRHr0U6pmCKoa/Mn3sNPdINHh97m1X9Al9xjh3VOTNimP6ZjrHLVWEJSOdp2QYOnqn5izP1329PVcZhn8gqlGCRh+LJytbKJYI/KIRbMy3bNOyq5kNnr2IlOqaoXRgYdz2IU+jIWw8Cby9XoSB1zkphiYMmlCUqrDzxLUmTAXF4rSWobiM+OxnoImDqISpunJBQz0a5DSeT5Zf0lwwvXQLX4ghkgXozyYYfYvIKsqxJLZoza8g1BFsJ1i3fb0JYP2Ju209OMN2NTJifAu9ZJjQKGWS76Rmr/jre13jCqGgx5SX9F2lA2ZpF2AEb6rmYYmMtL9CPwWvstM+W295WvscH+gCBccZ9q3rxfIsak6cV2T50/2uBWfJJka6kL9UOjMOG3BOGKx+O+KWT/twwvOC+GcvC8s1qMwGNNM6G+/m7fG5Xtl5wtp3QhpzPJbBHSmlkYbxXQx0SpuWBmvxygyKOi3lUzz3gRzOdykWRXzrhiMAp5bb1y6n6g4O2v2TVgzWWF8vwZ6F60ehYDUq7pbusgT4Fl3fV7fYPgLxMMvXKduMmUlWyGv3CWL9LfvoY/hLl7RxoyUryTMmSfRVBcsKs+MWYJGh1iIvWk1UhOChb9IGI2PzUsHz7+OikuYMjKhR8LZZYalXpPiEVfT66yy75M5DODcjXRoFZU');

      // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
      // default and must be turned on to start streaming frames to the data capture context for recognition.
      const camera = Camera.default;
      context.setFrameSource(camera);

      // The barcode capturing process is configured through barcode capture settings
      // and are then applied to the barcode capture instance that manages barcode recognition.
      const settings = new BarcodeCaptureSettings();

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

      // Some linear/1d barcode symbologies allow you to encode variable-length data. By default, the Scandit
      // Data Capture SDK only scans barcodes in a certain length range. If your application requires scanning of one
      // of these symbologies, and the length is falling outside the default range, you may need to adjust the "active
      // symbol counts" for this symbology. This is shown in the following few lines of code for one of the
      // variable-length symbologies.
      const symbologySettings = settings.settingsForSymbology(Symbology.Code39);
      symbologySettings.activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

      // Create new barcode capture mode with the settings from above.
      this.barcodeCapture = BarcodeCapture.forContext(context, settings);

      // Register a listener to get informed whenever a new barcode got recognized.
      this.barcodeCapture.addListener({
        didScan: (barcodeCapture, session, _) => {
          const barcode = session.newlyRecognizedBarcodes[0];
          const symbology = new SymbologyDescription(barcode.symbology);

          // The `alert` call blocks execution until it's dismissed by the user. As no further frames would be
          // processed until the alert dialog is dismissed, we're showing the alert through a timeout and disabling
          // the barcode capture mode until the dialog is dismissed, as you should not block the BarcodeCaptureListener
          // callbacks for longer periods of time. See the documentation to learn more about this.

          barcodeCapture.isEnabled = false;
          this.showResult(`Scanned: ${barcode.data} (${symbology.readableName})`);
        }
      });

      // To visualize the on-going barcode capturing process on screen, setup a data capture view that renders the
      // camera preview. The view must be connected to the data capture context.
      const view = DataCaptureView.forContext(context);

      // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
      view.connectToElement(document.getElementById('dataCaptureView'));

      // Add a barcode capture overlay to the data capture view to render the location of captured barcodes on top of
      // the video preview. This is optional, but recommended for better visual feedback.
      const overlay = BarcodeCaptureOverlay.withBarcodeCaptureForViewWithStyle(
        this.barcodeCapture,
        view,
        BarcodeCaptureOverlayStyle.Frame
      );
      overlay.viewfinder = new RectangularViewfinder(
        RectangularViewfinderStyle.Square,
        RectangularViewfinderLineStyle.Light,
      );

      // Switch camera on to start streaming frames and enable the barcode capture mode.
      // The camera is started asynchronously and will take some time to completely turn on.
      camera.switchToDesiredState(FrameSourceState.On);
      this.barcodeCapture.isEnabled = true;
    });
  };

  showResult = async (result) => {
    const alert = await this.alertController.create({
      header: 'Scan result',
      message: result,
      backdropDismiss: false,
      buttons: [
        {
          text: 'OK',
          id: 'confirm-button',
          handler: () => {
            this.barcodeCapture.isEnabled = true;
            // To show the DataCapture view again, simply set the z-index property of its attached element to 1
            document.getElementById('dataCaptureView').style.zIndex = '1';
          }
        }
      ]
    });

    // The DataCapture view is drawn on top of the webview. To display html elements in place of the
    // capture view, we set its attached element's z-index to -1.
    document.getElementById('dataCaptureView').style.zIndex = '-1';
    await alert.present();
  };
}
