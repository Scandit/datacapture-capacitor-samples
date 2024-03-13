import {
    Camera,
    DataCaptureContext,
    DataCaptureView,
    FrameSourceState,
    ScanditCaptureCorePlugin,
    VideoResolution
} from 'scandit-capacitor-datacapture-core';

import {
    BarcodeTracking,
    BarcodeTrackingBasicOverlay,
    BarcodeTrackingBasicOverlayStyle,
    BarcodeTrackingSettings,
    Symbology,
    SymbologyDescription,
} from 'scandit-capacitor-datacapture-barcode';

async function runApp() {
    let results = {};
    resetResults();

    // Initialize the plugins.
    await ScanditCaptureCorePlugin.initializePlugins();

    // There is a Scandit sample license key set below here.
    // This license key is enabled for sample evaluation only.
    // If you want to build your own application, get your license key by signing up for a trial at https://ssl.scandit.com/dashboard/sign-up?p=test
    const context = DataCaptureContext.forLicenseKey('AbvELRLKNvXhGsHO0zMIIg85n3IiQdKMA2p5yeVDSOSZSZg/BhX401FXc+2UHPun8Rp2LRpw26tYdgnIJlXiLAtmXfjDZNQzZmrZY2R0QaJaXJC34UtcQE12hEpIYhu+AmjA5cROhJN3CHPoHDns+ho12ibrRAoFrAocoBIwCVzuTRHr0U6pmCKoa/Mn3sNPdINHh97m1X9Al9xjh3VOTNimP6ZjrHLVWEJSOdp2QYOnqn5izP1329PVcZhn8gqlGCRh+LJytbKJYI/KIRbMy3bNOyq5kNnr2IlOqaoXRgYdz2IU+jIWw8Cby9XoSB1zkphiYMmlCUqrDzxLUmTAXF4rSWobiM+OxnoImDqISpunJBQz0a5DSeT5Zf0lwwvXQLX4ghkgXozyYYfYvIKsqxJLZoza8g1BFsJ1i3fb0JYP2Ju209OMN2NTJifAu9ZJjQKGWS76Rmr/jre13jCqGgx5SX9F2lA2ZpF2AEb6rmYYmMtL9CPwWvstM+W295WvscH+gCBccZ9q3rxfIsak6cV2T50/2uBWfJJka6kL9UOjMOG3BOGKx+O+KWT/twwvOC+GcvC8s1qMwGNNM6G+/m7fG5Xtl5wtp3QhpzPJbBHSmlkYbxXQx0SpuWBmvxygyKOi3lUzz3gRzOdykWRXzrhiMAp5bb1y6n6g4O2v2TVgzWWF8vwZ6F60ehYDUq7pbusgT4Fl3fV7fYPgLxMMvXKduMmUlWyGv3CWL9LfvoY/hLl7RxoyUryTMmSfRVBcsKs+MWYJGh1iIvWk1UhOChb9IGI2PzUsHz7+OikuYMjKhR8LZZYalXpPiEVfT66yy75M5DODcjXRoFZU');

    // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
    // default and must be turned on to start streaming frames to the data capture context for recognition.
    const camera = Camera.default;
    camera.preferredResolution = VideoResolution.FullHD;
    context.setFrameSource(camera);

    // The barcode tracking process is configured through barcode tracking settings
    // which are then applied to the barcode tracking instance that manages barcode tracking.
    const settings = new BarcodeTrackingSettings();

    // The settings instance initially has all types of barcodes (symbologies) disabled. For the purpose of this
    // sample we enable a very generous set of symbologies. In your own app ensure that you only enable the
    // symbologies that your app requires as every additional enabled symbology has an impact on processing times.
    settings.enableSymbologies([
        Symbology.EAN13UPCA,
        Symbology.EAN8,
        Symbology.UPCE,
        Symbology.Code39,
        Symbology.Code128,
    ]);

    // Create new barcode tracking mode with the settings from above.
    const barcodeTracking = BarcodeTracking.forContext(context, settings);

    // Register a listener to get informed whenever a new barcode is tracked.
    barcodeTracking.addListener({
        didUpdateSession: (barcodeTracking, session) => {
            Object.values(session.trackedBarcodes).forEach(trackedBarcode => {
                results[trackedBarcode.barcode.data] = trackedBarcode;
            });
        }
    });

    // To visualize the on-going barcode tracking process on screen, setup a data capture view that renders the
    // camera preview. The view must be connected to the data capture context.
    const view = DataCaptureView.forContext(context);

    // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
    view.connectToElement(document.getElementById('data-capture-view'));

    // Add a barcode tracking overlay to the data capture view to render the location of captured barcodes on top of
    // the video preview. This is optional, but recommended for better visual feedback.
    BarcodeTrackingBasicOverlay.withBarcodeTrackingForViewWithStyle(
        barcodeTracking,
        view,
        BarcodeTrackingBasicOverlayStyle.Frame
    );

    // Switch camera on to start streaming frames and enable the barcode tracking mode.
    // The camera is started asynchronously and will take some time to completely turn on.
    camera.switchToDesiredState(FrameSourceState.On);
    barcodeTracking.isEnabled = true;

    const updateResults = () => {
        const list = document.getElementById('list');
        list.innerHTML = Object.values(results)
            .map(trackedBarcode => {
                const dataHTML = `<p class="barcodeData">${trackedBarcode.barcode.data}</p>`
                const symbology = new SymbologyDescription(trackedBarcode.barcode.symbology);
                const symbologyHTML = `<p class="symbology">${symbology.readableName}</p>`
                return `<div class="result">${dataHTML}${symbologyHTML}</div>`;
            })
            .join('');
    }

    function resetResults() {
        results = {};
        document.getElementById('results').hidden = true;
    }

    const done = () => {
        updateResults();
        barcodeTracking.isEnabled = false;
        document.getElementById('results').hidden = false;
    }

    const scanAgain = () => {
        resetResults();
        barcodeTracking.isEnabled = true;
    }

    document.getElementById('scan-again').addEventListener('click', scanAgain.bind(this));
    document.getElementById('done').addEventListener('click', done.bind(this));
}

(function () {
    runApp();
})();
