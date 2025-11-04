import './ScanContainer.css';

import React, { useRef, useEffect } from 'react';
import { useIonAlert } from '@ionic/react';

// eslint-disable-next-line @typescript-eslint/naming-convention
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
} from 'scandit-capacitor-datacapture-barcode';

interface ContainerProps { }

const initializeApp = async (present: any) => {
    // Initialize the plugins.
    await ScanditCaptureCorePlugin.initializePlugins();

	// Enter your Scandit License key here.
    // Your Scandit License key is available via your Scandit SDK web account.
    const context = DataCaptureContext.initialize('-- ENTER YOUR SCANDIT LICENSE KEY HERE --');

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
    const barcodeCapture = new BarcodeCapture(settings);

    // Register a listener to get informed whenever a new barcode got recognized.
    barcodeCapture.addListener({
        didScan: async (mode: any, session: any, _: any) => {
            const barcode = session.newlyRecognizedBarcode;
            if (barcode == null) return;
            const symbology = new SymbologyDescription(barcode.symbology);

            // The `alert` call blocks execution until it's dismissed by the user. As no further frames would be
            // processed until the alert dialog is dismissed, we're showing the alert through a timeout and
            // disabling the barcode capture mode until the dialog is dismissed, as you should not block the
            // BarcodeCaptureListener callbacks for longer periods of time. See the documentation to learn
            // more about this.

            mode.isEnabled = false;
            showResult(`Scanned: ${barcode.data} (${symbology.readableName})`, mode, present);
        }
    });

    // Set the barcode capture mode to the context.
    context.setMode(barcodeCapture);

    // To visualize the on-going barcode capturing process on screen, setup a data capture view that renders the
    // camera preview. The view must be connected to the data capture context.
    const view = DataCaptureView.forContext(context);

    // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
    view.connectToElement(document.getElementById('dataCaptureView')!);

    // Add a barcode capture overlay to the data capture view to render the location of captured barcodes on top of
    // the video preview. This is optional, but recommended for better visual feedback.
    const overlay = new BarcodeCaptureOverlay(barcodeCapture);
    overlay.viewfinder = new RectangularViewfinder(
        RectangularViewfinderStyle.Square,
        RectangularViewfinderLineStyle.Light,
    );

    // Add the overlay to the view.
    view.addOverlay(overlay);

    // Switch camera on to start streaming frames and enable the barcode capture mode.
    // The camera is started asynchronously and will take some time to completely turn on.
    camera?.switchToDesiredState(FrameSourceState.On);
    barcodeCapture.isEnabled = true;
};

const showResult = async (message: string, barcodeCapture: any, present: any) => {
    // The DataCapture view is drawn on top of the webview. To display html elements in place of the
    // capture view, we set its attached element's z-index to -1.
    document.getElementById('dataCaptureView')!.style.zIndex = '-1';

    await present({
        header: 'Scan result',
        backdropDismiss: false,
        message,
        buttons: [
            { text: 'OK' },
        ],
        onDidDismiss: () => {
            barcodeCapture.isEnabled = true;
            // To show the DataCapture view again, simply set the z-index property of its attached element to 1
            document.getElementById('dataCaptureView')!.style.zIndex = '1';
        },
    })
};

const ScanContainer: React.FC<ContainerProps> = () => {

    const dataCaptureViewRef = useRef(null);
    const [present] = useIonAlert();

    useEffect(() => {
        initializeApp(present);
    }, [present]);

  return (
    <div className="container">
        <div id="dataCaptureView" className="scan__content" ref={dataCaptureViewRef} />
    </div>
  );
};

export default ScanContainer;
