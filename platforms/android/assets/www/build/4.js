webpackJsonp([4],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(899);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */])]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

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

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_network_manager_service__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_utility_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_constant_message__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_constant_request_xmlAccountRequest__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_constant_config__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = (function () {
    function LoginPage(storage, nav, service, menu, utility) {
        this.storage = storage;
        this.nav = nav;
        this.service = service;
        this.menu = menu;
        this.utility = utility;
        this.menu.swipeEnable(false);
    }
    LoginPage.prototype.ngOnInit = function () {
        this.InitializeForm();
    };
    LoginPage.prototype.InitializeForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            userName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            userPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])
        });
    };
    LoginPage.prototype.authenticateUser = function () {
        var _this = this;
        var data = this.loginForm.value;
        var spinner = this.utility.createLoader(__WEBPACK_IMPORTED_MODULE_5__shared_constant_message__["a" /* RESPONSE_MESSAGE */].LOADING);
        spinner.present();
        this.service.post(__WEBPACK_IMPORTED_MODULE_8__shared_constant_config__["a" /* URL */].LOGIN, __WEBPACK_IMPORTED_MODULE_7__shared_constant_request_xmlAccountRequest__["a" /* ACCOUNT_REQUEST */].LOGIN(data)).subscribe(function (response) {
            spinner.dismiss();
            response = JSON.parse(response.UserLoginResponse[0].UserLoginResult[0]);
            if (response) {
                _this.storage.set("IsAuthenticated", "true");
                _this.nav.setRoot("TabsPage");
            }
            else {
                _this.utility
                    .createToast(__WEBPACK_IMPORTED_MODULE_5__shared_constant_message__["a" /* RESPONSE_MESSAGE */].INVALID_CREDENTIAL, 3000)
                    .present();
            }
        }, function (error) {
            spinner.dismiss();
            _this.utility.createToast(__WEBPACK_IMPORTED_MODULE_5__shared_constant_message__["a" /* RESPONSE_MESSAGE */].ERROR, 3000).present();
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-login",template:/*ion-inline-start:"/Users/tmc/Documents/Ionic/TallyMarks-PBC/src/pages/login/login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n    <form class="list-form" [formGroup]="loginForm" (ngSubmit)="authenticateUser()">\n\n      <!-- Logo -->\n      <div padding-horizontal text-center class="animated fadeInDown">\n        <div class="logo"></div>\n      </div>\n\n      <!-- Login form -->\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="md-person" item-start class="text-primary"></ion-icon>\n          User Name\n        </ion-label>\n        <ion-input type="text" formControlName="userName"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input type="password" formControlName="userPassword"></ion-input>\n      </ion-item>\n\n      <br>\n      <div>\n        <button type="submit" [disabled]="!loginForm.valid" ion-button icon-start block color="dark" tappable>\n          <ion-icon name="log-in"></ion-icon>\n          SIGN IN\n        </button>\n      </div>\n    </form>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/tmc/Documents/Ionic/TallyMarks-PBC/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__services_network_manager_service__["a" /* NetworkManagerService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_4__services_utility_service__["a" /* UtilityService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCOUNT_REQUEST; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xmlRequest__ = __webpack_require__(769);

var ACCOUNT_REQUEST = {
    LOGIN: function (data) {
        return __WEBPACK_IMPORTED_MODULE_0__xmlRequest__["a" /* XML_REQUEST */].WRAPPER("<UserLogin xmlns=\"http://tempuri.org/\">\n                  <userName>" + data.userName + "</userName>\n                  <userPassword>" + data.userPassword + "</userPassword>\n              </UserLogin>");
    }
};
//# sourceMappingURL=xmlAccountRequest.js.map

/***/ })

});
//# sourceMappingURL=4.js.map