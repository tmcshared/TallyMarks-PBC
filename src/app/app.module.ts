import { NgModule } from "@angular/core";
import { IonicApp, IonicModule } from "ionic-angular";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Keyboard } from "@ionic-native/keyboard";
import { NetworkManagerService } from "./../services/network-manager.service";
import { MyApp } from "./app.component";
import { SettingsPage } from "../pages/settings/settings";
import { UtilityService } from "../services/utility.service";
import { ValidatorService } from "./../services/validator.service";
import { IonicSelectableModule } from "ionic-selectable";
@NgModule({
  declarations: [MyApp, SettingsPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: false,
      autoFocusAssist: true
    }),
    IonicStorageModule.forRoot({
      name: "pbc",
      driverOrder: ["indexeddb", "sqlite", "websql"]
    }),
    IonicSelectableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, SettingsPage],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    NetworkManagerService,
    UtilityService,
    ValidatorService
  ]
})
export class AppModule {}
