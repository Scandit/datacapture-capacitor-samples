import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AlertController, ViewDidEnter, ViewWillLeave } from '@ionic/angular';
import { BarcodeCapture, BarcodeCaptureOverlay, BarcodeCaptureSettings, Symbology, SymbologyDescription } from 'scandit-capacitor-datacapture-barcode';
import { Camera, DataCaptureContext, DataCaptureView, FrameSourceState } from 'scandit-capacitor-datacapture-core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.page.html',
  styleUrls: ['./full-screen.page.scss'],
})
export class FullScreenPage implements AfterViewInit, ViewDidEnter, ViewWillLeave, OnDestroy {
  private context = DataCaptureContext.forLicenseKey(environment.scanditLicenseKey);
  private camera = Camera.default;

  private settings = new BarcodeCaptureSettings();
  private barcodeCapture = BarcodeCapture.forContext(this.context, this.settings);

  private captureView = DataCaptureView.forContext(this.context);
  @ViewChild('captureView') captureViewElement: ElementRef<HTMLDivElement>;
  private overlay = BarcodeCaptureOverlay.withBarcodeCaptureForView(this.barcodeCapture, this.captureView);

  public isCaptureViewConnected = false;

  constructor(
    private alertController: AlertController,
  ) { }

  ngAfterViewInit() {
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
    this.barcodeCapture.applySettings(this.settings);

    this.barcodeCapture.addListener({
      didScan: async (barcodeCapture, session) => {
        this.barcodeCapture.isEnabled = false;
        const barcode = session.newlyRecognizedBarcodes[0];
        const symbology = new SymbologyDescription(barcode.symbology);

        this.captureViewElement.nativeElement.style.zIndex = '-1';

        const alert = await this.alertController.create({
          cssClass: 'scandit-alert',
          header: 'Scanned',
          subHeader: `${symbology.readableName}: ${barcode.data}`,
          message: `Symbol count: ${barcode.symbolCount}`,
          buttons: [{ text: 'Ok' }]
        });
        alert.onDidDismiss().then(() => {
          this.captureViewElement.nativeElement.style.zIndex = '1';
          this.barcodeCapture.isEnabled = true;
        });

        alert.present();
      }
    });

    this.context.setFrameSource(this.camera);
    this.camera?.switchToDesiredState(FrameSourceState.On);
  }

  ionViewDidEnter(): void {
    this.captureView.connectToElement(this.captureViewElement.nativeElement);
    this.isCaptureViewConnected = true;

    this.barcodeCapture.isEnabled = true;
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
}
