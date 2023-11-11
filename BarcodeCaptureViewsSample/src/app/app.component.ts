import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

import 'scandit-capacitor-datacapture-core';
import 'scandit-capacitor-datacapture-barcode';

// eslint-disable-next-line @typescript-eslint/naming-convention
import { ScanditCaptureCorePlugin } from 'scandit-capacitor-datacapture-core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      // Initialize the plugins.
      // @ts-ignore
      window.Scandit = await ScanditCaptureCorePlugin.initializePlugins();

      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }
}
