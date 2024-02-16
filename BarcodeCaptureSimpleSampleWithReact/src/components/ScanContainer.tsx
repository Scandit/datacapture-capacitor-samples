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
    BarcodeCaptureOverlayStyle
} from 'scandit-capacitor-datacapture-barcode';

interface ContainerProps { }

const initializeApp = async (present: any) => {
    // Initialize the plugins.
    await ScanditCaptureCorePlugin.initializePlugins();

	// There is a Scandit sample license key set below here.
	// This license key is enabled for sample evaluation only.
	// If you want to build your own application, get your license key by signing up for a trial at https://ssl.scandit.com/dashboard/sign-up?p=test
    const context = DataCaptureContext.forLicenseKey('AfUkdmKlRiP5FdlOFQnOhu4V3j5LFKttPGTWXFd7CkuRaTAstDqq78RrBm2ZG9LRu1T8CNgP6oLScGrUoEwfmP1TUXonIGCl2g9Fo5NYtmK/aEV8FX/YcdRKfWS5bJrTcWGDHdcsJxT6Me5C3RMdWZkdqeR5GEjDzT6dO4ZPWOBbNLjpkgZ0/MjtYQPKqSV+bSZC7+ekFaXovSKWfXV89BXtta/6sZHFJOMKxyvzh6zw5yA+NDR67OXoWKCrrNq4AOuBlt1ZelIHCqjQgTy/SZG110eJr5e4pth38Bx0fXE8FGX92BoxwJr1EG+P5CEJF8EFMy2zf87aJQYuzHmg0nM7czcNqLUd9F23uxntZYjKlwgWmmSzev/ozaumEvbW9RVW1bUQmV8pQ1SWILBuzQPeAw8iWOWgnTH18tH7cT+fUJumvM2rn7LWx9JYLAKBKRuwe2sDh3l5eqobZKdarIRsKVgXa4pw+gkYKuplzTo+Bzh70rbmtgq3IJ8hSpdoZITzfUQSwXkrgdQa5Cmrpxz9gXManBRt01h3eFXG7znZU9w0+uzzV/b5e6MQcPncODrCQOq0kfEBYgRoLAwVCOKnxyWQkqRbUpsTN2wy2MTg10flYhR/zf1eXdiUjgPUhWj8LtmgxJELYky7uMu46abfCkAw73e+12iJmlf9/tmTFk34La9ZQiF/BYps5h327ZW8qobay+Esx1i9dsaFKYt/nCN8jZdUYD/df+/vApyK4PMbph9EPRe5u0alg8BqpEExnkQsy1W7r85yngO/rxSXsY6rTMoTXb/87ul8uQnsrD41ZLtFdzo0OlbNTeNOI1mJz/E6/SOLbRRK');

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
    const barcodeCapture = BarcodeCapture.forContext(context, settings);

    // Register a listener to get informed whenever a new barcode got recognized.
    barcodeCapture.addListener({
        didScan: (mode: any, session: any, _: any) => {
            const barcode = session.newlyRecognizedBarcodes[0];
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

    // To visualize the on-going barcode capturing process on screen, setup a data capture view that renders the
    // camera preview. The view must be connected to the data capture context.
    const view = DataCaptureView.forContext(context);

    // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
    view.connectToElement(document.getElementById('dataCaptureView')!);

    // Add a barcode capture overlay to the data capture view to render the location of captured barcodes on top of
    // the video preview. This is optional, but recommended for better visual feedback.
    const overlay = BarcodeCaptureOverlay.withBarcodeCaptureForViewWithStyle(
        barcodeCapture,
        view,
        BarcodeCaptureOverlayStyle.Frame
    );
    overlay.viewfinder = new RectangularViewfinder(
        RectangularViewfinderStyle.Square,
        RectangularViewfinderLineStyle.Light,
    );

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
