package com.scandit.barcodeselectionsimplesample;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.scandit.capacitor.datacapture.barcode.ScanditBarcodeNative;
import com.scandit.capacitor.datacapture.core.ScanditCaptureCoreNative;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(ScanditCaptureCoreNative.class);
      add(ScanditBarcodeNative.class);
    }});
  }
}
