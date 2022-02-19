package com.scandit.textcapturesample;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.scandit.capacitor.datacapture.core.ScanditCaptureCoreNative;
import com.scandit.capacitor.datacapture.parser.ScanditParserNative;
import com.scandit.capacitor.datacapture.text.ScanditTextNative;

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
            add(ScanditParserNative.class);
            add(ScanditTextNative.class);
        }});
    }
}
