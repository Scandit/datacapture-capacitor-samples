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
    const context = DataCaptureContext.forLicenseKey('AZ707AsCLmJWHbYO4RjqcVAEgAxmNGYcF3Ytg4RiKa/lWTQ3IXkfVZhSSi0yOzuabn9STRdnzTLybIiJVkVZU2QK5jeqbn1HGCGXQ+9lqsN8VUaTw1IeuHJo+9mYVdv3I1DhedtSy89aKA4QugKI5d9ykKaXGohXjlI+PB5ju8Tyc80FPAC3WP9D8oKBcWyemTLQjoUu0Nl3T7mVyFIXMPshQeYddkjMQ1sVV9Jcuf1CbI9riUJWzbNUb4NcB4MoV0BHuyALUPtuM2+cBkX3bPN0AxjD9WC7KflL2UrsZeenvl/aDx2yU4t5vsa2BImNTyEqdVs+rmrGUzRdbYvSUFzKBeiBncLAASqnexTuSzh9KfEm/cKrVlWekP+zOkrilICkn3KVNY6g9RQd8FrsHTBI9OBbMpC79BTwuzHcnlFUG5S3ru/viJ2+f9JEEejxDbdJ7u4JohfBuUYBSEBQ/XzEPMdpqWcmxHGWF4j7jQy83B9Wlgrhd8xNWKjgAViI0bcebjnB7o6yuKacXICH/lo787RhnXSjqjQhJBCbEvwxHQZiEfWPdVKtY7EM+x8HFr6j3orKllKOMJ9asZ5bJYz9aIHlOWeRGm90guQn0KWiPwuKbUOQIMxFAOem2zcSTt4OfqS6Ci0Y6lk7FIrgpbaz8L1PW64kkjrZB6FtQ8OppmsyZ/QTvrHYFQFTH7MpamDviRjEKMyiD2ID6ypl+Meeme6cZYRJVujr6b4tweQCsfNEYhuDiMJaWQ57R0n2XdF0zkepLVc0yA2Q3wWhxSIASLnv6GTCYYVnDJnkrr6VaTv8RVUOp8h8U34wGDanamQ+39+rESMD59E288OKgFvZZWN9Ltu/VQCcjYCYT1RTDcA9co3Y18aGpDxvtLVEGJ8QDPv1E//IYAYEhXqu8r9xbsx/hTwZmLpNKyXGPRr9+hpufTAcAj908f2kuQ==');

    // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
    // default and must be turned on to start streaming frames to the data capture context for recognition.
    // Use the recommended camera settings for the BarcodeSelection mode as default settings.
    const camera = Camera.withSettings(BarcodeSelection.recommendedCameraSettings);
    context.setFrameSource(camera);

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
