import {Plugins} from '@capacitor/core';
import 'scandit-capacitor-datacapture-core';
import 'scandit-capacitor-datacapture-id';

const {ScanditCaptureCorePlugin} = Plugins;

async function runApp() {
    // Initialize the plugins.
    const Scandit = await ScanditCaptureCorePlugin.initializePlugins();

    // Create data capture context using your license key.
    const context = Scandit.DataCaptureContext.forLicenseKey('-- ENTER YOUR SCANDIT LICENSE KEY HERE --');

    // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
    // default and must be turned on to start streaming frames to the data capture context for recognition.
    const camera = Scandit.Camera.default;
    context.setFrameSource(camera);

    // Use the recommended camera settings for the IdCapture mode.
    camera.applySettings(Scandit.IdCapture.recommendedCameraSettings);

    // The ID capturing process is configured through ID capture settings
    // and are then applied to the ID capture instance that manages id recognition.
    const settings = new Scandit.IdCaptureSettings();

    // We are interested in both front and back sides of US DL.
    settings.supportedDocuments = [Scandit.IdDocumentType.DLVIZ];
    settings.supportedSides = Scandit.SupportedSides.FrontAndBack;

    // To visualize the on-going id capturing process on screen, setup a data capture view that renders the
    // camera preview. The view must be connected to the data capture context.
    const view = Scandit.DataCaptureView.forContext(context);

    // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
    view.connectToElement(document.getElementById('data-capture-view'));

    // Switch camera on to start streaming frames and enable the id capture mode.
    // The camera is started asynchronously and will take some time to completely turn on.
    camera.switchToDesiredState(Scandit.FrameSourceState.On);

    // Create new id capture mode with the settings from above.
    window.idCapture = Scandit.IdCapture.forContext(context, settings);

    // Register a listener to get informed whenever a new id got recognized.
    window.idCapture.addListener({
        didCaptureId: (_, session) => {
            if (session.newlyCapturedId == null) {
                return
            }

            window.idCapture.isEnabled = false;

            if (
                (
                    session.newlyCapturedId.documentType === Scandit.DocumentType.DrivingLicense
                    && session.newlyCapturedId.issuingCountryIso === 'USA'
                    && session.newlyCapturedId.vizResult.isBackSideCaptureSupported
                ) || window.isScanningBackside === true) {

                if (!window.isScanningBackside === true) {
                    // Scan the back side of the document.
                    window.showNotification('Align back of document');
                    window.isScanningBackside = true;
                    window.idCapture.isEnabled = true;
                } else {
                    // Front and back were scanned; perform a verification of the captured ID.
                    Scandit
                        .AamvaVizBarcodeComparisonVerifier
                        .create()
                        .verify(session.newlyCapturedId)
                        .then(result => {
                            window.showNotification(null);
                            window.showResult(
                                window.descriptionForCapturedId(
                                    session.newlyCapturedId,
                                    new Date(
                                        session.newlyCapturedId.dateOfExpiry.year,
                                        session.newlyCapturedId.dateOfExpiry.month,
                                        session.newlyCapturedId.dateOfExpiry.day
                                    ) >= new Date(),
                                    result.checksPassed
                                )
                            );
                        })
                }

            } else {
                window.showNotification(null);
                window.showResult('Document is not a US driver’s license.');
            }
        },
        didFailWithError: (_, error, session) => {
            window.showNotification(null);
            window.showResult(error.message);
        }
    });

    window.idCaptureOverlay = Scandit.IdCaptureOverlay.withIdCaptureForView(window.idCapture, view);
    window.idCaptureOverlay.idLayoutStyle = Scandit.IdLayoutStyle.Square;

    window.idCapture.isEnabled = true;

    window.showNotification('Align front of document');
}

window.showResult = result => {
    const resultElement = document.createElement('div');
    resultElement.id = "result";
    resultElement.classList = "result";
    resultElement.innerHTML = `<p>${result}</p><button onclick="continueScanning()">OK</button>`;
    document.querySelector('#data-capture-view').appendChild(resultElement)
}

window.continueScanning = () => {
    window
        .idCapture
        .reset()
        .then(() => {
            document
                .querySelector('#result')
                .parentElement
                .removeChild(document.querySelector('#result'));

            window.showNotification('Align front of document');
            window.isScanningBackside = false;
            window.idCapture.isEnabled = true;
        });
}

window.showNotification = notificationText => {
    const existingNotificationElement = document.querySelector('#notification');

    if (existingNotificationElement) {
        existingNotificationElement
            .parentElement
            .removeChild(existingNotificationElement);
    }

    if (!notificationText) return;

    const notificationElement = document.createElement('div');
    notificationElement.id = "notification";
    notificationElement.classList = "notification";
    notificationElement.innerHTML = `<p>${notificationText}</p>`;
    document.querySelector('#data-capture-view').appendChild(notificationElement);
}

// === //

window.descriptionForCapturedId = (capturedId, passedExpiryCheck, passedChecks) => {
    return `
  ${passedExpiryCheck ? "<span class='green'>Document is not expired.</span>" : "<span class='red'>Document is expired.</span>"}<br>
  ${passedChecks ? "<span class='green'>Information on front and back match.</span>" : "<span class='red'>Information on front and back do not match.</span>"}<br>
  <br>
  Name: ${capturedId.firstName || "empty"}<br>
  Last Name: ${capturedId.lastName || "empty"}<br>
  Full Name: ${capturedId.fullName}<br>
  Sex: ${capturedId.sex || "empty"}<br>
  Date of Birth: ${capturedId.dateOfBirth && new Date(capturedId.dateOfBirth.year, capturedId.dateOfBirth.month, capturedId.dateOfBirth.day).toLocaleDateString() || "empty"}<br>
  Nationality: ${capturedId.nationality || "empty"}<br>
  Address: ${capturedId.address || "empty"}<br>
  Document Type: ${capturedId.documentType}<br>
  Captured Result Type: ${capturedId.capturedResultType}<br>
  Issuing Country: ${capturedId.issuingCountry || "empty"}<br>
  Issuing Country ISO: ${capturedId.issuingCountryIso || "empty"}<br>
  Document Number: ${capturedId.documentNumber || "empty"}<br>
  Date of Expiry: ${capturedId.dateOfExpiry && new Date(capturedId.dateOfExpiry.year, capturedId.dateOfExpiry.month, capturedId.dateOfExpiry.day).toLocaleDateString() || "empty"}<br>
  Date of Issue: ${capturedId.dateOfIssue && new Date(capturedId.dateOfIssue.year, capturedId.dateOfIssue.month, capturedId.dateOfIssue.day).toLocaleDateString() || "empty"}<br>
  `
}

(function () {
    runApp();
})();
