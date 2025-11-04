import {
  Camera,
  DataCaptureContext,
  DataCaptureView,
  FrameSourceState,
  ScanditCaptureCorePlugin,
} from 'scandit-capacitor-datacapture-core';

import {
  IdCapture,
  IdCaptureOverlay,
  IdCaptureSettings,
  IdCaptureRegion,
  IdLayoutStyle,
  FullDocumentScanner,
  DriverLicense,
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

  // We are interested in both front and back sides of US DL.
  settings.acceptedDocuments.push(new DriverLicense(IdCaptureRegion.Us));

  // We are interested in the front side of national Id Cards, Passports, Driver Licenses and Residence Permits.
  settings.scanner = new IdCaptureScanner(new FullDocumentScanner());

  // Reject forged AAMVA barcodes.
  settings.rejectForgedAamvaBarcodes = true;

  // Reject inconsistent data between front and back side.
  settings.rejectInconsistentData = true;

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
    },
  });

  window.idCapture.isEnabled = true;

  // Set mode to context
  context.setMode(window.idCapture);

  window.idCaptureOverlay = new IdCaptureOverlay(window.idCapture);
  window.idCaptureOverlay.idLayoutStyle = IdLayoutStyle.Square;
  
  // Add overlay to view
  view.addOverlay(window.idCaptureOverlay);
}

window.showResult = result => {
  const resultElement = document.createElement('div');
  resultElement.id = 'result';
  resultElement.classList = 'result';
  resultElement.innerHTML = `<p>${result}</p><button onclick="continueScanning()">OK</button>`;
  document.querySelector('#data-capture-view').appendChild(resultElement);
};

window.continueScanning = () => {
  window.idCapture.reset().then(() => {
    document.querySelector('#result').parentElement.removeChild(document.querySelector('#result'));

    window.isScanningBackside = false;
    window.idCapture.isEnabled = true;
  });
};

// === //

window.getRejectionReasonMessage = reason => {
  switch (reason) {
    case RejectionReason.NotAcceptedDocumentType:
      return 'Document not supported. Try scanning another document.';
    case RejectionReason.Timeout:
      return 'Document capture failed. Make sure the document is well lit and free of glare. Alternatively, try scanning another document';
    case RejectionReason.InconsistentData:
      return 'Document capture failed. Inconsistent data between front and back side.';
    case RejectionReason.ForgedAamvaBarcode:
      return 'Document capture failed. Document barcode is forged.';
    default:
      return `Document capture was rejected. Reason=${reason}`;
  }
};

window.descriptionForCapturedId = capturedId => {
  function getDateAsString(dateObject) {
    return `${
      (dateObject &&
        new Date(Date.UTC(dateObject.year, dateObject.month - 1, dateObject.day)).toLocaleDateString('en-GB', {
          timeZone: 'UTC',
        })) ||
      'empty'
    }`;
  }

  return `
  ${
    capturedId.isExpired === true
      ? "<span class='red'>Document is expired.</span>"
      : "<span class='green'>Document is not expired.</span>"
  }<br>
  <br>
  Full Name: ${capturedId.fullName}<br>
  Date of Birth: ${getDateAsString(capturedId.dateOfBirth)}<br>
  Date of Expiry: ${getDateAsString(capturedId.dateOfExpiry)}<br>
  Document Number: ${capturedId.documentNumber || 'empty'}<br>
  Nationality: ${capturedId.nationality || 'empty'}<br>
  `;
};

(function () {
  runApp();
})();
