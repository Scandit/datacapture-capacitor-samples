import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AlertController, ModalController, ViewDidEnter, ViewWillLeave } from '@ionic/angular';
import { BarcodeCaptureSettings, BarcodeCapture, BarcodeCaptureOverlay, Symbology, SymbologyDescription } from 'scandit-capacitor-datacapture-barcode';
import { DataCaptureContext, Camera, DataCaptureView, FrameSourceState } from 'scandit-capacitor-datacapture-core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements AfterViewInit, ViewDidEnter, ViewWillLeave, OnDestroy {
  private context = DataCaptureContext.forLicenseKey(environment.scanditLicenseKey);
  private camera = Camera.default;

  private settings = new BarcodeCaptureSettings();
  private barcodeCapture = BarcodeCapture.forContext(this.context, this.settings);

  private captureView = DataCaptureView.forContext(this.context);
  @ViewChild('captureView') captureViewElement: ElementRef<HTMLDivElement>;
  private overlay = BarcodeCaptureOverlay.withBarcodeCaptureForView(this.barcodeCapture, this.captureView);

  constructor(
    private alertController: AlertController,
    public modalController: ModalController,
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
    this.barcodeCapture.isEnabled = true;
  }

  ionViewWillLeave(): void {
    this.camera?.switchToDesiredState(FrameSourceState.Off);
    this.barcodeCapture.isEnabled = false;
    this.captureView.detachFromElement();
  }

  ngOnDestroy() {
    this.context.dispose();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
