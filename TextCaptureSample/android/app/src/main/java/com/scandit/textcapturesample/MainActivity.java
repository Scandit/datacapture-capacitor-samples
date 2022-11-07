package com.scandit.textcapturesample;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.scandit.capacitor.datacapture.core.ScanditCaptureCoreNative;
import com.scandit.capacitor.datacapture.parser.ScanditParserNative;
import com.scandit.capacitor.datacapture.text.ScanditTextNative;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        registerPlugin(ScanditCaptureCoreNative.class);
        registerPlugin(ScanditTextNative.class);
        registerPlugin(ScanditParserNative.class);
    }
}
