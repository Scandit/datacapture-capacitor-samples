import {
  Camera,
  DataCaptureContext,
  DataCaptureView,
  FrameSourceState,
  ScanditCaptureCorePlugin,
} from 'scandit-capacitor-datacapture-core';

import {
  CustomBarcode,
  ExpiryDateText,
  LabelCapture,
  LabelCaptureBasicOverlay,
  LabelCaptureSettings,
  LabelCaptureValidationFlowOverlay,
  LabelDateComponentFormat,
  LabelDateFormat,
  LabelDefinition,
  TotalPriceText,
} from 'scandit-capacitor-datacapture-label';

import {
  Symbology,
} from 'scandit-capacitor-datacapture-barcode';

async function runApp() {
  // Initialize the plugins.
  await ScanditCaptureCorePlugin.initializePlugins();

  // Enter your Scandit License key here.
  // Your Scandit License key is available via your Scandit SDK web account.
  const context = DataCaptureContext.initialize('-- ENTER YOUR SCANDIT LICENSE KEY HERE --');

  // Use the world-facing (back) camera with the recommended settings for LabelCapture.
  const camera = Camera.withSettings(LabelCapture.createRecommendedCameraSettings());
  context.setFrameSource(camera);

  // Set up the label definition for a retail item.
  const customBarcode = CustomBarcode.initWithNameAndSymbologies('Barcode', [
    Symbology.EAN13UPCA,
    Symbology.GS1DatabarExpanded,
    Symbology.Code128,
  ]);
  customBarcode.optional = false;

  const expiryDateText = new ExpiryDateText('Expiry Date');
  expiryDateText.labelDateFormat = new LabelDateFormat(LabelDateComponentFormat.MDY, false);
  expiryDateText.optional = false;

  const totalPriceText = new TotalPriceText('Total Price');
  totalPriceText.optional = true;

  const labelDefinition = new LabelDefinition('Retail Item');
  labelDefinition.fields = [customBarcode, expiryDateText, totalPriceText];

  // You can customize the label definition to adapt it to your use-case.
  // For example, you can use the following label definition for Smart Devices box Scanning.
  //
  // const customBarcode = CustomBarcode.initWithNameAndSymbologies('Barcode', [
  //   Symbology.EAN13UPCA,
  //   Symbology.Code128,
  //   Symbology.Code39,
  //   Symbology.InterleavedTwoOfFive,
  // ]);
  // customBarcode.optional = false;
  //
  // const imeiOne = ImeiOneBarcode.initWithNameAndSymbologies('IMEI1', []);
  // imeiOne.optional = false;
  //
  // const imeiTwo = ImeiTwoBarcode.initWithNameAndSymbologies('IMEI2', []);
  // imeiTwo.optional = true;
  //
  // const serial = SerialNumberBarcode.initWithNameAndSymbologies('Serial Number', []);
  // serial.optional = true;
  //
  // const labelDefinition = new LabelDefinition('Smart Device');
  // labelDefinition.fields = [customBarcode, imeiOne, imeiTwo, serial];

  const settings = LabelCaptureSettings.settingsFromLabelDefinitions([labelDefinition], {});

  // Create the label capture mode and add it to the context.
  const labelCapture = new LabelCapture(settings);
  context.setMode(labelCapture);

  // To visualize the on-going label capture process on screen, set up a data capture view
  // that renders the camera preview. The view must be connected to the data capture context.
  const view = DataCaptureView.forContext(context);

  // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
  const dcViewElement = document.getElementById('data-capture-view');
  view.connectToElement(dcViewElement);

  // Add the basic overlay to visualize detected label fields.
  const basicOverlay = new LabelCaptureBasicOverlay(labelCapture);
  await view.addOverlay(basicOverlay);

  // Add the validation flow overlay which guides the user through capturing all required fields
  // and notifies us when the complete label has been captured.
  const validationFlowOverlay = new LabelCaptureValidationFlowOverlay(labelCapture);

  validationFlowOverlay.listener = {
    didCaptureLabelWithFields(labelFields) {
      labelCapture.isEnabled = false;
      // Show web content on top of the native view so the result modal is visible.
      // During scanning this must be false so the native overlay fields are interactive.
      view.webViewContentOnTop = true;
      showResult(formatLabelFields(labelFields));
    },
    didSubmitManualInputForField() {
      // No-op: manual input submission is not used in this sample.
    },
    async didUpdateValidationFlowResult() {
      // No-op: validation flow result updates are not used in this sample.
    },
  };

  await view.addOverlay(validationFlowOverlay);

  // Switch camera on to start streaming frames and enable label capture.
  await camera.switchToDesiredState(FrameSourceState.On);
  labelCapture.isEnabled = true;

  // Set up the "Continue Scanning" button.
  document.getElementById('continue-button').addEventListener('click', () => {
    hideResult();
    // Restore native view on top so the overlay fields are interactive.
    view.webViewContentOnTop = false;
    camera.switchToDesiredState(FrameSourceState.On);
    labelCapture.isEnabled = true;
  });
}

function showResult(message) {
  const modal = document.getElementById('result-modal');
  document.getElementById('modal-message').textContent = message;
  modal.classList.remove('hidden');
}

function hideResult() {
  document.getElementById('result-modal').classList.add('hidden');
}

function formatLabelFields(labelFields) {
  return labelFields
    .map((field) => {
      if (field.type === 'barcode') {
        const barcodeData = field.barcode?.data ?? field.text ?? 'N/A';
        return `${field.name}: ${barcodeData}`;
      }
      if (field.type === 'text') {
        const date = field.asDate();
        if (date) {
          return `${field.name}: ${date.day} - ${date.month} - ${date.year}`;
        }
        return `${field.name}: ${field.text}`;
      }
      return `${field.name}: ${field.text ?? 'N/A'}`;
    })
    .join('\n');
}

(function () {
  runApp();
})();
