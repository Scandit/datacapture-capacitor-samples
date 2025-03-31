import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import {
  BarcodeSelectionStrategyType,
  BarcodeSelectionSymbologyFormValue,
  BarcodeSelectionTypeName,
  Brush,
} from '../models';
import { SettingsService } from '../services';
import {
  BarcodeSelection,
  BarcodeSelectionAimerSelection,
  BarcodeSelectionAutoSelectionStrategy,
  BarcodeSelectionBasicOverlay,
  BarcodeSelectionFeedback,
  BarcodeSelectionListener,
  BarcodeSelectionManualSelectionStrategy,
  BarcodeSelectionSession,
  BarcodeSelectionSettings,
  BarcodeSelectionTapSelection,
  Symbology,
  SymbologyDescription
} from 'scandit-capacitor-datacapture-barcode';

import {
  Brush as ScanditBrush,
  Camera,
  CameraSettings,
  Color,
  DataCaptureContext,
  DataCaptureView,
  Feedback,
  FrameSourceState,
  MarginsWithUnit,
  NumberWithUnit,
  PointWithUnit,
  TorchState,
  MeasureUnit
} from 'scandit-capacitor-datacapture-core';

@Component({
  selector: 'app-scan',
  templateUrl: 'scan.component.html',
  styleUrls: ['scan.component.scss'],
})
export class ScanComponent implements AfterViewInit {
  public barcodeSelection: BarcodeSelection;
  public listener: BarcodeSelectionListener;
  private context: DataCaptureContext;
  private view: DataCaptureView;
  @ViewChild('captureView') captureView: ElementRef<HTMLDivElement>;

  private isPageActive = false;

  private barcodeSelectionSettings = new BarcodeSelectionSettings();



  constructor(
    private settingsService: SettingsService,
    private toastController: ToastController,
  ) { }

  public async ionViewDidEnter() {
    this.isPageActive = true;
    this.barcodeSelection.isEnabled = false;

    if (this.settingsService.reset) {
      this.barcodeSelection.reset();
    }

    await this.barcodeSelection.applySettings(this.getBarcodeSelectionSettings());

    this.listener = {
      didUpdateSelection: async (_: BarcodeSelection, session: BarcodeSelectionSession) => {
        if (!this.isPageActive) {
          return;
        }

        if (session.newlySelectedBarcodes.length === 0) {
          return;
        }

        this.captureView.nativeElement.style.zIndex = '-1';

        const barcode = session.newlySelectedBarcodes[0];
        const symbology = new SymbologyDescription(barcode.symbology);
        const count = await session.getCount(barcode);

        (await this.toastController.getTop())?.dismiss();
        const toast = await this.toastController.create({
          message: `Scan Results\n${symbology.readableName}: ${barcode.data}\nTimes: ${count}`,
          duration: 500,
        });

        toast.onDidDismiss().then(() => {
          if (this.isPageActive) {
            this.captureView.nativeElement.style.zIndex = '1';
          }
        });

        toast.present();
      },
      didUpdateSession: async (_: BarcodeSelection, session: BarcodeSelectionSession) => {
        // Called every frame.
        console.info(session);
      }
    };

    this.barcodeSelection.addListener(this.listener);

    this.applyBarcodeSelectionPointOfInterest();
    this.applyFeedbackSettings();
    this.applyCodeDuplicateFilterSettings();

    await this.applyCameraSettings();
    this.applyViewSettings();

    this.barcodeSelection.isEnabled = true;
  }

  public ionViewDidLeave() {
    this.isPageActive = false;
    this.barcodeSelection.removeListener(this.listener);
    this.barcodeSelection.isEnabled = false;
    this.context.frameSource.switchToDesiredState(FrameSourceState.Off);
    this.view.detachFromElement();
  }

  public ngAfterViewInit() {
    this.context = DataCaptureContext.forLicenseKey(environment.scanditLicenseKey);
    this.barcodeSelection = BarcodeSelection.forContext(this.context, null);
  }

  public getBarcodeSelectionSettings() {
    const enabledSymbologiesSettings = Object.entries(this.settingsService.symbologiesForm.value)
      .map(([key, value]) => ({ ...value, key }))
      .filter(settings => settings.enabled);

    const {
      SELECTION_TYPE,
      FREEZE_BEHAVIOUR,
      TAP_BEHAVIOUR,
      SELECTION_STRATEGY,
    } = this.settingsService.selectionTypeForm.value;

    if (SELECTION_TYPE === BarcodeSelectionTypeName.Tap) {
      this.barcodeSelectionSettings.selectionType = BarcodeSelectionTapSelection
        .withFreezeBehaviorAndTapBehavior(FREEZE_BEHAVIOUR, TAP_BEHAVIOUR);
    } else if (SELECTION_TYPE === BarcodeSelectionTypeName.Aimer) {
      this.barcodeSelectionSettings.selectionType = BarcodeSelectionAimerSelection.aimerSelection;
      if (SELECTION_STRATEGY === BarcodeSelectionStrategyType.Auto) {
        (this.barcodeSelectionSettings.selectionType as BarcodeSelectionAimerSelection).selectionStrategy
          = BarcodeSelectionAutoSelectionStrategy.autoSelectionStrategy;
      } else if (SELECTION_STRATEGY === BarcodeSelectionStrategyType.Manual) {
        (this.barcodeSelectionSettings.selectionType as BarcodeSelectionAimerSelection).selectionStrategy
          = BarcodeSelectionManualSelectionStrategy.manualSelectionStrategy;
      }
    }

    this.barcodeSelectionSettings.enableSymbologies(enabledSymbologiesSettings.map(({ key }) => Symbology[key]));

    enabledSymbologiesSettings.forEach(settings => this.applySymbologySettings(this.barcodeSelectionSettings, settings));

    this.barcodeSelectionSettings.singleBarcodeAutoDetection
      = this.settingsService.singleBarcodeAutoDetectionForm.value.SINGLE_BARCODE_AUTO_DETECTION;

    return this.barcodeSelectionSettings;
  }

  public applyFeedbackSettings() {
    const { FEEDBACK_VIBRATION, FEEDBACK_SOUND } = this.settingsService.feedbackForm.value;

    const feedback = BarcodeSelectionFeedback.default;

    const vibration = FEEDBACK_VIBRATION ? feedback.selection.vibration : null;
    const sound = FEEDBACK_SOUND ? feedback.selection.sound : null;

    feedback.selection = new Feedback(vibration, sound);
    this.barcodeSelection.feedback = feedback;
  }

  public applyBarcodeSelectionPointOfInterest() {
    const { BS_POINT_OF_INTEREST_ENABLED, BS_POINT_OF_INTEREST_X, BS_POINT_OF_INTEREST_Y } =
      this.settingsService.barcodeSelectionPointOfInterestForm.value;

    if (BS_POINT_OF_INTEREST_ENABLED) {
      const pointOfInterestX = this.getNumberWithUnit(BS_POINT_OF_INTEREST_X);
      const pointOfInterestY = this.getNumberWithUnit(BS_POINT_OF_INTEREST_Y);
      this.barcodeSelection.pointOfInterest = new PointWithUnit(pointOfInterestX, pointOfInterestY);
    } else {
      this.barcodeSelection.pointOfInterest = null;
    }
  }

  public applyCodeDuplicateFilterSettings() {
    const { CODE_DUPLICATE_FILTER } = this.settingsService.codeDuplicateFilterForm.value;

    const barcodeSelectionSettings = this.getBarcodeSelectionSettings();

    barcodeSelectionSettings.codeDuplicateFilter = CODE_DUPLICATE_FILTER * 1000;

    this.barcodeSelection.applySettings(barcodeSelectionSettings);
  }

  public applyCameraSettings(): Promise<void> {
    const {
      DESIRED_TORCH_STATE,
      CAMERA_POSITION,
      PREFERRED_RESOLUTION,
      ZOOM_FACTOR,
      FOCUS_RANGE,
    } = this.settingsService.cameraForm.value;

    const cameraSettings = new CameraSettings();
    cameraSettings.preferredResolution = PREFERRED_RESOLUTION;
    cameraSettings.zoomFactor = ZOOM_FACTOR;
    cameraSettings.focusRange = FOCUS_RANGE;

    const camera = Camera.atPosition(CAMERA_POSITION);

    camera.desiredTorchState = DESIRED_TORCH_STATE ? TorchState.On : TorchState.Off;

    const switchToDesiredStatePromise = this.context.frameSource ?
      this.context.frameSource.switchToDesiredState(FrameSourceState.Off) :
      Promise.resolve();

    return switchToDesiredStatePromise
      .then(() => camera.applySettings(cameraSettings))
      .then(() => this.context.setFrameSource(camera))
      .then(() => camera.switchToDesiredState(FrameSourceState.On));
  }

  public applyViewSettings() {
    const { SCAN_AREA_GUIDES } = this.settingsService.scanAreaForm.value;

    this.captureView.nativeElement.style.zIndex = '1';
    if (!this.view) {
      this.view = DataCaptureView.forContext(this.context);
    }
    this.view.connectToElement(this.captureView.nativeElement);

    this.applyPointOfInterestSettings();
    this.applyScanAreaSettings();

    this.view.zoomGesture = null;

    this.applyOverlayStyleSettings(SCAN_AREA_GUIDES, this.view);
  }

  private applySymbologySettings(
    barcodeSelectionSettings,
    settings: BarcodeSelectionSymbologyFormValue & { key: string },
  ) {
    const symbologySettings = barcodeSelectionSettings.settingsForSymbology(Symbology[settings.key]);

    if (settings.colorInverted !== undefined) {
      symbologySettings.isColorInvertedEnabled = settings.colorInverted;
    }

    if (settings.minimum !== undefined && settings.maximum !== undefined) {
      const activeSymbolCounts = new Array(settings.maximum + 1 - settings.minimum)
        .fill(0)
        .map((_, index) => settings.minimum + index);

      symbologySettings.activeSymbolCounts = activeSymbolCounts;
    }

    if (settings.extensions !== undefined && Array.isArray(settings.extensions)) {
      symbologySettings.enabledExtensions.forEach(extension => symbologySettings.setExtensionEnabled(extension, false));
      settings.extensions.forEach(extension => symbologySettings.setExtensionEnabled(extension, true));
    }
  }

  private applyPointOfInterestSettings() {
    const { POINT_OF_INTEREST_X, POINT_OF_INTEREST_Y } = this.settingsService.pointOfInterestForm.value;

    const pointOfInterestX = this.getNumberWithUnit(POINT_OF_INTEREST_X);
    const pointOfInterestY = this.getNumberWithUnit(POINT_OF_INTEREST_Y);
    const pointOfInterest = new PointWithUnit(pointOfInterestX, pointOfInterestY);

    this.view.pointOfInterest = pointOfInterest;
  }

  private applyScanAreaSettings() {
    const {
      SCAN_AREA_MARGIN_BOTTOM,
      SCAN_AREA_MARGIN_LEFT,
      SCAN_AREA_MARGIN_RIGHT,
      SCAN_AREA_MARGIN_TOP,
    } = this.settingsService.scanAreaForm.value;

    const scanAreaTop = this.getNumberWithUnit(SCAN_AREA_MARGIN_TOP);
    const scanAreaRight = this.getNumberWithUnit(SCAN_AREA_MARGIN_RIGHT);
    const scanAreaBottom = this.getNumberWithUnit(SCAN_AREA_MARGIN_BOTTOM);
    const scanAreaLeft = this.getNumberWithUnit(SCAN_AREA_MARGIN_LEFT);

    this.view.scanAreaMargins = new MarginsWithUnit(scanAreaLeft, scanAreaRight, scanAreaTop, scanAreaBottom);
  }

  private applyOverlayStyleSettings(SCAN_AREA_GUIDES, view) {
    const {
      OVERLAY_STYLE,
      TRACKED_BRUSH,
      AIMED_BRUSH,
      SELECTING_BRUSH,
      SELECTED_BRUSH,
      SHOULD_SHOW_HINTS
    } = this.settingsService.overlayForm.value;

    view.baseDataCaptureView.overlays.forEach((viewOverlay: BarcodeSelectionBasicOverlay) => view.removeOverlay(viewOverlay));

    const overlay = BarcodeSelectionBasicOverlay.withBarcodeSelectionForViewWithStyle(
      this.barcodeSelection,
      this.view,
      OVERLAY_STYLE,
    );

    overlay.shouldShowScanAreaGuides = SCAN_AREA_GUIDES;
    overlay.shouldShowHints = SHOULD_SHOW_HINTS;

    overlay.trackedBrush = TRACKED_BRUSH === Brush.Default ?
      overlay.trackedBrush : new ScanditBrush(this.getColor(TRACKED_BRUSH), this.getColor(TRACKED_BRUSH), 1);
    overlay.aimedBrush = AIMED_BRUSH === Brush.Default ?
      overlay.aimedBrush : new ScanditBrush(this.getColor(AIMED_BRUSH), this.getColor(AIMED_BRUSH), 1);
    overlay.selectingBrush = SELECTING_BRUSH === Brush.Default ?
      overlay.selectingBrush : new ScanditBrush(this.getColor(SELECTING_BRUSH), this.getColor(SELECTING_BRUSH), 1);
    overlay.selectedBrush = SELECTED_BRUSH === Brush.Default ?
      overlay.selectedBrush : new ScanditBrush(this.getColor(SELECTED_BRUSH), this.getColor(SELECTED_BRUSH), 1);
  }

  private getColor(rgbaString: string) {
    const parts = rgbaString.replace('rgba(', '').replace(')', '').split(',');
    // @ts-ignore
    return Color.fromRGBA(...parts);
  }

  private getNumberWithUnit({ value, unit }: { value: number; unit: MeasureUnit }) {
    return new NumberWithUnit(value, unit);
  }

}
