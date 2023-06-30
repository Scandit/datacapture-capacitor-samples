import 'scandit-capacitor-datacapture-core';
import 'scandit-capacitor-datacapture-barcode';

import { ScanditCaptureCorePlugin } from 'scandit-capacitor-datacapture-core';

let Scandit;
let barcodeSelectionSettings;
let barcodeSelection;

async function runApp() {
    // Initialize the plugins.
    Scandit = await ScanditCaptureCorePlugin.initializePlugins();

    // There is a Scandit sample license key set below here.
    // This license key is enabled for sample evaluation only.
    // If you want to build your own application, get your license key by signing up for a trial at https://ssl.scandit.com/dashboard/sign-up?p=test
    const context = Scandit.DataCaptureContext.forLicenseKey('AQIzpSC5AyYeKA6KZgjthjEmMbJBFJEpiUUjkCJu72AUVSWyGjN0xNt0OVgASxKO6FwLejYDRFGraFReiUwL8wp3a8mgX0elHhmx0JhY/QYrbQHJjGIhQAhjcW1cYr+ogWCDUmhM2KuWPlJXBkSGmbwinMAqKusC5zQHGoY6JDKJXbzv97CRhGdjlfgjhTZErgfs+P/fLp0cCCAmP+TTZ6jiyA/my9Ojy7ugt7DKay2ZAkezAO8OwAtnl0GUIflPz6KI68hRPaAV18wwS030+riqfDIcFQ+3BAfqRMpJxrYfKZOvvwyTAbC+5ZzgFmwd9YR0vbFToSmHDemEyRVufdMw0s+jqCHsCY5ox8jBfV1RkmDQxCckkJoS3rhPmLgEyiTm+gI0y30swn2orZ4aaml+aoA55vhN4jY+ZAkMkmhipAXK/TMzyHo4iUDA4/v3TgiJbodw27iI/+f6YxIpA+/nAEItRH7C3vuxAdo8lmk5q0QeCkc6QA0FhQa6S/cu8yrehTi+Lb8khFmt3gkwEubowGdg3cg8KoBsDgY59lAKWy55rmVznq7REv6ugw1KwgW724K4s5ILfgQ2NcV/jFgeTReaTSVYUWKZGXdJmDrteX7tgmdfkpjaCrijgSGwYRaATxVKitCYIPyfuipsSHdC0iLqCoJ8CIc2UclvimPXDzDLk83uIRFjgspykVm+eIsKiMuxrW6OlB7o7NWPcJtEcyO74Mq6scB8+bWP5eJFIPazUcZEtxG2u3UpWz7+EoBADwbUI9G63HcTwt2bi8JZo16pfGxsWti3DJ1HWooGSIVvyZ2jePvhBcuu+EbtOucgdPDvDTCTpm/V');

    // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
    // default and must be turned on to start streaming frames to the data capture context for recognition.
    const camera = Scandit.Camera.default;
    context.setFrameSource(camera);

    // Use the recommended camera settings for the BarcodeSelection mode as default settings.
    const cameraSettings = Scandit.BarcodeSelection.recommendedCameraSettings;
    camera.applySettings(cameraSettings).catch(console.warn);

    // The barcode selection process is configured through barcode selection settings
    // and are then applied to the barcode selection instance that manages barcode recognition.
    barcodeSelectionSettings = new Scandit.BarcodeSelectionSettings();

    // The settings instance initially has all types of barcodes (symbologies) disabled. For the purpose of this
    // sample we enable a very generous set of symbologies. In your own app ensure that you only enable the
    // symbologies that your app requires as every additional enabled symbology has an impact on processing times.
    barcodeSelectionSettings.enableSymbologies([
        Scandit.Symbology.EAN13UPCA,
        Scandit.Symbology.EAN8,
        Scandit.Symbology.UPCE,
        Scandit.Symbology.QR,
        Scandit.Symbology.DataMatrix,
        Scandit.Symbology.Code39,
        Scandit.Symbology.Code128,
    ]);

    // Create new barcode selection mode with the settings from above.
    barcodeSelection = Scandit.BarcodeSelection.forContext(context, barcodeSelectionSettings);

    // Register a listener to get informed whenever a new barcode got recognized.
    barcodeSelection.addListener({
        didUpdateSelection: (mode, session, _) => {
            const barcode = session.newlySelectedBarcodes[0];

            if (!barcode) { return }

            const symbology = new Scandit.SymbologyDescription(barcode.symbology);

            session.getCount(barcode).then(count => {
                showResult(`Scan Results<br>${symbology.readableName}: ${barcode.data}<br>Times: ${count}`);
            });
        }
    });

    // To visualize the on-going barcode selection process on screen, setup a data capture view that renders the
    // camera preview. The view must be connected to the data capture context.
    const view = Scandit.DataCaptureView.forContext(context);

    // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
    view.connectToElement(document.getElementById('data-capture-view'));

    // Add a barcode selection overlay to the data capture view to render the location of captured barcodes on top of
    // the video preview. This is optional, but recommended for better visual feedback.
    Scandit.BarcodeSelectionBasicOverlay.withBarcodeSelectionForView(barcodeSelection, view);

    window.toggleBarcodeSelectionType(true);
    // Switch camera on to start streaming frames and enable the barcode selection mode.
    // The camera is started asynchronously and will take some time to completely turn on.
    camera.switchToDesiredState(Scandit.FrameSourceState.On);
    barcodeSelection.isEnabled = true;
}

window.showResult = result => {
    if (document.querySelector('#result')) {
        document.querySelector('#result').parentElement.removeChild(document.querySelector('#result'));
    }

    const resultElement = document.createElement('div');
    resultElement.id = "result";
    resultElement.classList = "result";
    resultElement.innerHTML = `<p>${result}</p>`;
    document.querySelector('#data-capture-view').appendChild(resultElement);
    document.getElementById('data-capture-view').style.zIndex = -1;

    clearTimeout(window.timeout);
    window.timeout = setTimeout(window.continueScanning, 500);
}

window.continueScanning = () => {
    document.getElementById('data-capture-view').style.zIndex = 1;
    document.querySelector('#result').parentElement.removeChild(document.querySelector('#result'));
}

window.toggleBarcodeSelectionType = (forceIsTapSelection) => {
    if (forceIsTapSelection === true || barcodeSelectionSettings.selectionType instanceof Scandit.BarcodeSelectionAimerSelection) {
        document.getElementById('tapToSelect').className = 'selected';
        document.getElementById('aimToSelect').className = '';
        barcodeSelectionSettings.selectionType = Scandit.BarcodeSelectionTapSelection.tapSelection;
        barcodeSelection.applySettings(barcodeSelectionSettings);
    } else {
        document.getElementById('tapToSelect').className = '';
        document.getElementById('aimToSelect').className = 'selected';
        barcodeSelectionSettings.selectionType = Scandit.BarcodeSelectionAimerSelection.aimerSelection;
        barcodeSelection.applySettings(barcodeSelectionSettings);
    }
}

(function () {
    runApp();
})();
