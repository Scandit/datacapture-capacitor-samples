package com.scandit.usdlverificationsample;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.scandit.capacitor.datacapture.id.ScanditIdNative;
import com.scandit.capacitor.datacapture.core.ScanditCaptureCoreNative;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(ScanditCaptureCoreNative.class);
    registerPlugin(ScanditIdNative.class);
  }
}
