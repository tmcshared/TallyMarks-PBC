import { Component } from "@angular/core";
import { IonicPage, Events } from "ionic-angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { NetworkManagerService } from "./../../services/network-manager.service";
import { UtilityService } from "../../services/utility.service";
import { RESPONSE_MESSAGE } from "./../../shared/constant/message";
import { URL } from "../../shared/constant/config";
import { OPERATION } from "../../shared/constant/request/xmlOperationRequest";
import * as moment from "moment";
import { ValidatorService } from "./../../services/validator.service";
import { IonicSelectableComponent } from "ionic-selectable";

@IonicPage()
@Component({
  selector: "page-production",
  templateUrl: "production.html"
})
export class ProductionPage {
  productionForm: FormGroup;
  lineNumberList = [];
  supervisorList = [];
  allBrandList = [];
  allShiftList = [];
  allPackagesList = [];
  lineSpeed = [];
  problemsList = [];
  problems = [];
  IsLoaded = false;

  constructor(
    private service: NetworkManagerService,
    private utility: UtilityService,
    public events: Events
  ) {}

  ionViewDidLoad() {
    this.InitializeForm();
    this.IsLoaded = true;
  }
  ionViewWillEnter() {
    this.events.publish("selectedTab", "production");
    this.getAllList();
    this.registerEvents();
  }
  InitializeForm() {
    this.productionForm = new FormGroup({
      fields: new FormGroup({
        lineId: new FormControl(null, [Validators.required]),
        supervisorId: new FormControl(null, [Validators.required]),
        brandId: new FormControl(null, [Validators.required]),
        shift: new FormControl(1, [Validators.required]),
        packageId: new FormControl(null, [Validators.required]),
        lineSpeed: new FormControl(null, [Validators.required]),
        planPrd: new FormControl(null, [
          Validators.required,
          ValidatorService.numbersOnly,
          Validators.maxLength(8)
        ]),
        timeSlot: new FormControl(null, [Validators.required]),
        hourlyPrd: new FormControl(null, [
          Validators.required,
          ValidatorService.numbersOnly,
          Validators.maxLength(8)
        ]),
        entryDate: new FormControl(null, [Validators.required])
      }),
      problems: new FormGroup({
        problem: new FormControl(null, [Validators.required]),
        stoppageTime: new FormControl(null, [
          Validators.required,
          ValidatorService.numbersOnly,
          Validators.maxLength(5)
        ]),
        downTime: new FormControl(null, [
          Validators.required,
          ValidatorService.numbersOnly,
          Validators.maxLength(5)
        ])
      })
    });
  }
  registerEvents() {
    this.productionForm.get("fields.lineId").valueChanges.subscribe(item => {
      if (!item) return;
      this.productionForm.get("fields.supervisorId").patchValue(null);
      this.productionForm.get("fields.supervisorId").markAsUntouched();
      this.getSupervisorByLine(parseInt(item.lineId));
      this.getProblemByLine(parseInt(item.lineId));
      const Package = this.productionForm.get("fields.packageId").value;
      if (!Package) return;
      this.getLineSpeed(parseInt(item.lineId), Package.packageID);
    });
    this.productionForm.get("fields.packageId").valueChanges.subscribe(item => {
      if (!item) return;

      const line = this.productionForm.get("fields.lineId").value;
      if (!line) return;
      this.getLineSpeed(parseInt(line.lineId), item.packageID);
    });
  }
  createProblem() {
    const model = this.productionForm.get("problems").value;
    model.problem = model.problem.problemID;
    this.problems.push(model);
    this.productionForm.get("problems").reset();
  }
  removeProblem(index) {
    this.problems.splice(index, 1);
  }
  resetForm() {
    this.productionForm.reset();
    this.productionForm.markAsUntouched();
    this.problems = [];
  }

  saveData() {
    const form = { ...this.productionForm.get("fields").value };
    form.brandId = form.brandId.brandID;
    form.lineId = form.lineId.lineId;
    form.lineSpeed = form.lineSpeed.id;
    form.packageId = form.packageId.packageID;
    form.shift = form.shift.shiftID;
    form.supervisorId = form.supervisorId.supervisorID;

    form.entryDate = moment(form.entryDate).format("DD/MM/YYYY");
    for (const p of this.problems) {
      form.problem = form.problem ? `${form.problem},${p.problem}` : p.problem;
      form.downTime = form.downTime
        ? `${form.downTime},${p.downTime}`
        : p.downTime;
      form.stopTime = form.stopTime
        ? `${form.stopTime},${p.stoppageTime}`
        : p.stoppageTime;
    }
    form.counter = this.problems.length;
    const spinner = this.utility.createLoader();
    console.log(form);
    spinner.present();
    this.service
      .insert(URL.PRODUCTION, OPERATION.ADD_PRODUCTION(form))
      .subscribe(
        response => {
          spinner.dismiss();
          const message =
            response.InsertRecordResponse[0].InsertRecordResult[0];
          this.utility.createToast(message, 5000).present();
          // this.productionForm.reset();
          // this.productionForm.markAsUntouched();
          // this.problems = [];
        },
        error => {
          spinner.dismiss();
          this.utility.createToast(RESPONSE_MESSAGE.ERROR, 3000).present();
        }
      );
  }
  getProblemName(problemId) {
    return this.problemsList.find(x => x.problemID === problemId)
      .problemDescription;
  }
  getAllList() {
    const request = [];
    request.push(
      {
        url: URL.PRODUCTION,
        body: OPERATION.LINENUMBER()
      },
      {
        url: URL.PRODUCTION,
        body: OPERATION.ALLBRAND()
      },
      {
        url: URL.PRODUCTION,
        body: OPERATION.ALLSHIFT()
      },
      {
        url: URL.PRODUCTION,
        body: OPERATION.ALLPACKAGES()
      }
    );
    const spinner = this.utility.createLoader();
    //  spinner.present();
    this.service.getForkJoin(request).subscribe(
      response => {
        spinner.dismiss();
        for (const key in response) {
          this.refactorList(response[key], parseInt(key));
        }
      },
      error => {
        spinner.dismiss();
        this.utility.createToast(RESPONSE_MESSAGE.ERROR, 3000).present();
      }
    );
  }
  refactorList(data, key) {
    switch (key) {
      case 0:
        this.lineNumberList = data.GetAllLinesResponse[0].GetAllLinesResult[0].GetLines.map(
          item => {
            return {
              lineId: item.lineID[0],
              lineName: item.lineName[0]
            };
          }
        );
        break;
      case 1:
        this.allBrandList = data.GetAllBrandsResponse[0].GetAllBrandsResult[0].GetBrands.map(
          item => {
            return {
              brandID: item.brandID[0],
              brandName: item.brandName[0]
            };
          }
        );
        break;
      case 2:
        this.allShiftList = data.GetAllShiftsResponse[0].GetAllShiftsResult[0].GetShifts.map(
          item => {
            return {
              shiftID: item.shiftID[0],
              shift: item.shift[0]
            };
          }
        );
        break;
      case 3:
        this.allPackagesList = data.GetAllPackagesResponse[0].GetAllPackagesResult[0].GetPackages.map(
          item => {
            return {
              packageID: item.packageID[0],
              packageName: item.packageName[0]
            };
          }
        );
        break;

      default:
        break;
    }
  }
  getLines() {
    const spinner = this.utility.createLoader();
    spinner.present();
    this.service.post(URL.PRODUCTION, OPERATION.LINENUMBER()).subscribe(
      response => {
        spinner.dismiss();
        this.lineNumberList = response.GetAllLinesResponse[0].GetAllLinesResult[0].GetLines.map(
          item => {
            return {
              lineId: item.lineID[0],
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
  getSupervisorByLine(lineId) {
    const spinner = this.utility.createLoader();
    spinner.present();
    this.service
      .post(URL.PRODUCTION, OPERATION.SUPERVISOR_BY_LINENUMBER(lineId))
      .subscribe(
        response => {
          spinner.dismiss();
          this.supervisorList = response.GetSupervisorsByLineResponse[0].GetSupervisorsByLineResult[0].GetSupervisors.map(
            item => {
              return {
                supervisorID: item.supervisorID[0],
                supervisorName: item.supervisorName[0]
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
  getProblemByLine(lineId) {
    const spinner = this.utility.createLoader();
    spinner.present();
    this.service
      .post(URL.PRODUCTION, OPERATION.PROBLEM_BY_LINE(lineId))
      .subscribe(
        response => {
          spinner.dismiss();
          this.problemsList = response.GetProblemsByLineResponse[0].GetProblemsByLineResult[0].GetProblems.map(
            item => {
              return {
                problemID: item.problemID[0],
                problemDescription: item.problemDescription[0]
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
  getLineSpeed(lineId, packageId) {
    const spinner = this.utility.createLoader();
    spinner.present();
    this.productionForm.get("fields.lineSpeed").patchValue(null);
    this.productionForm.get("fields.lineSpeed").markAsUntouched();
    this.service
      .post(
        URL.PRODUCTION,
        OPERATION.LINESPEED_BY_LINE_PACKAGE(lineId, packageId)
      )
      .subscribe(
        response => {
          spinner.dismiss();
          if (
            !response.GetPlanSpeedByLineAndPackageResponse[0]
              .GetPlanSpeedByLineAndPackageResult
          ) {
            this.lineSpeed = [];
            return;
          } else {
            this.lineSpeed = response.GetPlanSpeedByLineAndPackageResponse[0].GetPlanSpeedByLineAndPackageResult[0].GetPlanSpeed.map(
              item => {
                return {
                  id: item.planSpeed[0]
                };
              }
            );
          }
        },
        error => {
          spinner.dismiss();
          this.utility.createToast(RESPONSE_MESSAGE.ERROR, 3000).present();
        }
      );
  }
}
