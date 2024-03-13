import {
    Camera,
    DataCaptureContext,
    DataCaptureView,
    FrameSourceState,
    ScanditCaptureCorePlugin
} from 'scandit-capacitor-datacapture-core';

import {
    BarcodeSelection,
    BarcodeSelectionAimerSelection,
    BarcodeSelectionBasicOverlay,
    BarcodeSelectionSettings,
    BarcodeSelectionTapSelection,
    Symbology,
    SymbologyDescription,
} from 'scandit-capacitor-datacapture-barcode';

let barcodeSelectionSettings;
let barcodeSelection;

async function runApp() {
    // Initialize the plugins.
    await ScanditCaptureCorePlugin.initializePlugins();

    // There is a Scandit sample license key set below here.
    // This license key is enabled for sample evaluation only.
    // If you want to build your own application, get your license key by signing up for a trial at https://ssl.scandit.com/dashboard/sign-up?p=test
    const context = DataCaptureContext.forLicenseKey('AbvELRLKNvXhGsHO0zMIIg85n3IiQdKMA2p5yeVDSOSZSZg/BhX401FXc+2UHPun8Rp2LRpw26tYdgnIJlXiLAtmXfjDZNQzZmrZY2R0QaJaXJC34UtcQE12hEpIYhu+AmjA5cROhJN3CHPoHDns+ho12ibrRAoFrAocoBIwCVzuTRHr0U6pmCKoa/Mn3sNPdINHh97m1X9Al9xjh3VOTNimP6ZjrHLVWEJSOdp2QYOnqn5izP1329PVcZhn8gqlGCRh+LJytbKJYI/KIRbMy3bNOyq5kNnr2IlOqaoXRgYdz2IU+jIWw8Cby9XoSB1zkphiYMmlCUqrDzxLUmTAXF4rSWobiM+OxnoImDqISpunJBQz0a5DSeT5Zf0lwwvXQLX4ghkgXozyYYfYvIKsqxJLZoza8g1BFsJ1i3fb0JYP2Ju209OMN2NTJifAu9ZJjQKGWS76Rmr/jre13jCqGgx5SX9F2lA2ZpF2AEb6rmYYmMtL9CPwWvstM+W295WvscH+gCBccZ9q3rxfIsak6cV2T50/2uBWfJJka6kL9UOjMOG3BOGKx+O+KWT/twwvOC+GcvC8s1qMwGNNM6G+/m7fG5Xtl5wtp3QhpzPJbBHSmlkYbxXQx0SpuWBmvxygyKOi3lUzz3gRzOdykWRXzrhiMAp5bb1y6n6g4O2v2TVgzWWF8vwZ6F60ehYDUq7pbusgT4Fl3fV7fYPgLxMMvXKduMmUlWyGv3CWL9LfvoY/hLl7RxoyUryTMmSfRVBcsKs+MWYJGh1iIvWk1UhOChb9IGI2PzUsHz7+OikuYMjKhR8LZZYalXpPiEVfT66yy75M5DODcjXRoFZU');

    // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
    // default and must be turned on to start streaming frames to the data capture context for recognition.
    const camera = Camera.default;
    context.setFrameSource(camera);

    // Use the recommended camera settings for the BarcodeSelection mode as default settings.
    const cameraSettings = BarcodeSelection.recommendedCameraSettings;
    camera.applySettings(cameraSettings).catch(console.warn);

    // The barcode selection process is configured through barcode selection settings
    // and are then applied to the barcode selection instance that manages barcode recognition.
    barcodeSelectionSettings = new BarcodeSelectionSettings();

    // The settings instance initially has all types of barcodes (symbologies) disabled. For the purpose of this
    // sample we enable a very generous set of symbologies. In your own app ensure that you only enable the
    // symbologies that your app requires as every additional enabled symbology has an impact on processing times.
    barcodeSelectionSettings.enableSymbologies([
        Symbology.EAN13UPCA,
        Symbology.EAN8,
        Symbology.UPCE,
        Symbology.QR,
        Symbology.DataMatrix,
        Symbology.Code39,
        Symbology.Code128,
    ]);

    // Create new barcode selection mode with the settings from above.
    barcodeSelection = BarcodeSelection.forContext(context, barcodeSelectionSettings);

    // Register a listener to get informed whenever a new barcode got recognized.
    barcodeSelection.addListener({
        didUpdateSelection: (mode, session, _) => {
            const barcode = session.newlySelectedBarcodes[0];

            if (!barcode) { return }

            const symbology = new SymbologyDescription(barcode.symbology);

            session.getCount(barcode).then(count => {
                showResult(`Scan Results<br>${symbology.readableName}: ${barcode.data}<br>Times: ${count}`);
            });
        }
    });

    // To visualize the on-going barcode selection process on screen, setup a data capture view that renders the
    // camera preview. The view must be connected to the data capture context.
    const view = DataCaptureView.forContext(context);

    // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
    view.connectToElement(document.getElementById('data-capture-view'));

    // Add a barcode selection overlay to the data capture view to render the location of captured barcodes on top of
    // the video preview. This is optional, but recommended for better visual feedback.
    BarcodeSelectionBasicOverlay.withBarcodeSelectionForView(barcodeSelection, view);

    window.toggleBarcodeSelectionType(true);
    // Switch camera on to start streaming frames and enable the barcode selection mode.
    // The camera is started asynchronously and will take some time to completely turn on.
    camera.switchToDesiredState(FrameSourceState.On);
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
    if (forceIsTapSelection === true || barcodeSelectionSettings.selectionType instanceof BarcodeSelectionAimerSelection) {
        document.getElementById('tapToSelect').className = 'selected';
        document.getElementById('aimToSelect').className = '';
        barcodeSelectionSettings.selectionType = BarcodeSelectionTapSelection.tapSelection;
        barcodeSelection.applySettings(barcodeSelectionSettings);
    } else {
        document.getElementById('tapToSelect').className = '';
        document.getElementById('aimToSelect').className = 'selected';
        barcodeSelectionSettings.selectionType = BarcodeSelectionAimerSelection.aimerSelection;
        barcodeSelection.applySettings(barcodeSelectionSettings);
    }
}

(function () {
    runApp();
})();
