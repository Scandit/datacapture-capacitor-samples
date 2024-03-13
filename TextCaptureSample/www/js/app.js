import 'scandit-capacitor-datacapture-parser';
import 'scandit-capacitor-datacapture-text';

import {
    Camera,
    DataCaptureContext,
    DataCaptureView,
    FrameSourceState,
    MeasureUnit,
    NumberWithUnit,
    PointWithUnit,
    RectangularLocationSelection,
    RectangularViewfinder,
    RectangularViewfinderLineStyle,
    RectangularViewfinderStyle,
    ScanditCaptureCorePlugin
} from 'scandit-capacitor-datacapture-core';

async function runApp() {
    const Mode = {
        GS1: 'gs1',
        LOT: 'lot',
    };

    window.currentMode = () => document.querySelector('#mode li.selected').attributes['sdc-mode'].value;

    window.setupMode = mode => {
        // Settings for GS1 mode.
        const gs1Viewfinder = (() => {
            const viewfinder = new RectangularViewfinder(
                RectangularViewfinderStyle.Square,
                RectangularViewfinderLineStyle.Light,
            );
            viewfinder.dimming = 0.2;
            viewfinder.setWidthAndAspectRatio(new NumberWithUnit(0.9, MeasureUnit.Fraction), 0.2);
            return viewfinder;
        })()
        const gs1Settings = (() => {
            const settings = Scandit.TextCaptureSettings.fromJSON({ regex: "((\\\(\\\d+\\\)[\\\dA-Z]+)+)" })
            settings.locationSelection = RectangularLocationSelection
                .withWidthAndAspectRatio(new NumberWithUnit(0.9, MeasureUnit.Fraction), 0.2);
            return settings;
        })()

        // Settings for LOT mode.
        const lotViewfinder = (() => {
            const viewfinder = new RectangularViewfinder(
                RectangularViewfinderStyle.Square,
                RectangularViewfinderLineStyle.Light,
            );
            viewfinder.dimming = 0.2;
            viewfinder.setWidthAndAspectRatio(new NumberWithUnit(0.6, MeasureUnit.Fraction), 0.2);
            return viewfinder;
        })()
        const lotSettings = (() => {
            const settings = Scandit.TextCaptureSettings.fromJSON({ regex: "([A-Z0-9]{6,8})" });
            settings.locationSelection = RectangularLocationSelection
                .withWidthAndAspectRatio(new NumberWithUnit(0.6, MeasureUnit.Fraction), 0.2);
            return settings;
        })()

        // Apply settings for the given mode.
        window.textCapture.applySettings(mode === Mode.LOT ? lotSettings : gs1Settings);
        window.overlay.viewfinder = mode === Mode.LOT ? lotViewfinder : gs1Viewfinder;
    }

    window.setupPosition = position => {
        // Set the point of interest of the capture view, which will automatically move the center of the viewfinder
        // and the location selection area to this point.
        window.view.pointOfInterest = new PointWithUnit(
            new NumberWithUnit(0.5, MeasureUnit.Fraction),
            new NumberWithUnit(position, MeasureUnit.Fraction),
        );
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
        window.textCapture.isEnabled = true;
    }

    window.toggleSettings = () => {
        const isSettings = document.querySelector('#settings-toggle').innerText === "Settings";
        document.querySelector('#settings-toggle').innerText = isSettings ? "Done" : "Settings";
        document.querySelector('#settings').style.display = isSettings ? "inherit" : "none";
        document.querySelector('#data-capture-view').style.display = isSettings ? "none" : "inherit";
        window.textCapture.isEnabled = !isSettings;
    }

    window.selectMode = (sourceNode) => {
        const mode = sourceNode.attributes['sdc-mode'].value;
        window.setupMode(mode);
        document.querySelectorAll('#mode > li').forEach(node => node.className = node == sourceNode ? 'selected' : '');
    }

    window.selectPosition = (sourceNode) => {
        const position = parseFloat(sourceNode.attributes['sdc-position'].value);
        window.setupPosition(position);
        document.querySelectorAll('#position > li').forEach(node => node.className = node == sourceNode ? 'selected' : '');
    }

    // Initialize the plugins.
    const Scandit = await ScanditCaptureCorePlugin.initializePlugins();

    // Create data capture context using your license key.
    const context = DataCaptureContext.forLicenseKey('AbvELRLKNvXhGsHO0zMIIg85n3IiQdKMA2p5yeVDSOSZSZg/BhX401FXc+2UHPun8Rp2LRpw26tYdgnIJlXiLAtmXfjDZNQzZmrZY2R0QaJaXJC34UtcQE12hEpIYhu+AmjA5cROhJN3CHPoHDns+ho12ibrRAoFrAocoBIwCVzuTRHr0U6pmCKoa/Mn3sNPdINHh97m1X9Al9xjh3VOTNimP6ZjrHLVWEJSOdp2QYOnqn5izP1329PVcZhn8gqlGCRh+LJytbKJYI/KIRbMy3bNOyq5kNnr2IlOqaoXRgYdz2IU+jIWw8Cby9XoSB1zkphiYMmlCUqrDzxLUmTAXF4rSWobiM+OxnoImDqISpunJBQz0a5DSeT5Zf0lwwvXQLX4ghkgXozyYYfYvIKsqxJLZoza8g1BFsJ1i3fb0JYP2Ju209OMN2NTJifAu9ZJjQKGWS76Rmr/jre13jCqGgx5SX9F2lA2ZpF2AEb6rmYYmMtL9CPwWvstM+W295WvscH+gCBccZ9q3rxfIsak6cV2T50/2uBWfJJka6kL9UOjMOG3BOGKx+O+KWT/twwvOC+GcvC8s1qMwGNNM6G+/m7fG5Xtl5wtp3QhpzPJbBHSmlkYbxXQx0SpuWBmvxygyKOi3lUzz3gRzOdykWRXzrhiMAp5bb1y6n6g4O2v2TVgzWWF8vwZ6F60ehYDUq7pbusgT4Fl3fV7fYPgLxMMvXKduMmUlWyGv3CWL9LfvoY/hLl7RxoyUryTMmSfRVBcsKs+MWYJGh1iIvWk1UhOChb9IGI2PzUsHz7+OikuYMjKhR8LZZYalXpPiEVfT66yy75M5DODcjXRoFZU');

    // Use the world-facing (back) camera and set it as the frame source of the context. The camera is off by
    // default and must be turned on to start streaming frames to the data capture context for recognition.
    const camera = Camera.default;
    context.setFrameSource(camera);

    // Create a new text capture instance that manages text recognition.
    window.textCapture = Scandit.TextCapture.forContext(context);

    // Create a new parser instance that manages parsing when in GS1 mode.
    Scandit.Parser.forContextAndFormat(context, Scandit.ParserDataFormat.GS1AI).then(parser => {
        window.parser = parser;
        window.parser.setOptions({ allowHumanReadableCodes: true });
    });

    // Register a listener to get informed whenever new text got recognized.
    window.textCapture.addListener({
        didCaptureText: (textCapture, session) => {
            const text = session.newlyCapturedTexts[0];

            if (window.currentMode() === Mode.GS1) {
                // Parse GS1 results with the parser instance previously created.
                window.parser.parseString(text.value)
                    .then(parsedData => window.showResult(parsedData.fields
                        .map(field => `${field.name}: ${JSON.stringify(field.parsed)}`).join('<br>')))
                    .catch(error => {
                        window.showResult(error.message);
                    } );
            } else {
                window.showResult(text.value);
            }

            window.textCapture.isEnabled = false;
        }
    });

    // To visualize the on-going capturing process on screen, setup a data capture view that renders the
    // camera preview. The view must be connected to the data capture context.
    window.view = DataCaptureView.forContext(context);

    // Connect the data capture view to the HTML element, so it can fill up its size and follow its position.
    window.view.connectToElement(document.getElementById('data-capture-view'));

    // Add a text capture overlay to the data capture view to render the location of captured texts on top of
    // the video preview. This is optional, but recommended for better visual feedback.
    window.overlay = Scandit.TextCaptureOverlay.withTextCaptureForView(window.textCapture, window.view);

    window.selectMode(document.querySelector('#mode li.selected'));
    window.selectPosition(document.querySelector('#position li.selected'));

    // Switch camera on to start streaming frames and enable the text capture mode.
    // The camera is started asynchronously and will take some time to completely turn on.
    camera.switchToDesiredState(FrameSourceState.On);
    window.textCapture.isEnabled = true;

}

(function () {
    runApp();
})();
