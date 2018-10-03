webpackJsonp([7],{

/***/ 181:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 181;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		760,
		4
	],
	"../pages/popover/popover.module": [
		761,
		6
	],
	"../pages/production-entries/production-entries.module": [
		762,
		3
	],
	"../pages/production/production.module": [
		763,
		1
	],
	"../pages/rejection-entries/rejection-entries.module": [
		764,
		2
	],
	"../pages/rejection/rejection.module": [
		765,
		0
	],
	"../pages/tabs/tabs.module": [
		766,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 224;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xml2js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xml2js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NetworkManagerService = (function () {
    function NetworkManagerService(http) {
        this.http = http;
    }
    NetworkManagerService.prototype.post = function (url, body) {
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "text/xml")
            .append("dataType", "xml");
        return this.http
            .post(url, body, {
            headers: httpHeaders,
            responseType: "text"
        })
            .map(function (res) {
            var data;
            __WEBPACK_IMPORTED_MODULE_4_xml2js___default.a.parseString(res, function (err, result) {
                data = result["soap:Envelope"]["soap:Body"];
            });
            return data[0];
        });
    };
    NetworkManagerService.prototype.getForkJoin = function (request) {
        var _this = this;
        var array = [];
        request.forEach(function (item, key) {
            array.push(_this.createRequest(item.url, item.body));
        });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].forkJoin(array).map(function (data) {
            return data.map(function (res) {
                var data;
                __WEBPACK_IMPORTED_MODULE_4_xml2js___default.a.parseString(res, function (err, result) {
                    data = result["soap:Envelope"]["soap:Body"];
                });
                return data[0];
            });
        });
    };
    NetworkManagerService.prototype.createRequest = function (url, body) {
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "text/xml")
            .append("dataType", "xml");
        return this.http.post(url, body, {
            headers: httpHeaders,
            responseType: "text"
        });
    };
    NetworkManagerService.prototype.insert = function (url, body) {
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set("Content-Type", "text/xml")
            .append("dataType", "xml");
        return this.http
            .post(url, body, {
            headers: httpHeaders,
            responseType: "text"
        })
            .map(function (res) {
            var data;
            __WEBPACK_IMPORTED_MODULE_4_xml2js___default.a.parseString(res, function (err, result) {
                data = result["soap:Envelope"]["soap:Body"];
            });
            return data[0];
        });
    };
    return NetworkManagerService;
}());
NetworkManagerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], NetworkManagerService);

//# sourceMappingURL=network-manager.service.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilityService = (function () {
    function UtilityService(toast, spinner) {
        this.toast = toast;
        this.spinner = spinner;
    }
    UtilityService.prototype.createToast = function (message, duration) {
        return this.toast.create({
            message: message,
            duration: duration,
            showCloseButton: true
        });
    };
    UtilityService.prototype.createLoader = function (message) {
        if (message === void 0) { message = "Processing..."; }
        return this.spinner.create({
            content: message
        });
    };
    return UtilityService;
}());
UtilityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], UtilityService);

//# sourceMappingURL=utility.service.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ValidatorService = (function (_super) {
    __extends(ValidatorService, _super);
    function ValidatorService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor() { super() }
    // ValidateUrl(control: AbstractControl) {
    ValidatorService.ValidateUrl = function (control) {
        if (!control.value.startsWith('https') || !control.value.includes('.io')) {
            return { validUrl: true };
        }
        return null;
    };
    ValidatorService.validateIsMax = function (group) {
        var minField = group.controls['marks'], maxField = group.controls['totalMarks'];
        if (parseInt(minField.value, 10) > parseInt(maxField.value, 10)) {
            return minField.setErrors({ isMax: true });
        }
        else {
            return minField.setErrors(null);
        }
    };
    ValidatorService.validateDateDifference = function (group) {
        var joiningDate = new Date(group.controls['joiningDate'].value);
        var leavingDate = new Date(group.controls['leavingDate'].value);
        if (!joiningDate || !leavingDate)
            return;
        if (joiningDate.getTime() > leavingDate.getTime()) {
            return group.controls['joiningDate'].setErrors({ invalidMinDate: true });
        }
        else {
            return group.controls['joiningDate'].setErrors(null);
        }
    };
    ValidatorService.NoWhitespaceValidator = function (control) {
        var str = control.value.toString();
        if (!str.replace(/\s/g, '').length && str.length > 0) {
            return { whitespace: true };
        }
        else {
            return null;
        }
    };
    ValidatorService.validateCharacters = function (control) {
        var validCharacters = /[^\s\w,.:&\/()+%'`@-]/;
        // first check if the control has a value
        if (control.value && control.value.length > 0) {
            // match the control value against the regular expression
            var matches = control.value.match(validCharacters);
            // if there are matches return an object, else return null.
            return matches && matches.length ? { invalid_characters: matches } : null;
        }
        else {
            return null;
        }
    };
    ValidatorService.validateEmail = function (control) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (control.value && control.value.length > 0) {
            var matches = control.value.match(regex);
            return matches && matches.length ? null : { emailValidate: true };
        }
        else {
            return null;
        }
    };
    ValidatorService.numbersOnly = function (control) {
        var regex = '^[0-9]*$';
        if (control.value && control.value.length > 0) {
            var matches = control.value.match(regex);
            return matches && matches.length ? null : { numbers_only: true };
        }
        else {
            return null;
        }
    };
    ValidatorService.numberAndDecimal = function (control) {
        var regex = /^[-+]?[0-9]+(\.[0-9]+)?$/;
        if (control.value && control.value.length > 0) {
            var matches = control.value.match(regex);
            return matches && matches.length ? null : { numbers_decimal_only: true };
        }
        else {
            return null;
        }
    };
    ValidatorService.validateCNIC = function (control) {
        var regex = '^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$';
        if (control.value && control.value.length > 0) {
            var matches = control.value.match(regex);
            return matches && matches.length ? null : { invalid_cnic: true };
        }
        else {
            return null;
        }
    };
    ValidatorService.setCNICMask = function (event, value) { };
    ValidatorService.alphabetsOnly = function (control) {
        var validInput = /^[a-zA-Z]*$/;
        if (control.value && control.value.length > 0) {
            var match = control.value.match(validInput);
            return match && match.length ? null : { alphabets_only: true };
        }
        else {
            return null;
        }
    };
    ValidatorService.positiveOnly = function (control) {
        if (control.value < 0) {
            return { positiveOnly: true };
        }
        else {
            return null;
        }
    };
    ValidatorService.validYear = function (control) {
        var currentYear = moment().year();
        var val = control.value;
        if (val) {
            return null;
        }
        else {
            return null;
        }
    };
    ValidatorService.notFutureDate = function (control) {
        var date = new Date(control.value).getTime();
        return new Date().getTime() > date ? null : { isFutureDate: true };
    };
    ValidatorService.dropdownValidator = function (control) {
        if (parseInt(control.value, 10) > 0) {
            return null;
        }
        else {
            return { notValid: true };
        }
    };
    ValidatorService.dropdownRequired = function (control) {
        return control.value ? null : { dropdownRequired: true };
    };
    ValidatorService.FileSize = function (control) {
        if (control.value) {
            if (typeof control.value === 'string' || control.value.size < 5000000) {
                return null;
            }
            else {
                return { fileSizeLimit: true };
            }
        }
    };
    ValidatorService.validateImg = function (c) {
        if (c.value && c.value instanceof File) {
            return ValidatorService.checkExtension(c);
        }
    };
    ValidatorService.checkExtension = function (c) {
        var valToLower = c.value.name.toLowerCase();
        var regex = new RegExp('(.*?).(jpg|JPG|GIF|PNG|JPEG|png|gif|jpeg)$'); // add or remove required extensions here
        var regexTest = regex.test(valToLower);
        return !regexTest ? { notSupportedFileType: true } : null;
    };
    ValidatorService.validateDocs = function (c) {
        if (c.value && c.value instanceof File) {
            return ValidatorService.checkExtensionDocs(c);
        }
    };
    ValidatorService.checkExtensionDocs = function (c) {
        var valToLower = c.value.name.toLowerCase();
        var regex = new RegExp('(.*?).(jpg|JPG|GIF|PNG|JPEG|png|gif|jpeg|doc|DOC|pdf|PDF|docx|DOCX)$'); // add or remove required extensions here
        var regexTest = regex.test(valToLower);
        return !regexTest ? { notSupportedFileType: true } : null;
    };
    return ValidatorService;
}(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["h" /* Validators */]));

//# sourceMappingURL=validator.service.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(329);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_network_manager_service__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_utility_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validator_service__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_selectable__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false
            }, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/production-entries/production-entries.module#ProductionEntriesPageModule', name: 'ProductionEntriesPage', segment: 'production-entries', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/production/production.module#ProductionPageModule', name: 'ProductionPage', segment: 'production', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rejection-entries/rejection-entries.module#RejectionEntriesPageModule', name: 'RejectionEntriesPage', segment: 'rejection-entries', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/rejection/rejection.module#RejectionPageModule', name: 'RejectionPage', segment: 'rejection', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: "pbc",
                driverOrder: ["indexeddb", "sqlite", "websql"]
            }),
            __WEBPACK_IMPORTED_MODULE_13_ionic_selectable__["a" /* IonicSelectableModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_8__services_network_manager_service__["a" /* NetworkManagerService */],
            __WEBPACK_IMPORTED_MODULE_11__services_utility_service__["a" /* UtilityService */],
            __WEBPACK_IMPORTED_MODULE_12__services_validator_service__["a" /* ValidatorService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, keyboard) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = 'TabsPage';
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            _this.keyboard.disableScroll(true);
        });
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/tmc/Documents/Punjab Bevearage/src/app/app.html"*/'\n\n<ion-nav [root]="rootPage"  swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/tmc/Documents/Punjab Bevearage/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {LoginPage} from "../login/login";
var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/tmc/Documents/Punjab Bevearage/src/pages/settings/settings.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border">\n    <ion-title>\n      <ion-icon name="cog" class="text-primary"></ion-icon>\n      <span class="text-primary">Settings</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!-- User settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">User Settings</ion-item-divider>\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n        <ion-option value="en-GB">English (UK)</ion-option>\n        <ion-option value="en-CA">English (CA)</ion-option>\n        <ion-option value="en-AU">English (AU)</ion-option>\n        <ion-option value="en-IN">English (IN)</ion-option>\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Currency</ion-label>\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n        <ion-option value="EUR">Euro (€)</ion-option>\n        <ion-option value="GBP">Pound (£)</ion-option>\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Units</ion-label>\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n        <ion-option value="K">Kilometers (m²)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Notifications?</ion-label>\n      <ion-toggle checked="true"></ion-toggle>\n    </ion-item>\n  </ion-item-group>\n  <!-- App settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n    <ion-item>\n      <span>Clear Private Data</span>\n    </ion-item>\n    <ion-item>\n      <ion-label>Push Notifications?</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span>Privacy Policy</span>\n    </ion-item>\n  </ion-item-group>  \n\n  <!--sign out button-->\n  <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tmc/Documents/Punjab Bevearage/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ })

},[324]);
//# sourceMappingURL=main.js.map