import UIKit
import Capacitor

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

  var window: UIWindow?

  func application(_ application: UIApplication,
                   didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // Override point for customization after application launch.
    return true
  }

  func application(_ app: UIApplication,
                   open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
    // Called when the app was launched with a url. Feel free to add additional processing here,
    // but if you want the App API to support tracking app url opens, make sure to keep this call
      return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
  }

  func application(_ application: UIApplication,
                   continue userActivity: NSUserActivity,
                   restorationHandler: @escaping ([UIUserActivityRestoring]?) -> Void) -> Bool {
    // Called when the app was launched with an activity, including Universal Links.
    // Feel free to add additional processing here, but if you want the App API to support
    // tracking app url opens, make sure to keep this call
      return ApplicationDelegateProxy.shared.application(application, continue: userActivity, restorationHandler: restorationHandler)
  }

  override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
    super.touchesBegan(touches, with: event)

    if let touchPoint = event?.allTouches?.first?.location(in: self.window),
       let statusBarFrame = self.window?.windowScene?.statusBarManager?.statusBarFrame {
        if statusBarFrame.contains(touchPoint) {
            NotificationCenter.default.post(name: .capacitorStatusBarTapped, object: nil)
        }
    }
  }

  #if USE_PUSH

  func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    NotificationCenter.default.post(
        name: Notification.Name.capacitorDidRegisterForRemoteNotifications,
        object: deviceToken)
  }

  func application(_ application: UIApplication, didFailToRegisterForRemoteNotificationsWithError error: Error) {
    NotificationCenter.default.post(
        name: Notification.Name.capacitorDidFailToRegisterForRemoteNotifications,
        object: error)
  }
#endif
}
