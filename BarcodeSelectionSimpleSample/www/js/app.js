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
    const context = DataCaptureContext.forLicenseKey('Aa2k0xbKMtvDJWNgLU02Cr8aLxUjNtOuqXCjHUxVAUf/d66Y5Tm74sJ+8L0rGQUZ20e52VlMY9I7YW4W13kWbvp36R8jbqQy6yZUGS50G5n4fRItJD6525RcbTYZQjoIGHQqle9jj08ra19ZUy9RliVlOn3hHz4WrGO8vORyATmFXJpULzk0I5RpiT84ckXhG2Ri8jtIzoISX3zsoiLtXVRGjjrkbuGZzGbKA180JKEpdfSQwVyupLti5yNYHAeKihS6IOklCTz8CM1BfRC4zBdIDjbVEJPFgAsLvMU0rTyJhHkB5Ds4wfHbKNFhW0T2XkYLKkvZ7X/HnEVD5oz9Kl4T4rtRkepJfsXUWHUgVugjLO5vqwhMcHNV5XpK2Pk/SLrzGF1PDRu8f4ZhBLrWKknWq+5TSK8GWi4wmGpVvbxqHhLljzOzplYs8I5TtphZ3otJNLs10lhk1YN9cmdaxpdUuF4k0WDU1Qfco75p5G+MBlsAVVFrs0xMF9fSMJkQ+4UU+G+py5781HPkpw4kaGwmJhGrzA/Lbhf4tL+XfynseLw42oygpfVabYEYRHSQx+1j5RpFSR6V9t4jlKsJu2xgYz0A96I82gIHItRRxZkT2oEsZCgYlgCiQsFcsFdo9N9bzDL9mVR5Nj0RPIVvKc01AVtKvXLx86g2rNPv45eBaJFrdsWmv97V8+Pv6M9d+Wr1qcTeT1BY8fvWUEDmU1HF6eCJ1A6cDAM+Nq4sAP9D2lH7D6rHwK+x07F56bMZibLeDoGKanE8PhhamhxBVemE/ByCoMoItBtSbpeBubHVsSHlGF3/AAKi6flY6j0htptgPOM8eOwGXx6YvVxu3KOMF+2RBIQai8LP0YEuhVJ0ST7WX5seeVSu5RMKUx/euHoQB6qID+ydzkXGzYZLTPPskmJSWqrboJQPIjZ/ruCtJepZ/+Lr7g5nCyb01w==');

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
