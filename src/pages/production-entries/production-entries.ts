import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NetworkManagerService } from "../../services/network-manager.service";
import { UtilityService } from "../../services/utility.service";
import { OPERATION } from "../../shared/constant/request/xmlOperationRequest";
import { RESPONSE_MESSAGE } from "../../shared/constant/message";
import { URL } from "../../shared/constant/config";

@IonicPage()
@Component({
  selector: "page-production-entries",
  templateUrl: "production-entries.html"
})
export class ProductionEntriesPage {
  entriesList = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private service: NetworkManagerService,
    private utility: UtilityService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductionEntriesPage");
  }
  ionViewWillEnter() {
    this.getEntries();
  }
  getEntries() {
    const spinner = this.utility.createLoader();
    spinner.present();
    this.service.post(URL.PRODUCTION, OPERATION.TODAY_ENTRIES()).subscribe(
      response => {
        spinner.dismiss();
        this.entriesList = response.GetTodaysEntriesResponse[0].GetTodaysEntriesResult[0].ViewEntries.map(
          item => {
            return {
              entryDate: item.entryDate[0],
              lineName: item.lineName[0],
              problemName: item.problemName[0],
              shift: item.shift[0],
              timeSlot: item.timeSlot[0]
            };
          }
        );
        this.entriesList.push(this.entriesList[0])

      },
      error => {
        spinner.dismiss();
        this.utility.createToast(RESPONSE_MESSAGE.ERROR, 3000).present();
      }
    );
  }
}
