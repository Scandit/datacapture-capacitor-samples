import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ViewDidEnter, ViewWillLeave } from '@ionic/angular';
import { BarcodeCaptureSettings, BarcodeCapture, BarcodeCaptureOverlay, Symbology, SymbologyDescription } from 'scandit-capacitor-datacapture-barcode';
import { DataCaptureContext, Camera, DataCaptureView, AimerViewfinder, RadiusLocationSelection, NumberWithUnit, MeasureUnit, FrameSourceState } from 'scandit-capacitor-datacapture-core';
import { environment } from '../../environments/environment';

interface Result {
  data: string;
  symbology: string;
}

@Component({
  selector: 'app-split-screen',
  templateUrl: './split-screen.page.html',
  styleUrls: ['./split-screen.page.scss'],
})
export class SplitScreenPage implements AfterViewInit, ViewDidEnter, ViewWillLeave, OnDestroy {
  private context = DataCaptureContext.forLicenseKey(environment.scanditLicenseKey);
  private camera = Camera.default;

  private settings = new BarcodeCaptureSettings();
  private barcodeCapture = BarcodeCapture.forContext(this.context, this.settings);

  private captureView = DataCaptureView.forContext(this.context);
  @ViewChild('captureView') captureViewElement: ElementRef<HTMLDivElement>;
  private overlay = BarcodeCaptureOverlay.withBarcodeCaptureForView(this.barcodeCapture, this.captureView);

  public results: Result[] = [];

  public isCaptureViewConnected = false;

  private scanTimer;

  constructor(
    private changeDetection: ChangeDetectorRef,
  ) { }

  ngAfterViewInit() {
    this.overlay.viewfinder = new AimerViewfinder();

    this.settings.enableSymbologies([
      Symbology.EAN13UPCA,
      Symbology.EAN8,
      Symbology.UPCE,
      Symbology.QR,
      Symbology.DataMatrix,
      Symbology.Code39,
      Symbology.Code128,
      Symbology.InterleavedTwoOfFive,
    ]);
    this.settings.codeDuplicateFilter = 1000;
    this.settings.locationSelection = new RadiusLocationSelection(
      new NumberWithUnit(0, MeasureUnit.Fraction)
    );
    this.barcodeCapture.applySettings(this.settings);

    this.barcodeCapture.addListener({
      didScan: async (barcodeCapture, session) => {
        const barcode = session.newlyRecognizedBarcode;
        if (barcode == null) return;
        const symbology = new SymbologyDescription(barcode.symbology);

        this.results.push({ data: barcode.data!, symbology: symbology.readableName });
        this.changeDetection.detectChanges();

        this.resetScanTimeout();
      }
    });

    this.context.setFrameSource(this.camera);
    this.camera?.switchToDesiredState(FrameSourceState.On);
  }

  ionViewDidEnter(): void {
    this.captureView.connectToElement(this.captureViewElement.nativeElement);
    this.isCaptureViewConnected = true;

    this.barcodeCapture.isEnabled = true;

    this.resetScanTimeout();
  }

  ionViewWillLeave(): void {
    this.captureView.detachFromElement();
    this.isCaptureViewConnected = false;

    this.camera?.switchToDesiredState(FrameSourceState.Off);
    this.barcodeCapture.isEnabled = false;
  }

  ngOnDestroy() {
    this.context.dispose();
  }

  public clearResults() {
    this.results = [];
  }

  public resetScanTimeout() {
    clearTimeout(this.scanTimer);
    this.barcodeCapture.isEnabled = true;
    this.scanTimer = setTimeout(() => {
      this.barcodeCapture.isEnabled = false;
      this.changeDetection.detectChanges();
    }, 10000);
  }
}
