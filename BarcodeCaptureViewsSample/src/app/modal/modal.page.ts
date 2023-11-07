import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AlertController, ModalController, ViewDidEnter, ViewWillLeave } from '@ionic/angular';
import { environment } from 'src/environments/environment';

declare var Scandit;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements AfterViewInit, ViewDidEnter, ViewWillLeave, OnDestroy {
  private context = Scandit.DataCaptureContext.forLicenseKey(environment.scanditLicenseKey);
  private camera = Scandit.Camera.default;

  private settings = new Scandit.BarcodeCaptureSettings();
  private barcodeCapture = Scandit.BarcodeCapture.forContext(this.context, this.settings);
  private barcodeCaptureListener: { didScan: (barcodeCapture: any, session: any) => Promise<void>; };

  private captureView = Scandit.DataCaptureView.forContext(this.context);
  @ViewChild('captureView') captureViewElement: ElementRef<HTMLDivElement>;
  private overlay = Scandit.BarcodeCaptureOverlay.withBarcodeCaptureForView(this.barcodeCapture, this.captureView);

  constructor(
    private alertController: AlertController,
    public modalController: ModalController,
  ) { }

  ngAfterViewInit() {
    this.settings.enableSymbologies([
      Scandit.Symbology.EAN13UPCA,
      Scandit.Symbology.EAN8,
      Scandit.Symbology.UPCE,
      Scandit.Symbology.QR,
      Scandit.Symbology.DataMatrix,
      Scandit.Symbology.Code39,
      Scandit.Symbology.Code128,
      Scandit.Symbology.InterleavedTwoOfFive,
    ]);
    this.settings.codeDuplicateFilter = 1000;
    this.barcodeCapture.applySettings(this.settings);

    this.barcodeCaptureListener = {
      didScan: async (barcodeCapture, session) => {
        this.barcodeCapture.isEnabled = false;
        const barcode = session.newlyRecognizedBarcodes[0];
        const symbology = new Scandit.SymbologyDescription(barcode.symbology);

        this.captureViewElement.nativeElement.style.zIndex = '-1';

        const alert = await this.alertController.create({
          header: 'Scanned',
          subHeader: `${symbology.readableName}: ${barcode.data}`,
          message: `Symbol count: ${barcode.symbolCount}`,
          buttons: [{ text: 'Ok' }]
        });
        alert.onDidDismiss().then(() => {
          this.captureViewElement.nativeElement.style.zIndex = '0';
          this.barcodeCapture.isEnabled = true;
        });

        alert.present();
      }
    };

    this.barcodeCapture.addListener(this.barcodeCaptureListener);
    this.context.setFrameSource(this.camera);
    this.camera.switchToDesiredState(Scandit.FrameSourceState.On);
  }

  ionViewDidEnter(): void {
    this.captureView.connectToElement(this.captureViewElement.nativeElement);
    this.barcodeCapture.isEnabled = true;
  }

  ionViewWillLeave(): void {
    this.camera.switchToDesiredState(Scandit.FrameSourceState.Off);
    this.barcodeCapture.isEnabled = false;
    this.barcodeCapture.removeListener(this.barcodeCaptureListener);
    this.captureView.detachFromElement();
  }

  ngOnDestroy() {
    this.context.dispose();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
