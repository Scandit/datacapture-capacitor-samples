package com.scandit.barcodeselectionsimplesample;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.scandit.capacitor.datacapture.barcode.ScanditBarcodeNative;
import com.scandit.capacitor.datacapture.core.ScanditCaptureCoreNative;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(ScanditCaptureCoreNative.class);
    registerPlugin(ScanditBarcodeNative.class);
  }
}
