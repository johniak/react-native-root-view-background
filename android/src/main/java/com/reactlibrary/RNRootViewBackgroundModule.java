
package com.reactlibrary;

import android.app.Activity;
import android.view.View;
import android.graphics.Color;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNRootViewBackgroundModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNRootViewBackgroundModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNRootViewBackground";
  }

  @ReactMethod
  public void setBackground(final String color) {
    final Activity activity = getCurrentActivity();

    if (activity == null) {
      return;
    }

    activity.runOnUiThread(new Runnable() {
      @Override
      public void run() {
        View rootView = activity.getWindow().getDecorView();
        int parsedColor = Color.parseColor(color);
        rootView.getRootView().setBackgroundColor(parsedColor);
      }
    });
  }
}