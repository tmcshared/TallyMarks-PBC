import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NetworkManagerService } from "../../services/network-manager.service";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { UtilityService } from "../../services/utility.service";
import { REJECTION } from "../../shared/constant/request/xmlRejectionRequest";
import { URL } from "../../shared/constant/config";
import { RESPONSE_MESSAGE } from "../../shared/constant/message";
import * as moment from "moment";
import { Events } from "ionic-angular";
import { ValidatorService } from "../../services/validator.service";
@IonicPage()
@Component({
  selector: "page-rejection",
  templateUrl: "rejection.html"
})
export class RejectionPage {
  rejectionForm: FormGroup;
  linesList = [];
  shiftList = [];
  areasList = [];
  positionList = [];
  supervisorList = [];
  rejectionList = [];
  IsLoaded = false;
  constructor(
    private service: NetworkManagerService,
    private utility: UtilityService,
    public events: Events
  ) {}

  ionViewWillEnter() {
    this.shiftList = [];
    this.events.publish("selectedTab", "rejection");
    this.getLines();
    this.registerEvents();
    this.shiftList.push({ Id: "shiftA", text: "Shift A" });
    this.shiftList.push({ Id: "shiftB", text: "Shift B" });
  }
  ionViewDidLoad() {
    this.InitializeForm();
    this.IsLoaded = true;
  }
  InitializeForm() {
    this.rejectionForm = new FormGroup({
      lineId: new FormControl(null, [Validators.required]),
      supervisorA: new FormControl(null, [Validators.required]),
      supervisorB: new FormControl(null, [Validators.required]),
      supervisorC: new FormControl(null),
      noOfshift: new FormControl("2", [Validators.required]),
      shift: new FormControl(null, [Validators.required]),
      timeSlot: new FormControl(null, [Validators.required]),
      entryDate: new FormControl(null, [Validators.required]),

      areaId: new FormControl(null, [Validators.required]),
      positionId: new FormControl(null, [Validators.required]),

      rejections: new FormArray([])
    });
    this.rejectionForm.get("supervisorC").disable();
  }
  saveData() {
    const form = this.rejectionForm.value;
    form.areaId = form.areaId.areaId;
    form.lineId = form.lineId.lineId;
    form.positionId = form.positionId.positionId;
    form.supervisorA = form.supervisorA.supervisorId;
    form.supervisorB = form.supervisorB.supervisorId;
    form.supervisorC = form.supervisorC ? form.supervisorC.supervisorId : 0;

    form.entryDate = moment(form.entryDate).format("DD/MM/YYYY");
    for (const k in form.rejections) {
      form.rejectionIds = form.rejectionIds
        ? `${form.rejectionIds},${this.rejectionList[k].rejectionId}`
        : this.rejectionList[k].rejectionId;
      form.rejectionValue = form.rejectionValue
        ? `${form.rejectionValue},${form.rejections[k].name}`
        : form.rejections[k].name;
    }
    const spinner = this.utility.createLoader();
    console.log(form);
    spinner.present();
    this.service.insert(URL.REJECTION, REJECTION.ADD_REJECTION(form)).subscribe(
      response => {
        spinner.dismiss();
        let message =
          response.InsertRejectionDataResponse[0].InsertRejectionDataResult[0];
        if (!message) {
          message = "Rejection added successfully.";
        }
        this.utility.createToast(message, 5000).present();
        (<FormArray>this.rejectionForm.get("rejections")).controls.length = 0;
        this.rejectionForm.reset();
        this.rejectionForm.markAsUntouched();
        this.rejectionList = [];
      },
      error => {
        spinner.dismiss();
        this.utility.createToast(RESPONSE_MESSAGE.ERROR, 3000).present();
      }
    );
  }
  registerEvents() {
    this.rejectionForm.get("lineId").valueChanges.subscribe(item => {
      if (!item) return;
      this.getAreaByLine(parseInt(item.lineId));
      this.getSupervisor(parseInt(item.lineId));
      const position = this.rejectionForm.get("positionId").value;
      if (position) {
        this.getRejections(
          parseInt(item.lineId),
          parseInt(position.positionId)
        );
      }
    });
    this.rejectionForm.get("areaId").valueChanges.subscribe(item => {
      if (!item) return;
      this.getPositionByareaId(parseInt(item.areaId));
    });
    this.rejectionForm.get("noOfshift").valueChanges.subscribe(item => {
      if (parseInt(item) === 3) {
        if (this.shiftList.length === 2) {
          this.shiftList.push({ Id: "shiftC", text: "Shift C" });
        }
        this.rejectionForm.get("supervisorC").enable();
      } else {
        this.shiftList.splice(2, 1);
        this.rejectionForm.get("supervisorC").disable();
        this.rejectionForm.get("supervisorC").patchValue(null);
      }
    });
    this.rejectionForm.get("positionId").valueChanges.subscribe(item => {
      if (!item) return;
      const line = this.rejectionForm.get("lineId").value;
      if (line) {
        this.getRejections(parseInt(line.lineId), parseInt(item.positionId));
      }
    });
  }
  resetForm() {
    this.rejectionForm.reset();
    this.rejectionForm.markAsUntouched();
    (<FormArray>this.rejectionForm.get("rejections")).controls.length = 0;
  }
  getAreaByLine(lineId) {
    const spinner = this.utility.createLoader();
    spinner.present();
    this.service
      .post(URL.REJECTION, REJECTION.GETAREAS_BY_LINEID(lineId))
      .subscribe(
        response => {
          spinner.dismiss();
          this.areasList = response.GetAreasResponse[0].GetAreasResult[0].RejectionArea.map(
            item => {
              return {
                areaId: item.areaId[0],
                areaName: item.areaName[0]
              };
            }
          );
        },
        error => {
          spinner.dismiss();
          this.utility.createToast(RESPONSE_MESSAGE.ERROR, 3000).present();
        }
      );
  }
  getPositionByareaId(areaId) {
    const spinner = this.utility.createLoader();
    spinner.present();
    this.service.post(URL.REJECTION, REJECTION.GET_POSITIONS(areaId)).subscribe(
      response => {
        spinner.dismiss();
        (<FormArray>this.rejectionForm.get("rejections")).controls.length = 0;
        this.positionList = response.GetPositionsResponse[0].GetPositionsResult[0].RejectionPositions.map(
          item => {
            return {
              positionId: item.positionId[0],
              positionName: item.positionName[0]
            };
          }
        );
      },
      error => {
        spinner.dismiss();
        this.utility.createToast(RESPONSE_MESSAGE.ERROR, 3000).present();
      }
    );
  }
  getRejections(lineId, positionId) {
    const spinner = this.utility.createLoader();
    spinner.present();
    this.service
      .post(URL.REJECTION, REJECTION.GET_REJECTIONS(lineId, positionId))
      .subscribe(
        response => {
          spinner.dismiss();
          this.rejectionList = response.GetRejectionsResponse[0].GetRejectionsResult[0].RejectionsByPositions_Line.map(
            item => {
              return {
                rejectionId: item.Rejection_Id[0],
                rejectionName: item.Rejection_Name[0]
              };
            }
          );
          (<FormArray>this.rejectionForm.get("rejections")).controls.length = 0;
          for (const arr of this.rejectionList) {
            this.addControl();
          }
        },
        error => {
          spinner.dismiss();
          this.utility.createToast(RESPONSE_MESSAGE.ERROR, 3000).present();
        }
      );
  }
  createFormGroup() {
    return new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        ValidatorService.numbersOnly
      ])
    });
  }
  addControl() {
    const control = this.createFormGroup();
    const formArray = <FormArray>this.rejectionForm.get("rejections");
    formArray.push(control);
  }
  getSupervisor(lineId) {
    const spinner = this.utility.createLoader();
    spinner.present();
    this.service
      .post(URL.REJECTION, REJECTION.GET_SUPERVISORS(lineId))
      .subscribe(
        response => {
          spinner.dismiss();
          this.supervisorList = response.GetSupervisorsResponse[0].GetSupervisorsResult[0].RejectionSupervisors.map(
            item => {
              return {
                supervisorId: item.supervisor_Id[0],
                supervisorName: item.supervisor_Name[0]
              };
            }
          );
        },
        error => {
          spinner.dismiss();
          this.utility.createToast(RESPONSE_MESSAGE.ERROR, 3000).present();
        }
      );
  }
  getLines() {
    const spinner = this.utility.createLoader();
    //spinner.present();
    this.service.post(URL.REJECTION, REJECTION.GETLINES()).subscribe(
      response => {
        spinner.dismiss();
        this.linesList = response.GetLinesResponse[0].GetLinesResult[0].RejectionLines.map(
          item => {
            return {
              lineId: item.lineId[0],
              lineName: item.lineName[0]
            };
          }
        );
      },
      error => {
        spinner.dismiss();
        this.utility.createToast(RESPONSE_MESSAGE.ERROR, 3000).present();
      }
    );
  }
}
