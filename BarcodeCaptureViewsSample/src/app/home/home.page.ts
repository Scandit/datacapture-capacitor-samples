import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalPage } from '../modal/modal.page';

import { ScanditCaptureCorePlugin, DataCaptureVersion } from 'scandit-capacitor-datacapture-core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public version = DataCaptureVersion.pluginVersion;

  constructor(
    public modalController: ModalController,
  ) { }

  async ngAfterViewInit() {
      // Initialize the plugins.
      // @ts-ignore
      await ScanditCaptureCorePlugin.initializePlugins();
  }

  public async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
    });
    return modal.present();
  }
}
