# Scandit Capacitor Samples

This repository contains both simple and advanced samples that show you how use various features of the Scandit Data Capture SDK. The simple samples allow you to get going quickly, while the advanced samples show you how to use additional settings and setup the scanner for the best performance and user experience.

### Single Scanning (Barcode Capture)

**Simple Sample (**[Capacitor](https://github.com/Scandit/datacapture-capacitor-samples/tree/master/01_Single_Scanning_Samples/02_Barcode_Scanning_with_Low_Level_API/BarcodeCaptureSimpleSample) ([Angular](https://github.com/Scandit/datacapture-capacitor-samples/tree/master/01_Single_Scanning_Samples/02_Barcode_Scanning_with_Low_Level_API/BarcodeCaptureSimpleSampleWithAngular), [React](https://github.com/Scandit/datacapture-capacitor-samples/tree/master/01_Single_Scanning_Samples/02_Barcode_Scanning_with_Low_Level_API/BarcodeCaptureSimpleSampleWithReact), [Vue](https://github.com/Scandit/datacapture-capacitor-samples/tree/master/01_Single_Scanning_Samples/02_Barcode_Scanning_with_Low_Level_API/BarcodeCaptureSimpleSampleWithVue)))

### Scan One of Many Barcodes (Barcode Selection)

Barcode Selection is a pre-built component that provides a UI for selecting the right code when codes are crowded (and cannot be selected programmatically as demonstrated by Barcode Capture Reject Sample)

Consider Barcode Selection when **accuracy** is more important than **speed**.

- **Aim to Select** allows you to select one barcode at a time using an aimer, and tapping to confirm the selection. It is especially convenient for one-handed operation.

  ![AimToSelect.png](https://github.com/Scandit/.github/blob/main/images/AimToSelect.png)


- **Tap to select** is quicker when you need to select several barcodes, as when reordering from a catalog where barcodes are close together (yep, those are teeth).

  ![TapToSelect.png](https://github.com/Scandit/.github/blob/main/images/TapToSelect.png)


**Barcode Selection Simple Sample (**[Capacitor](https://github.com/Scandit/datacapture-capacitor-samples/tree/master/01_Single_Scanning_Samples/02_Barcode_Scanning_with_Low_Level_API/BarcodeSelectionSimpleSample))

**Barcode Selection Settings Sample (**[Capacitor](https://github.com/Scandit/datacapture-capacitor-samples/tree/master/01_Single_Scanning_Samples/02_Barcode_Scanning_with_Low_Level_API/BarcodeSelectionSettingsSample))

### ID Scanning and Verification Samples

ID Scanning Samples demonstrate the features of the ID Capture API and demonstrate workflows such as Age Verified Delivery and US Drivers’ License Verification.

![IDScanning.png](https://github.com/Scandit/.github/blob/main/images/IDScanning.png)

**ID Capture Simple Sample** ([Capacitor](https://github.com/Scandit/datacapture-capacitor-samples/tree/master/02_ID_Scanning_Samples/IdCaptureSimpleSample))

**US Drivers' License Verification Sample** ([Capacitor](https://github.com/Scandit/datacapture-capacitor-samples/tree/master/02_ID_Scanning_Samples/USDLVerificationSample))

### MatrixScan AR Sam**ples**

**MatrixScan Simple Sample** ([Capacitor](https://github.com/Scandit/datacapture-capacitor-samples/tree/master/03_Advanced_Batch_Scanning_Samples/01_Batch_Scanning_and_AR_Info_Lookup/MatrixScanSimpleSample))

**MatrixScan Bubbles Sample** ([Capacitor](https://github.com/Scandit/datacapture-capacitor-samples/tree/master/03_Advanced_Batch_Scanning_Samples/01_Batch_Scanning_and_AR_Info_Lookup/MatrixScanBubblesSample))

## Samples on Other Frameworks

Samples on other frameworks are located at [https://github.com/scandit](https://github.com/scandit).

## Documentation

The Scandit Data Capture SDK documentation can be found here: [Capacitor](https://docs.scandit.com/data-capture-sdk/capacitor/index.html)

## Sample Barcodes

Once you get the sample up and running, go find some barcodes to scan. Don’t feel like getting up from your desk? Here’s a [handy pdf of barcodes](https://github.com/Scandit/.github/blob/main/images/PrintTheseBarcodes.pdf) you can print out.

## Trial Signup

To add the Scandit Data Capture SDK to your app, sign up for your Scandit Developer Account  and get instant access to your license key: [https://ssl.scandit.com/dashboard/sign-up?p=test](https://ssl.scandit.com/dashboard/sign-up?p=test)

## Support

Our support engineers can be reached at [support@scandit.com](mailto:support@scandit.com).

## License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)
