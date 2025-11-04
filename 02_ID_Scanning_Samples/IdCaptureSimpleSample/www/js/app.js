import {
    Camera,
    DataCaptureContext,
    DataCaptureView,
    FrameSourceState,
    ScanditCaptureCorePlugin
} from 'scandit-capacitor-datacapture-core';

import {
    FullDocumentScanner,
    IdCapture,
    IdCaptureOverlay,
    IdCaptureSettings,
    IdLayoutStyle,
    IdCaptureRegion,
    IdCard,
    DriverLicense,
    Passport,
    RejectionReason,
    IdCaptureScanner,
} from 'scandit-capacitor-datacapture-id';

async function runApp() {
    // Initialize the plugins.
    await ScanditCaptureCorePlugin.initializePlugins();

    // Enter your Scandit License key here.
    // Your Scandit License key is available via your Scandit SDK web account.
    const context = DataCaptureContext.initialize('-- ENTER YOUR SCANDIT LICENSE KEY HERE --');

    // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
    // default and must be turned on to start streaming frames to the data capture context for recognition.
    // Use the recommended camera settings for the IdCapture mode.
    const camera = Camera.withSettings(IdCapture.createRecommendedCameraSettings());
    context.setFrameSource(camera);

    // The ID capturing process is configured through ID capture settings
    // and are then applied to the ID capture instance that manages id recognition.
    const settings = new IdCaptureSettings();

    // Recognize national ID cards, driver's licenses and passports.
    settings.acceptedDocuments.push(
        new IdCard(IdCaptureRegion.Any),
        new DriverLicense(IdCaptureRegion.Any),
        new Passport(IdCaptureRegion.Any),
    );
    settings.scanner = new IdCaptureScanner(new FullDocumentScanner());

    // To visualize the on-going id capturing process on screen, setup a data capture view that renders the
    // camera preview. The view must be connected to the data capture context.
    const view = DataCaptureView.forContext(context);

    // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
    view.connectToElement(document.getElementById('data-capture-view'));

    // Switch camera on to start streaming frames and enable the id capture mode.
    // The camera is started asynchronously and will take some time to completely turn on.
    camera.switchToDesiredState(FrameSourceState.On);

    // Create new id capture mode with the settings from above.
    window.idCapture = new IdCapture(settings);

    // Register a listener to get informed whenever a new id got recognized.
    window.idCapture.addListener({
        didCaptureId: (_, capturedId) => {
            window.idCapture.isEnabled = false;

            window.showResult(window.descriptionForCapturedId(capturedId));
        },
        didRejectId: (_, rejectedId, reason) => {
            window.idCapture.isEnabled = false;
            
            window.showResult(window.getRejectionReasonMessage(reason));
        }
    });

    window.idCapture.isEnabled = true;

    // Set mode to context
    context.setMode(window.idCapture);

    // Create overlay
    window.idCaptureOverlay = new IdCaptureOverlay(window.idCapture);

    // Set layout style
    window.idCaptureOverlay.idLayoutStyle = IdLayoutStyle.Square;

    // Add overlay to view
    view.addOverlay(window.idCaptureOverlay); 
}

window.showResult = result => {
    const resultElement = document.createElement('div');
    resultElement.id = "result";
    resultElement.classList = "result";
    resultElement.innerHTML = `<p>${result}</p><button onclick="continueScanning()">OK</button>`;
    document.querySelector('#data-capture-view').appendChild(resultElement)
}

window.continueScanning = () => {
    document.querySelector('#result').parentElement.removeChild(document.querySelector('#result'))
    window.idCapture.isEnabled = true;
}

// === //

window.getRejectionReasonMessage = (reason) => {
    switch (reason) {
        case RejectionReason.NotAcceptedDocumentType:
            return 'Document not supported. Try scanning another document.';
        case RejectionReason.Timeout:
            return 'Document capture failed. Make sure the document is well lit and free of glare. Alternatively, try scanning another document';
        default:
            return `Document capture was rejected. Reason=${reason}`;
    }
}

window.descriptionForCapturedId = (result) => {
    function getDateAsString(dateObject) {
        return dateObject && dateObject.localDate ? dateObject.localDate
            .toLocaleDateString("en-GB") : "empty";
    }
    return `
  Full Name: ${result.fullName}<br>
  Date of Birth: ${getDateAsString(result.dateOfBirth)}<br>
  Date of Expiry: ${getDateAsString(result.dateOfExpiry)}<br>
  Document Number: ${result.documentNumber || "empty"}<br>
  Nationality: ${result.nationality || "empty"}<br>
  `;
}

(function () {
    runApp();
})();
