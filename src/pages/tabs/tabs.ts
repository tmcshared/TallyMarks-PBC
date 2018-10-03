import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  PopoverController,
  Events
} from "ionic-angular";
import { SettingsPage } from "../settings/settings";
import { Storage } from "@ionic/storage";
import { ProductionEntriesPage } from "./../production-entries/production-entries";
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  productionPage = "ProductionPage";
  rejectionPage = "RejectionPage";
  entriesPage: any = "ProductionEntriesPage";
  pageTitle: any = `Today's Production Entries`;
  constructor(
    public nav: NavController,
    private storage: Storage,
    public events: Events,
    public popoverCtrl: PopoverController
  ) {}
  ionViewCanEnter() {
    this.storage.get("IsAuthenticated").then(value => {
      if (!value) {
        this.nav.setRoot("LoginPage");
        return false;
      }
    });
  }
  ionViewWillEnter() {
    this.events.subscribe("selectedTab", name => {
      if (name === "production") {
        this.entriesPage = "ProductionEntriesPage";
        this.pageTitle = `Today's Production Entries`;
      } else {
        this.entriesPage = "RejectionEntriesPage";
        this.pageTitle = `Today's Rejection Entries`;
      }
    });
  }
  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create("PopoverPage");
    popover.present({
      ev: myEvent
    });
  }
  // to go account page
  goToAccount() {
    this.nav.push(this.entriesPage);
  }
}
