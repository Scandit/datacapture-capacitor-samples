import {
    Camera,
    DataCaptureContext,
    DataCaptureView,
    FrameSourceState,
    ScanditCaptureCorePlugin
} from 'scandit-capacitor-datacapture-core';

import {
    AamvaBarcodeVerifier,
    AamvaVizBarcodeComparisonVerifier,
    DocumentType,
    IdCapture,
    IdCaptureOverlay,
    IdCaptureSettings,
    IdDocumentType,
    IdLayoutStyle,
    SupportedSides
} from 'scandit-capacitor-datacapture-id';

async function runApp() {
    // Initialize the plugins.
    await ScanditCaptureCorePlugin.initializePlugins();

    // Create data capture context using your license key.
    const context = DataCaptureContext.forLicenseKey('-- ENTER YOUR SCANDIT LICENSE KEY HERE --');

    // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
    // default and must be turned on to start streaming frames to the data capture context for recognition.
    const camera = Camera.default;
    context.setFrameSource(camera);

    // Use the recommended camera settings for the IdCapture mode.
    camera.applySettings(IdCapture.recommendedCameraSettings);

    // The ID capturing process is configured through ID capture settings
    // and are then applied to the ID capture instance that manages id recognition.
    const settings = new IdCaptureSettings();

    // We are interested in both front and back sides of US DL.
    settings.supportedDocuments = [IdDocumentType.DLVIZ];
    settings.supportedSides = SupportedSides.FrontAndBack;

    // To visualize the on-going id capturing process on screen, setup a data capture view that renders the
    // camera preview. The view must be connected to the data capture context.
    const view = DataCaptureView.forContext(context);

    // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
    view.connectToElement(document.getElementById('data-capture-view'));

    // Switch camera on to start streaming frames and enable the id capture mode.
    // The camera is started asynchronously and will take some time to completely turn on.
    camera.switchToDesiredState(FrameSourceState.On);

    // Create new id capture mode with the settings from above.
    window.idCapture = IdCapture.forContext(context, settings);

    // Register a listener to get informed whenever a new id got recognized.
    window.idCapture.addListener({
        didCaptureId: (_, session) => {
            if (session.newlyCapturedId == null) {
                return
            }

            window.idCapture.isEnabled = false;

            if (
                (
                    session.newlyCapturedId.documentType === DocumentType.DrivingLicense
                    && session.newlyCapturedId.issuingCountryIso === 'USA'
                    && session.newlyCapturedId.vizResult.isBackSideCaptureSupported
                ) || window.isScanningBackside === true) {

                if (!window.isScanningBackside === true) {
                    // Scan the back side of the document.
                    window.isScanningBackside = true;
                    window.idCapture.isEnabled = true;
                } else {
                    // Front and back were scanned; perform a verification of the captured ID.
                    AamvaVizBarcodeComparisonVerifier
                        .create()
                        .verify(session.newlyCapturedId)
                        .then(result => {
                            if (!result.checksPassed) {
                                window.showResult(
                                    window.descriptionForCapturedId(
                                        session.newlyCapturedId,
                                        result.checksPassed,
                                        false
                                    )
                                );
                                return;
                            }

                            // If front and back match AND ID is not expired, run verification
                            if (!session.newlyCapturedId.isExpired && result.checksPassed) {
                                AamvaBarcodeVerifier.create(context)
                                    .then(verifier => {
                                        verifier.verify(session.newlyCapturedId).then(verificationResult => {
                                            window.showResult(
                                                window.descriptionForCapturedId(
                                                    session.newlyCapturedId,
                                                    result.checksPassed,
                                                    verificationResult?.allChecksPassed == true
                                                )
                                            );
                                        });
                                    });
                            } else {
                                window.showResult(
                                    window.descriptionForCapturedId(
                                        session.newlyCapturedId,
                                        result.checksPassed,
                                        false
                                    )
                                );
                            }
                        })
                        .catch(reason => {
                            window.showResult(reason);
                        });
                }
            }
        },
        didRejectId: (_, session) => {
            if (session.newlyRejectedId == null) {
                return;
            }

            window.showResult('Rejected!');
        }
    });

    window.idCaptureOverlay = IdCaptureOverlay.withIdCaptureForView(window.idCapture, view);
    window.idCaptureOverlay.idLayoutStyle = IdLayoutStyle.Square;
    
    window.idCapture.isEnabled = true;
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

            window.isScanningBackside = false;
            window.idCapture.isEnabled = true;
        });
}

// === //

window.descriptionForCapturedId = (capturedId, passedChecks, verificationAllChecksPassed) => {
    function getDateAsString(dateObject) {
        return `${(dateObject && new Date(Date.UTC(
            dateObject.year,
            dateObject.month - 1,
            dateObject.day
        )).toLocaleDateString("en-GB", { timeZone: "UTC" })) || "empty"}`;
    }

    return `
  ${capturedId.isExpired === true ? "<span class='red'>Document is expired.</span>" : "<span class='green'>Document is not expired.</span>"}<br>
  ${passedChecks ? "<span class='green'>Information on front and back match.</span>" : "<span class='red'>Information on front and back do not match.</span>"}<br>
  ${verificationAllChecksPassed ? "<span class='green'>Verification checks passed.</span>" : "<span class='red'>Verification checks failed.</span>"}<br>
  <br>
  Name: ${capturedId.firstName || "empty"}<br>
  Last Name: ${capturedId.lastName || "empty"}<br>
  Full Name: ${capturedId.fullName}<br>
  Sex: ${capturedId.sex || "empty"}<br>
  Date of Birth: ${getDateAsString(capturedId.dateOfBirth)}<br>
  Nationality: ${capturedId.nationality || "empty"}<br>
  Address: ${capturedId.address || "empty"}<br>
  Document Type: ${capturedId.documentType}<br>
  Captured Result Type: ${capturedId.capturedResultType}<br>
  Issuing Country: ${capturedId.issuingCountry || "empty"}<br>
  Issuing Country ISO: ${capturedId.issuingCountryIso || "empty"}<br>
  Document Number: ${capturedId.documentNumber || "empty"}<br>
  Date of Expiry: ${getDateAsString(capturedId.dateOfExpiry)}<br>
  Date of Issue: ${getDateAsString(capturedId.dateOfIssue)}<br>
  `
}

(function () {
    runApp();
})();
