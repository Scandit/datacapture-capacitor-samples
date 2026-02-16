import {
    Camera,
    DataCaptureContext,
    FrameSourceState,
    ScanditCaptureCorePlugin,
    VideoResolution,
    Color,
    Brush,
    ScanditIconBuilder,
    ScanditIconType,
    ScanditIconShape
} from 'scandit-capacitor-datacapture-core';

import { App } from '@capacitor/app';

import {
    BarcodeAr,
    BarcodeArView,
    BarcodeArSettings,
    BarcodeArViewSettings,
    BarcodeArRectangleHighlight,
    BarcodeArCircleHighlight,
    BarcodeArCircleHighlightPreset,
    BarcodeArInfoAnnotation,
    BarcodeArInfoAnnotationHeader,
    BarcodeArInfoAnnotationBodyComponent,
    BarcodeArInfoAnnotationFooter,
    BarcodeArInfoAnnotationWidthPreset,
    BarcodeArResponsiveAnnotation,
    BarcodeArPopoverAnnotation,
    BarcodeArPopoverAnnotationButton,
    BarcodeArAnnotationTrigger,
    BarcodeArStatusIconAnnotation,
    Symbology,
} from 'scandit-capacitor-datacapture-barcode';

let context;
let camera;
let barcodeAr;
let barcodeArView;

let currentFeature = 'info-annotations';

function showScreen(screenId) {
    document.getElementById('home').classList.toggle('hidden', screenId !== 'home');
    document.getElementById('scanning').classList.toggle('hidden', screenId !== 'scanning');
    document.getElementById('results').classList.toggle('hidden', screenId !== 'results');
}

async function startScanning(featureType) {
    currentFeature = featureType;
    showScreen('scanning');

    const titles = {
        highlights: 'Highlights',
        'info-annotations': 'Info Annotations',
        popovers: 'Popovers',
        'status-icons': 'Status Icons',
    };
    const toolbarTitle = document.getElementById('toolbar-title');
    if (toolbarTitle) {
        toolbarTitle.textContent = titles[featureType] || 'MatrixScan AR';
    }

    await initializeSDK();

    updateBarcodeArFeature(featureType);

    if (camera) {
        await camera.switchToDesiredState(FrameSourceState.On);
    }
}

function done() {
    uninitializeSDK();
    showScreen('home');
}

function updateBarcodeArFeature(featureType) {
    if (!barcodeArView) return;

    barcodeArView.highlightProvider = null;
    barcodeArView.annotationProvider = null;
    barcodeArView.uiListener = null;

    switch (featureType) {
        case 'highlights':
            updateToHighlightMode();
            break;
        case 'info-annotations':
            updateToAnnotationsMode();
            break;
        case 'popovers':
            updateToPopoverMode();
            break;
        case 'status-icons':
            updateToStatusIconsMode();
            break;
    }
}

function updateToHighlightMode() {
    const selectedBrush = new Brush(Color.fromHex('#0000FF66'), Color.fromHex('#0000FF'), 1.0);
    const normalBrush = new Brush(Color.fromHex('#00FFFF66'), Color.fromHex('#00FFFF'), 1.0);
    const checkMarkIcon = new ScanditIconBuilder()
        .withIcon(ScanditIconType.Checkmark)
        .withIconColor(Color.fromHex('#FFFFFF'))
        .build();
    const tappedBarcodes = [];

    barcodeArView.highlightProvider = {
        highlightForBarcode: async barcode => {
            const highlight = new BarcodeArRectangleHighlight(barcode);

            if (tappedBarcodes.includes(barcode.data)) {
                highlight.brush = selectedBrush;
                highlight.icon = checkMarkIcon;
            } else {
                highlight.brush = normalBrush;
                highlight.icon = null;
            }
            return highlight;
        },
    };

    barcodeArView.uiListener = {
        didTapHighlightForBarcode: async (_, barcode, highlight) => {
            if (!barcode.data) return;

            if (tappedBarcodes.includes(barcode.data)) {
                highlight.brush = normalBrush;
                highlight.icon = null;
                tappedBarcodes.splice(tappedBarcodes.indexOf(barcode.data), 1);
            } else {
                highlight.brush = selectedBrush;
                highlight.icon = checkMarkIcon;
                tappedBarcodes.push(barcode.data);
            }
        },
    };
}

function updateToAnnotationsMode() {
    const checkMarkIcon = new ScanditIconBuilder()
        .withIcon(ScanditIconType.Checkmark)
        .withIconColor(Color.fromHex('#000000'))
        .build();

    const exclamationMarkIcon = new ScanditIconBuilder()
        .withIcon(ScanditIconType.ExclamationMark)
        .withIconColor(Color.fromHex('#000000'))
        .build();

    barcodeArView.highlightProvider = {
        highlightForBarcode: async barcode => {
            const highlight = new BarcodeArCircleHighlight(barcode, BarcodeArCircleHighlightPreset.Dot);
            highlight.brush = new Brush(Color.fromHex('#00FFFF'), Color.fromHex('#00FFFF'), 1.0);
            return highlight;
        },
    };

    barcodeArView.annotationProvider = {
        annotationForBarcode: async barcode => {
            const closeup = new BarcodeArInfoAnnotation(barcode);
            closeup.backgroundColor = Color.fromHex('#FFFFFF');

            const header = new BarcodeArInfoAnnotationHeader();
            header.text = 'Header';
            header.icon = checkMarkIcon;
            header.backgroundColor = Color.fromHex('#00FFFF');
            closeup.header = header;

            const first = new BarcodeArInfoAnnotationBodyComponent();
            first.text = 'This is text in a large container.';
            const second = new BarcodeArInfoAnnotationBodyComponent();
            second.text = 'It can have multiple lines.';

            const third = new BarcodeArInfoAnnotationBodyComponent();
            third.leftIcon = checkMarkIcon;
            third.text = 'Point';

            const fourth = new BarcodeArInfoAnnotationBodyComponent();
            fourth.leftIcon = checkMarkIcon;
            fourth.text = 'Point';
            closeup.body = [first, second, third, fourth];

            const footer = new BarcodeArInfoAnnotationFooter();
            footer.text = 'Tap to change color';
            footer.backgroundColor = Color.fromHex('#121619');
            closeup.footer = footer;

            closeup.width = BarcodeArInfoAnnotationWidthPreset.Large;
            closeup.isEntireAnnotationTappable = true;

            closeup.listener = {
                didTap: annotation => {
                    if (annotation.header.icon.icon === ScanditIconType.ExclamationMark) {
                        annotation.header.backgroundColor = Color.fromHex('#00FFFF');
                        annotation.header.icon = checkMarkIcon;
                    } else {
                        annotation.header.backgroundColor = Color.fromHex('#FF0000');
                        annotation.header.icon = exclamationMarkIcon;
                    }
                },
                didTapHeader: () => {},
                didTapFooter: () => {},
                didTapLeftIcon: () => {},
                didTapRightIcon: () => {},
            };

            const faraway = new BarcodeArInfoAnnotation(barcode);
            faraway.width = BarcodeArInfoAnnotationWidthPreset.Medium;

            const farawayBody = new BarcodeArInfoAnnotationBodyComponent();
            farawayBody.text = 'Body text';
            faraway.body = [farawayBody];

            const annotation = new BarcodeArResponsiveAnnotation(barcode, closeup, faraway);
            annotation.threshold = 0.05;
            return annotation;
        },
    };
}

function updateToPopoverMode() {
    const redColor = Color.fromHex('#D92121');
    const greenColor = Color.fromHex('#0D853D');
    const whiteColor = Color.fromHex('#FFFFFF');

    const redBrush = new Brush(redColor, redColor, 1.0);
    const greenBrush = new Brush(greenColor, greenColor, 1.0);

    const barcodeStatus = new Map();
    const highlights = new Map();

    const rejectButtonIcon = new ScanditIconBuilder()
        .withIcon(ScanditIconType.XMark)
        .withIconColor(whiteColor)
        .withBackgroundShape(ScanditIconShape.Circle)
        .withBackgroundColor(redColor)
        .build();

    const acceptButtonIcon = new ScanditIconBuilder()
        .withIcon(ScanditIconType.Checkmark)
        .withIconColor(whiteColor)
        .withBackgroundShape(ScanditIconShape.Circle)
        .withBackgroundColor(greenColor)
        .build();

    barcodeArView.highlightProvider = {
        highlightForBarcode: async barcode => {
            if (!barcode.data) return null;

            if (!barcodeStatus.has(barcode.data)) {
                barcodeStatus.set(barcode.data, barcodeStatus.size % 2 === 0 ? 'wrong' : 'accepted');
            }

            let highlight = highlights.get(barcode.data);
            if (!highlight) {
                highlight = new BarcodeArCircleHighlight(barcode, BarcodeArCircleHighlightPreset.Icon);
                highlights.set(barcode.data, highlight);
            }

            const status = barcodeStatus.get(barcode.data);
            if (status === 'accepted') {
                highlight.brush = greenBrush;
                highlight.icon = new ScanditIconBuilder()
                    .withIcon(ScanditIconType.Checkmark)
                    .withIconColor(whiteColor)
                    .build();
            } else if (status === 'wrong') {
                highlight.brush = redBrush;
                highlight.icon = new ScanditIconBuilder()
                    .withIcon(ScanditIconType.ExclamationMark)
                    .withIconColor(whiteColor)
                    .build();
            } else if (status === 'rejected') {
                highlight.brush = redBrush;
                highlight.icon = new ScanditIconBuilder()
                    .withIcon(ScanditIconType.XMark)
                    .withIconColor(whiteColor)
                    .build();
            }

            return highlight;
        },
    };

    barcodeArView.annotationProvider = {
        annotationForBarcode: async barcode => {
            if (!barcode.data) return null;

            if (barcodeStatus.get(barcode.data) !== 'wrong') {
                return null;
            }

            const rejectButton = new BarcodeArPopoverAnnotationButton(rejectButtonIcon, 'Reject');
            const acceptButton = new BarcodeArPopoverAnnotationButton(acceptButtonIcon, 'Accept');

            const annotation = new BarcodeArPopoverAnnotation(barcode, [rejectButton, acceptButton]);
            annotation.annotationTrigger = BarcodeArAnnotationTrigger.HighlightTap;

            annotation.listener = {
                didTapButton: async (annotation, _button, buttonIndex) => {
                    if (!annotation.barcode.data) return;

                    if (buttonIndex === 0) {
                        barcodeStatus.set(annotation.barcode.data, 'rejected');
                    } else if (buttonIndex === 1) {
                        barcodeStatus.set(annotation.barcode.data, 'accepted');
                    }

                    const highlight = highlights.get(annotation.barcode.data);
                    const status = barcodeStatus.get(annotation.barcode.data);
                    if (highlight && status === 'accepted') {
                        highlight.brush = greenBrush;
                        highlight.icon = new ScanditIconBuilder()
                            .withIcon(ScanditIconType.Checkmark)
                            .withIconColor(whiteColor)
                            .build();
                    } else if (highlight && status === 'rejected') {
                        highlight.brush = redBrush;
                        highlight.icon = new ScanditIconBuilder()
                            .withIcon(ScanditIconType.XMark)
                            .withIconColor(whiteColor)
                            .build();
                    }
                },
            };

            return annotation;
        },
    };
}

function updateToStatusIconsMode() {
    const redColor = Color.fromHex('#D92121');
    const yellowColor = Color.fromHex('#FBC02C');
    const blackColor = Color.fromHex('#000000');
    const whiteColor = Color.fromHex('#FFFFFF');

    const barcodeStatus = new Map();

    barcodeArView.highlightProvider = {
        highlightForBarcode: async barcode => {
            if (!barcode.data) return null;

            if (!barcodeStatus.has(barcode.data)) {
                barcodeStatus.set(barcode.data, barcodeStatus.size % 2 === 0 ? 'closeToExpiry' : 'expired');
            }

            const highlight = new BarcodeArRectangleHighlight(barcode);
            return highlight;
        },
    };

    barcodeArView.annotationProvider = {
        annotationForBarcode: async barcode => {
            if (!barcode.data) return null;

            const annotation = new BarcodeArStatusIconAnnotation(barcode);
            const status = barcodeStatus.get(barcode.data);

            if (status === 'closeToExpiry') {
                annotation.text = 'Close to expiry';
                annotation.icon = new ScanditIconBuilder()
                    .withBackgroundShape(ScanditIconShape.Circle)
                    .withBackgroundColor(yellowColor)
                    .withIcon(ScanditIconType.ExclamationMark)
                    .withIconColor(blackColor)
                    .build();
            } else if (status === 'expired') {
                annotation.text = 'Item expired';
                annotation.icon = new ScanditIconBuilder()
                    .withBackgroundShape(ScanditIconShape.Circle)
                    .withBackgroundColor(redColor)
                    .withIcon(ScanditIconType.ExclamationMark)
                    .withIconColor(whiteColor)
                    .build();
            }

            return annotation;
        },
    };
}

async function initializeSDK() {
    if (!context) {
        context = DataCaptureContext.initialize('-- ENTER YOUR SCANDIT LICENSE KEY HERE --');
    }

    const cameraSettings = BarcodeAr.createRecommendedCameraSettings();
    cameraSettings.preferredResolution = VideoResolution.UHD4K;
    camera = Camera.withSettings(cameraSettings);
    if (!camera) throw new Error('Camera is not available');

    await context.setFrameSource(camera);

    const settings = new BarcodeArSettings();

    settings.enableSymbologies([
        Symbology.EAN13UPCA,
        Symbology.EAN8,
        Symbology.UPCE,
        Symbology.Code39,
        Symbology.Code128,
        Symbology.QR,
        Symbology.DataMatrix,
    ]);

    barcodeAr = new BarcodeAr(settings);

    const viewSettings = new BarcodeArViewSettings();

    barcodeArView = new BarcodeArView({
        context,
        barcodeAr,
        settings: viewSettings,
        cameraSettings,
    });

    const barcodeArElement = document.getElementById('barcode-ar-view');
    if (!barcodeArElement) throw new Error('BarcodeAr view element not found');

    await barcodeArView.connectToElement(barcodeArElement);
}

async function uninitializeSDK() {
    if (camera) {
        await camera.switchToDesiredState(FrameSourceState.Off);
        camera = null;
    }

    if (barcodeArView) {
        barcodeArView.detachFromElement();
        barcodeArView = null;
    }

    showScreen('home');
}

window.addEventListener('load', async () => {
    await ScanditCaptureCorePlugin.initializePlugins();
    
    showScreen('home');

    document.getElementById('highlights-card').addEventListener('click', () => startScanning('highlights'));
    document.getElementById('info-annotations-card').addEventListener('click', () => startScanning('info-annotations'));
    document.getElementById('popovers-card').addEventListener('click', () => startScanning('popovers'));
    document.getElementById('status-icons-card').addEventListener('click', () => startScanning('status-icons'));
    document.getElementById('return-button').addEventListener('click', done);
    
    App.addListener('backButton', () => {
        const scanningScreen = document.getElementById('scanning');
        if (!scanningScreen.classList.contains('hidden')) {
            done();
        }
    });
});
