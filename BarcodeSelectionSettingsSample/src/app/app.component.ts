import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

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
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      // Initialize the plugins.
      // @ts-ignore
      window.Scandit = await ScanditCaptureCorePlugin.initializePlugins();

      StatusBar.setStyle({ style: Style.Light });
      SplashScreen.hide();
    });
  }
}
