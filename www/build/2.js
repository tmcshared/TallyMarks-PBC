webpackJsonp([2],{

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectionEntriesPageModule", function() { return RejectionEntriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rejection_entries__ = __webpack_require__(904);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RejectionEntriesPageModule = (function () {
    function RejectionEntriesPageModule() {
    }
    return RejectionEntriesPageModule;
}());
RejectionEntriesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__rejection_entries__["a" /* RejectionEntriesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rejection_entries__["a" /* RejectionEntriesPage */]),
        ],
    })
], RejectionEntriesPageModule);

//# sourceMappingURL=rejection-entries.module.js.map

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

/***/ 898:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REJECTION; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xmlRequest__ = __webpack_require__(769);

var REJECTION = {
    GETLINES: function () {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("<GetLines xmlns=\"http://tempuri.org/\"/>");
    },
    GETAREAS_BY_LINEID: function (lineId) {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("<GetAreas xmlns=\"http://tempuri.org/\">\n                                        <Line_Id>" + lineId + "</Line_Id>\n                                    </GetAreas>");
    },
    GET_SUPERVISORS: function (lineId) {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("    <GetSupervisors xmlns=\"http://tempuri.org/\">\n                                        <Line_Id>" + lineId + "</Line_Id>\n                                    </GetSupervisors>");
    },
    GET_POSITIONS: function (areaId) {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("<GetPositions xmlns=\"http://tempuri.org/\">\n                                    <Area_Id>" + areaId + "</Area_Id>\n                                </GetPositions>");
    },
    GET_SHIFTS: function () {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER(" <GetShifts xmlns=\"http://tempuri.org/\"/>");
    },
    GET_REJECTIONS: function (lineId, positionId) {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER(" <GetRejections xmlns=\"http://tempuri.org/\">\n                                    <Line_Id>" + lineId + "</Line_Id>\n                                    <Position_Id>" + positionId + "</Position_Id>\n                                </GetRejections>");
    },
    ADD_REJECTION: function (model) {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("<InsertRejectionData xmlns=\"http://tempuri.org/\">\n    <line_Id>" + model.lineId + "</line_Id>\n    <supervisor_A>" + model.supervisorA + "</supervisor_A>\n    <supervisor_B>" + model.supervisorB + "</supervisor_B>\n    <supervisor_C>" + (model.supervisorC ? model.supervisorC : 0) + "</supervisor_C>\n    <Shift>" + model.shift + "</Shift>\n    <time_Slot>" + model.timeSlot + "</time_Slot>\n    <timingsOrder>" + model.timingsOrder + "</timingsOrder>\n    <Entry_Date>" + model.entryDate + "</Entry_Date>\n    <area_Id>" + model.areaId + "</area_Id>\n    <position_Id>" + model.positionId + "</position_Id>\n    <rejection_Ids>" + model.rejectionIds + "</rejection_Ids>\n    <number_ofRejections>" + model.rejectionValue + "</number_ofRejections>\n</InsertRejectionData>");
    },
    TODAY_ENTRIES: function () {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER(" <GetTodayRejections xmlns=\"http://tempuri.org/\"/>");
    }
};
//# sourceMappingURL=xmlRejectionRequest.js.map

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectionEntriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_network_manager_service__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utility_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_constant_message__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_constant_request_xmlRejectionRequest__ = __webpack_require__(898);
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







/**
 * Generated class for the RejectionEntriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RejectionEntriesPage = (function () {
    function RejectionEntriesPage(navCtrl, navParams, service, utility) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.utility = utility;
        this.entriesList = [];
    }
    RejectionEntriesPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProductionEntriesPage");
    };
    RejectionEntriesPage.prototype.ionViewWillEnter = function () {
        this.getEntries();
    };
    RejectionEntriesPage.prototype.getEntries = function () {
        var _this = this;
        var spinner = this.utility.createLoader();
        spinner.present();
        this.service.post(__WEBPACK_IMPORTED_MODULE_6__shared_constant_config__["a" /* URL */].REJECTION, __WEBPACK_IMPORTED_MODULE_5__shared_constant_request_xmlRejectionRequest__["a" /* REJECTION */].TODAY_ENTRIES()).subscribe(function (response) {
            spinner.dismiss();
            if (!response.GetTodayRejectionsResponse[0])
                return;
            _this.entriesList = response.GetTodayRejectionsResponse[0].GetTodayRejectionsResult[0].PreviuosRejections.map(function (item) {
                return {
                    areaName: item.AreaName[0],
                    entryDate: item.EntryDate[0],
                    lineName: item.LineName[0],
                    noOfRejections: item.No_ofRejections[0],
                    positionName: item.PositionName[0],
                    rejectionName: item.RejectionName[0],
                    shift: item.Shift[0],
                    supervisorName: item.SupervisorName[0],
                    timeSlot: item.TimeSlot[0]
                };
            });
            _this.entriesList.push(_this.entriesList[0]);
        }, function (error) {
            spinner.dismiss();
            _this.utility.createToast(__WEBPACK_IMPORTED_MODULE_4__shared_constant_message__["a" /* RESPONSE_MESSAGE */].ERROR, 3000).present();
        });
    };
    return RejectionEntriesPage;
}());
RejectionEntriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-rejection-entries",template:/*ion-inline-start:"/Users/tmc/Documents/Ionic/TallyMarks-PBC/src/pages/rejection-entries/rejection-entries.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Today\'s Rejection Entries</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card style="border-radius: 0;">\n    <ion-card-content>\n      <ion-grid>\n\n\n        <ion-item-divider color="light">\n          <ion-row>\n\n            <ion-col>\n              Line Name\n            </ion-col>\n            <ion-col>\n              Entry Date\n            </ion-col>\n            <ion-col>\n              Area Name\n            </ion-col>\n            <ion-col>\n              Shift\n            </ion-col>\n\n            <ion-col>\n              Position Name\n            </ion-col>\n            <ion-col>\n              Supervisor Name\n            </ion-col>\n          \n          </ion-row>\n\n        </ion-item-divider>\n        <ion-item-divider style="border-bottom:0;">\n          <ion-row *ngFor="let item of entriesList">\n            <ion-col>\n              <ion-item-divider>\n                {{item.lineName}}\n              </ion-item-divider>\n\n            </ion-col>\n            <ion-col>\n              <ion-item-divider>\n                {{item.entryDate}}\n              </ion-item-divider>\n            </ion-col>\n            <ion-col>\n              <ion-item-divider>\n                {{item.areaName}}\n\n              </ion-item-divider>\n            </ion-col>\n            <ion-col>\n              <ion-item-divider>\n                {{item.shift}}\n\n              </ion-item-divider>\n            </ion-col>\n            <ion-col>\n              <ion-item-divider>\n                {{item.positionName}}\n\n              </ion-item-divider>\n            </ion-col>\n            <ion-col>\n              <ion-item-divider>\n                {{item.supervisorName}}\n\n              </ion-item-divider>\n            </ion-col>\n          </ion-row>\n        </ion-item-divider>\n\n      </ion-grid>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/tmc/Documents/Ionic/TallyMarks-PBC/src/pages/rejection-entries/rejection-entries.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_network_manager_service__["a" /* NetworkManagerService */],
        __WEBPACK_IMPORTED_MODULE_3__services_utility_service__["a" /* UtilityService */]])
], RejectionEntriesPage);

//# sourceMappingURL=rejection-entries.js.map

/***/ })

});
//# sourceMappingURL=2.js.map