import './ScanContainer.css';

import React, { useRef, useEffect } from 'react';
import { useIonAlert } from '@ionic/react';

import 'scandit-capacitor-datacapture-core';
import 'scandit-capacitor-datacapture-barcode';

// eslint-disable-next-line @typescript-eslint/naming-convention
import { ScanditCaptureCorePlugin } from 'scandit-capacitor-datacapture-core';

interface ContainerProps { }

const initializeApp = async (present: any) => {
    // Initialize the plugins.
    const Scandit = await ScanditCaptureCorePlugin.initializePlugins();

	// There is a Scandit sample license key set below here.
	// This license key is enabled for sample evaluation only.
	// If you want to build your own application, get your license key by signing up for a trial at https://ssl.scandit.com/dashboard/sign-up?p=test
    const context = Scandit.DataCaptureContext.forLicenseKey('AQIzpSC5AyYeKA6KZgjthjEmMbJBFJEpiUUjkCJu72AUVSWyGjN0xNt0OVgASxKO6FwLejYDRFGraFReiUwL8wp3a8mgX0elHhmx0JhY/QYrbQHJjGIhQAhjcW1cYr+ogWCDUmhM2KuWPlJXBkSGmbwinMAqKusC5zQHGoY6JDKJXbzv97CRhGdjlfgjhTZErgfs+P/fLp0cCCAmP+TTZ6jiyA/my9Ojy7ugt7DKay2ZAkezAO8OwAtnl0GUIflPz6KI68hRPaAV18wwS030+riqfDIcFQ+3BAfqRMpJxrYfKZOvvwyTAbC+5ZzgFmwd9YR0vbFToSmHDemEyRVufdMw0s+jqCHsCY5ox8jBfV1RkmDQxCckkJoS3rhPmLgEyiTm+gI0y30swn2orZ4aaml+aoA55vhN4jY+ZAkMkmhipAXK/TMzyHo4iUDA4/v3TgiJbodw27iI/+f6YxIpA+/nAEItRH7C3vuxAdo8lmk5q0QeCkc6QA0FhQa6S/cu8yrehTi+Lb8khFmt3gkwEubowGdg3cg8KoBsDgY59lAKWy55rmVznq7REv6ugw1KwgW724K4s5ILfgQ2NcV/jFgeTReaTSVYUWKZGXdJmDrteX7tgmdfkpjaCrijgSGwYRaATxVKitCYIPyfuipsSHdC0iLqCoJ8CIc2UclvimPXDzDLk83uIRFjgspykVm+eIsKiMuxrW6OlB7o7NWPcJtEcyO74Mq6scB8+bWP5eJFIPazUcZEtxG2u3UpWz7+EoBADwbUI9G63HcTwt2bi8JZo16pfGxsWti3DJ1HWooGSIVvyZ2jePvhBcuu+EbtOucgdPDvDTCTpm/V');

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
        didScan: (mode: any, session: any, _: any) => {
            const barcode = session.newlyRecognizedBarcodes[0];
            const symbology = new Scandit.SymbologyDescription(barcode.symbology);

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
