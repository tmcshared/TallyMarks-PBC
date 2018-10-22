webpackJsonp([3],{

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionEntriesPageModule", function() { return ProductionEntriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__production_entries__ = __webpack_require__(902);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductionEntriesPageModule = (function () {
    function ProductionEntriesPageModule() {
    }
    return ProductionEntriesPageModule;
}());
ProductionEntriesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__production_entries__["a" /* ProductionEntriesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__production_entries__["a" /* ProductionEntriesPage */]),
        ],
    })
], ProductionEntriesPageModule);

//# sourceMappingURL=production-entries.module.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESPONSE_MESSAGE; });
var RESPONSE_MESSAGE = {
    ERROR: "Something went wrong",
    INVALID_CREDENTIAL: "Username or password is incorrect",
    LOADING: "Processing...",
};
//# sourceMappingURL=message.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XML_REQUEST; });
var XML_REQUEST = {
    WRAPPER: function (body) {
        return "<Envelope xmlns=\"http://schemas.xmlsoap.org/soap/envelope/\">\n                <Body>\n                    " + body + "\n                 </Body>\n            </Envelope>";
    }
};
//# sourceMappingURL=xmlRequest.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL; });
var API = "http://155.135.3.71/Services";
var URL = {
    LOGIN: API + "/UserAuthentication.asmx?wsdl",
    PRODUCTION: API + "/GetOperations.asmx?wsdl",
    REJECTION: API + "/RejectionsOperations.asmx?wsdl",
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OPERATION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xmlRequest__ = __webpack_require__(769);

var OPERATION = {
    LINENUMBER: function () {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("<GetAllLines xmlns=\"http://tempuri.org/\"/>");
    },
    SUPERVISOR_BY_LINENUMBER: function (lineId) {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER(" <GetSupervisorsByLine xmlns=\"http://tempuri.org/\">\n                                    <lineID>" + lineId + "</lineID>\n                                  </GetSupervisorsByLine>");
    },
    ALLBRAND: function () {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("<GetAllBrands xmlns=\"http://tempuri.org/\"/>");
    },
    ALLSHIFT: function () {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER(" <GetAllShifts xmlns=\"http://tempuri.org/\"/>");
    },
    ALLPACKAGES: function () {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("  <GetAllPackages xmlns=\"http://tempuri.org/\"/>");
    },
    LINESPEED_BY_LINE_PACKAGE: function (lineId, packageId) {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("<GetPlanSpeedByLineAndPackage xmlns=\"http://tempuri.org/\">\n                                    <lineID>" + lineId + "</lineID>\n                                    <packageID>" + packageId + "</packageID>\n                                </GetPlanSpeedByLineAndPackage>");
    },
    PROBLEM_BY_LINE: function (lineId) {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("  <GetProblemsByLine xmlns=\"http://tempuri.org/\">\n                                      <lineID>" + lineId + "</lineID>\n                                  </GetProblemsByLine>");
    },
    ADD_PRODUCTION: function (model) {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("<InsertRecord xmlns=\"http://tempuri.org/\">\n    <lineID>" + model.lineId + "</lineID>\n    <supervisorID>" + model.supervisorId + "</supervisorID>\n    <shift>" + model.shift + "</shift>\n    <timeSlot>" + model.timeSlot + "</timeSlot>\n    <timingsOrder>" + model.lineId + "</timingsOrder>\n    <brandID>" + model.brandId + "</brandID>\n    <packageID>" + model.packageId + "</packageID>\n    <hourlyProduction>" + model.hourlyPrd + "</hourlyProduction>\n    <entryDate>" + model.entryDate + "</entryDate>\n    <lineSpeed>" + model.lineSpeed + "</lineSpeed>\n    <planProduction>" + model.planPrd + "</planProduction>\n    <problemString>" + (model.problem ? model.problem : 0) + "</problemString>\n    <stoppageString>" + (model.stopTime ? model.stopTime : 0) + "</stoppageString>\n    <downTimeString>" + (model.downTime ? model.downTime : 0) + "</downTimeString>\n    <counter>" + model.counter + "</counter>\n</InsertRecord>");
    },
    TODAY_ENTRIES: function () {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("<GetTodaysEntries xmlns=\"http://tempuri.org/\"/>");
    },
};
//# sourceMappingURL=xmlOperationRequest.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductionEntriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_network_manager_service__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_constant_request_xmlOperationRequest__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_constant_message__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_constant_config__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductionEntriesPage = (function () {
    function ProductionEntriesPage(navCtrl, navParams, service, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.utility = utility;
        this.entriesList = [];
    }
    ProductionEntriesPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProductionEntriesPage");
    };
    ProductionEntriesPage.prototype.ionViewWillEnter = function () {
        this.getEntries();
    };
    ProductionEntriesPage.prototype.getEntries = function () {
        var _this = this;
        var spinner = this.utility.createLoader();
        spinner.present();
        this.service.post(__WEBPACK_IMPORTED_MODULE_6__shared_constant_config__["a" /* URL */].PRODUCTION, __WEBPACK_IMPORTED_MODULE_4__shared_constant_request_xmlOperationRequest__["a" /* OPERATION */].TODAY_ENTRIES()).subscribe(function (response) {
            spinner.dismiss();
            _this.entriesList = response.GetTodaysEntriesResponse[0].GetTodaysEntriesResult[0].ViewEntries.map(function (item) {
                return {
                    entryDate: item.entryDate[0],
                    lineName: item.lineName[0],
                    problemName: item.problemName[0],
                    shift: item.shift[0],
                    timeSlot: item.timeSlot[0]
                };
            });
            _this.entriesList.push(_this.entriesList[0]);
        }, function (error) {
            spinner.dismiss();
            _this.utility.createToast(__WEBPACK_IMPORTED_MODULE_5__shared_constant_message__["a" /* RESPONSE_MESSAGE */].ERROR, 3000).present();
        });
    };
    return ProductionEntriesPage;
}());
ProductionEntriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-production-entries",template:/*ion-inline-start:"/Users/tmc/Documents/Ionic/TallyMarks-PBC/src/pages/production-entries/production-entries.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Today\'s Production Entries</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card style="border-radius: 0;">\n    <ion-card-content>\n      <ion-grid>\n\n\n        <ion-item-divider color="light">\n          <ion-row>\n\n            <ion-col col-2>\n              Line Name\n            </ion-col>\n            <ion-col col-2>\n              Entry Date\n            </ion-col>\n            <ion-col col-4>\n              Problem Name\n            </ion-col>\n            <ion-col col-2>\n              Shift\n            </ion-col>\n            <ion-col col-2>\n              Time Slot\n            </ion-col>\n          </ion-row>\n\n        </ion-item-divider>\n        <ion-item-divider  style="border-bottom:0;">\n            <ion-row *ngFor="let item of entriesList">\n                <ion-col col-2>\n                  <ion-item-divider class="cut-text">\n                      {{item.lineName}}\n                  </ion-item-divider>\n                 \n                </ion-col>\n                <ion-col col-2>\n                  <ion-item-divider class="cut-text">\n                      {{item.entryDate}}\n                  </ion-item-divider>\n                </ion-col>\n                <ion-col col-4>\n                  <ion-item-divider class="cut-text" style="width:250px">\n                      {{item.problemName}}\n\n                  </ion-item-divider>\n                </ion-col>\n                <ion-col col-2>\n                  <ion-item-divider class="cut-text">\n                      {{item.shift}}\n\n                  </ion-item-divider>\n                </ion-col>\n                <ion-col col-2>\n                  <ion-item-divider class="cut-text">\n                      {{item.timeSlot}}\n\n                  </ion-item-divider>\n                </ion-col>\n              </ion-row>\n          </ion-item-divider>\n       \n      </ion-grid>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/tmc/Documents/Ionic/TallyMarks-PBC/src/pages/production-entries/production-entries.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_network_manager_service__["a" /* NetworkManagerService */],
        __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */]])
], ProductionEntriesPage);

//# sourceMappingURL=production-entries.js.map

/***/ })

});
//# sourceMappingURL=3.js.map