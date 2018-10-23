import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Keyboard } from "@ionic-native/keyboard";

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  rootPage = "TabsPage";

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      if (this.platform.is("ios")) {
        let appEl = <HTMLElement>document.getElementsByTagName("ION-APP")[0],
          appElHeight = appEl.clientHeight;

        this.keyboard.disableScroll(true);

        window.addEventListener("native.keyboardshow", e => {
          appEl.style.height = appElHeight - (<any>e).keyboardHeight + "px";
        });

        window.addEventListener("native.keyboardhide", () => {
          appEl.style.height = "100%";
        });
      }

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
    });
  }
}
