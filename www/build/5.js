webpackJsonp([5],{

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(905);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = (function () {
    function TabsPageModule() {
    }
    return TabsPageModule;
}());
TabsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */])]
    })
], TabsPageModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(321);
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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = (function () {
    function TabsPage(nav, storage, events, popoverCtrl) {
        this.nav = nav;
        this.storage = storage;
        this.events = events;
        this.popoverCtrl = popoverCtrl;
        this.productionPage = "ProductionPage";
        this.rejectionPage = "RejectionPage";
        this.entriesPage = "ProductionEntriesPage";
        this.pageTitle = "Today's Production Entries";
    }
    TabsPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get("IsAuthenticated").then(function (value) {
            if (!value) {
                _this.nav.setRoot("LoginPage");
                return false;
            }
        });
    };
    TabsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.subscribe("selectedTab", function (name) {
            if (name === "production") {
                _this.entriesPage = "ProductionEntriesPage";
                _this.pageTitle = "Today's Production Entries";
            }
            else {
                _this.entriesPage = "RejectionEntriesPage";
                _this.pageTitle = "Today's Rejection Entries";
            }
        });
    };
    TabsPage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create("PopoverPage");
        popover.present({
            ev: myEvent
        });
    };
    // to go account page
    TabsPage.prototype.goToAccount = function () {
        this.nav.push(this.entriesPage);
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-tabs",template:/*ion-inline-start:"/Users/tmc/Documents/Ionic/TallyMarks-PBC/src/pages/tabs/tabs.html"*/'<!-- -->\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>\n        <strong>Punjab Beverages Production</strong> \n      </ion-title>\n      <ion-buttons end>\n        <button ion-button tappable (click)="presentNotifications($event)">\n          <ion-icon name="ios-arrow-down-outline"></ion-icon>\n        </button>\n        <button ion-button tappable (click)="goToAccount()">\n          {{pageTitle}}\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="animated fadeIn common-bg">\n    <ion-tabs >\n      <ion-tab tabTitle="Production" tabIcon="home" [root]="productionPage"></ion-tab>\n      <ion-tab tabTitle="Rejection" tabIcon="information-circle" [root]="rejectionPage"></ion-tab>\n    </ion-tabs>\n  </ion-content>\n  '/*ion-inline-end:"/Users/tmc/Documents/Ionic/TallyMarks-PBC/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* PopoverController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=5.js.map