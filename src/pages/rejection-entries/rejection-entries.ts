import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NetworkManagerService } from '../../services/network-manager.service';
import { UtilityService } from '../../services/utility.service';
import { RESPONSE_MESSAGE } from '../../shared/constant/message';
import { REJECTION } from './../../shared/constant/request/xmlRejectionRequest';
import { URL } from "../../shared/constant/config";
/**
 * Generated class for the RejectionEntriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rejection-entries',
  templateUrl: 'rejection-entries.html',
})
export class RejectionEntriesPage {
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
    this.service.post(URL.REJECTION, REJECTION.TODAY_ENTRIES()).subscribe(
      response => {
        spinner.dismiss();
        this.entriesList = response.GetTodayRejectionsResponse[0].GetTodayRejectionsResult[0].PreviuosRejections.map(
          item => {
            debugger
            return {
              areaName: item.AreaName[0],
              entryDate: item.EntryDate[0],
              lineName: item.LineName[0],
              noOfRejections: item.No_ofRejections[0],
              positionName: item.PositionName[0],
              rejectionName: item.RejectionName[0],
              shift: item.Shift[0],
              supervisorName: item.SupervisorName[0],
              timeSlot: item.TimeSlot[0],
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
