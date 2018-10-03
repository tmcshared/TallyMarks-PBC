import { Component } from "@angular/core";
import { IonicPage, ViewController, NavController } from "ionic-angular";
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: "page-popover",
  templateUrl: "popover.html"
})
export class PopoverPage {
  constructor(
    public viewCtrl: ViewController,
    private storage: Storage,
    private nav: NavController
  ) {}

  close() {
    this.viewCtrl.dismiss();
    this.storage.remove("IsAuthenticated").then(value => {
      this.nav.setRoot("LoginPage");
    });
  }
}
